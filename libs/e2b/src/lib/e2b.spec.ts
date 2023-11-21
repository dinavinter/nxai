import {pythonInterpreter, simple_run} from "@e2b/e2b";
import {test} from "vitest";
import {codeForMe, executeCode} from "@e2b/e2b";

test('get_host_name', async () => {
  const data = await simple_run();
  expect(data).toMatch('.*.e2b.dev');
});

test('e2b_interceptor', async () => {
  const data = await pythonInterpreter(console.log);
  expect(data).toMatch('.*.e2b.dev');
})

test('code_snippet', async () => {
  const {code,content} = await codeForMe();
  await executeCode(code);
  const {stdout, stderr} = await executeCode(code);
  console.log(stdout);
  console.error(stderr);
})


 

