import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
})
export class FileSizePipe implements PipeTransform {
  transform(value: any) {
    const result = value / (1024 * 1024);

    return result.toFixed(2);
  }
}
