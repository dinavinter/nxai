import {observable} from "@e2b/e2b";
import { exit } from "node:process";
import * as process from "process";
import * as readline from "readline";


async function main() {

    const stream = observable();
    await new Promise<void>(resolve =>
        stream.subscribe({
            next: (chart) => {
                console.log(chart);
            },
            complete: () => {
                console.log('done');
                resolve();
            },
            error: (err) => console.error(err)
        }));


}


main()
    .then(() => exit(0))
    .catch(err => console.error(err));

const cli= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//press ESC to exit
cli.on('SIGINT', () => {
    console.log('Got SIGINT. Exiting gracefully');
    exit(0);
});
cli.question('Press ESC to exit', (answer) => {
    console.log('Exiting gracefully');
    exit(0);
});