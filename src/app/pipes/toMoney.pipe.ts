import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMoney'
})
export class ToMoneyPipe implements PipeTransform {

  transform(value: any): number {
    let result: number = Number(value);
    if (result != NaN)
      result.toFixed(2)
    return result;
  }

}
