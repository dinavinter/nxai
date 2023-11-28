import e2b, {CodeRuntime, runCode} from "@e2b/sdk";
import OpenAI from "openai";
import {ChatCompletion} from "openai/resources";
// The OpenAI functions we want to use in our model.
const functions = [
    {
        name: "exec_code",
        description:
            "Executes the passed JavaScript code using Nodejs and returns the stdout and stderr. Always produce valid JSON.",
        parameters: {
            type: "object",
            properties: {
                code: {
                    type: "string",
                    description: "The JavaScript code to execute.",
                },
            },
            required: ["code"],
        },
    },
];

async function parseGptResponse(response: ChatCompletion) {
    const message = response.choices[0].message;
    const content = message["content"];
    const func = message["function_call"];

    function getCode() {
        if (func) {
            const funcName = func["name"];

            // Get rid of newlines and leading/trailing spaces in the raw function arguments JSON string.
            // This sometimes help to avoid JSON parsing errors.
            let args = func["arguments"];
            args = args.trim().replace(/\n|\r/g, "");
            // Parse the cleaned up JSON string.
            const funcArgs = JSON.parse(args);

            // If the model is calling the exec_code function we defined in the `functions` variable, we want to save the `code` argument to a variable.
            if (funcName === "exec_code") {
                return  funcArgs["code"];

            }
        }
    }

    const code = getCode();
    console.log(content, code);
    return { content ,code };

}

const openai = new OpenAI();

export async function codeAgent(system:string,   prompt:string) {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k", // Or use 'gpt-3.5-turbo'
        messages: [
            {
                role: "system",
                content:  system
            }, 
            {
                role: "user",
                content: prompt,
            },
        ],
        functions,
    });

    return await parseGptResponse(chatCompletion);

}
export async function codeForMe(prompt: string="Generate first 100 fibonacci numbers") {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-16k", // Or use 'gpt-3.5-turbo'
        messages: [
            {
                role: "system",
                content: "You are a senior developer that can code in JavaScript.",
            },
            {
                role: "user",
                content: "Write hello world",
            },
            {
                role: "assistant",
                content: null,
                 function_call: {
                    arguments: '{"code": "console.log("hello world")"}',
                     name: "exec_code",
                 }
            },
            {
                role: "user",
                content: prompt,
            },
        ],
        functions,
    });

    return await parseGptResponse(chatCompletion);
}

export async function executeCode(code: string) {
    // Execute the code using E2B.
    const {stdout, stderr}  = await runCode(CodeRuntime.Node16, code);
    return {
        result: stdout,
        error: stderr === ''? NaN : stderr
    }
}
    