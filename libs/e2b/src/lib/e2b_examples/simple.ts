import {Sandbox} from "@e2b/sdk";
import {DownloadedChart} from "./e2b";

export async function simple_run(next?: (chart: DownloadedChart) => void) {
    const sandbox = await Sandbox.create({id: 'vac9wt07rzvtdvxo5aoq'});
    console.log(sandbox);
    const url = sandbox.getHostname()
    console.log('https://' + url)

    await sandbox.close()
    return url;

}