import {CodeInterpreter} from "@e2b/sdk";
import {DownloadedChart} from "./e2b";

export async function pythonInterpreter(code:string='print("Hello E2B!")') {
    
    // 1. Create sandbox
    const sandbox = await CodeInterpreter.create()

    // 2. Run the code.
    const {stdout, stderr, artifacts} = await sandbox.runPython(code)
     

    // 4. Close sandbox
    await sandbox.close();
      
     
     return {
         result: stdout,
         error: stderr === ''? NaN : stderr,
         /// `artifacts` are chart files created by matplotlib
         artifacts
     }

}