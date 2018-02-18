import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRecords',
  pure: false
})
export class FilterRecordsPipe implements PipeTransform {

  transform(data: any, args?: any): any {
    if (data && args && args.length != 0) {
      var argsWithSearchStr = args.filter(item => item.searchStr.trim().length != 0);
      var result = data.slice(0);

      var searchPara: any;
      for(searchPara of argsWithSearchStr) {
        result = result.filter(item => item[searchPara.field].toString().toLowerCase().indexOf(searchPara.searchStr) != -1);
      }
      
      return result;
    } else {
      return data;
    }
  }
}
