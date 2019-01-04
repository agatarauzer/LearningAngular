import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'sortName',
  pure: true
})
export class SortNamePipe implements PipeTransform {

  transform(value: Array<Task>, args?: any): Array<Task> {
    return value.sort((a, b) => {
      if (a.name.toLocaleLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
