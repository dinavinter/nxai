import { systemPromptTemplate, userPromptTemplate} from "@e2b/e2b";
import * as oidc from "./oidc";
import {codeAgent} from "../codeWriter.ts";

test('prompt_format', async () => {

    const prompt = await systemPromptTemplate.format({
       domain: "gigya oauth integration", 
        language: "typescript",
        examples: Object.entries(oidc).map(a=> ['"""\n', a, '\n"""']).join('\n-----')
    });
    
    const userPrompt = await userPromptTemplate.format({
        task: "implement authentication in my nextjs app",
    });
    
    const {code, content} =await codeAgent(prompt, userPrompt);
    console.log(code);
}, 60000);

// goal: "integrate gigya login",
//     task:"implement authentication in my nextjs app",
//     language: "typescript"
