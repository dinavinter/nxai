import {pythonInterpreter, simple_run} from "@e2b/e2b";
import {expect, test} from "vitest";
import {codeForMe, executeCode} from "@e2b/e2b";

test('get_host_name', async () => {
  const data = await simple_run();
  expect(data).toMatch(/e2b.dev/)
});

test('python_interpreter', async () => {
  const {result,error, artifacts} = await pythonInterpreter('print("Hello E2B!")');
  expect(result).toMatch("Hello E2B!");
  expect(error).toBeNaN();
  expect(artifacts).toHaveLength(1);
})


test('code_snippet', async () => {
  const {code,content} = await codeForMe();
  await executeCode(code);
  const {error, result} = await executeCode(code);
  console.log(error, result);
  expect(error).toBeNaN(); 
}, 60000)


 

