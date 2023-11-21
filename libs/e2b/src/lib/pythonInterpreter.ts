import {CodeInterpreter} from "@e2b/sdk";
import {DownloadedChart} from "./e2b";

export async function pythonInterpreter(next: (chart: DownloadedChart) => void) {
    // 1. Create sandbox
    const sandbox = await CodeInterpreter.create()


    // 2. Get code that was generated by LLM and run it
    const llmGeneratedPythonCode = 'print("Hello E2B!")'

    // `artifacts` are chart files created by matplotlib
    const {stdout, stderr, artifacts} = await sandbox.runPython(llmGeneratedPythonCode)
    next(stdout);
    if (stderr && !artifacts?.length) {
        throw new Error(stderr)
    }
    // 3. Retrieve chart files:
    for (const artifact of artifacts) {
        // Now you can save this file, send it to frontend, or anything else
        const downloadedChart = await artifact.download()
        next(downloadedChart);

    }

    // 4. Close sandbox
    await sandbox.close();

}