import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value): any {
    let keys = [];
    // tslint:disable-next-line:forin
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
  backToObject(value): any {
    const obj = {};
    value.forEach(element => {
      obj[element.key] = element.value;
    });
    return obj;
  }

}
