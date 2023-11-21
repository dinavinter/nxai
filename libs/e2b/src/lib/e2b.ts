import {Observable, Subscribable, Subscriber} from 'rxjs';
import {simple_run} from "./simple";


export type DownloadedChart = string | Blob | ArrayBuffer;

export function observable(): Subscribable<DownloadedChart> {
  return new Observable((subscriber: Subscriber<DownloadedChart>) => {
    simple_run(subscriber.next)
        .catch((err) => subscriber.error(err))
        .then(() => subscriber.complete());
  });   
  

}



