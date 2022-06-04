import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilter',
})
export class ListFilterPipe implements PipeTransform {
  transform(arr: any) {
    return arr.filter((item: any) => item.skill === 'Angular');
  }
}
