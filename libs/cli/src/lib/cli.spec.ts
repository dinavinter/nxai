import { cli } from 'sbx';
import {pythonInterpreter, simple_run} from "@e2b/e2b";
import {observable} from "@e2b/e2b";

test('get_host_name', async () => {
  const data = await simple_run();
  expect(data).toBe('i3xbevlfnxvhtahhaqbhj-3e32eddb.e2b.dev');
});

test('e2b_interceptor', async () => {
  const data = await pythonInterpreter(console.log);
  expect(data).toBe('i3xbevlfnxvhtahhaqbhj-3e32eddb.e2b.dev');
})



 

