import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ridefilter'
})
export class RidefilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
