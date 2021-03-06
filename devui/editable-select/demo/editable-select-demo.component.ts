import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';
import { Component } from '@angular/core';
@Component({
  selector: 'd-editable-select-demo',
  templateUrl: './editable-select-demo.component.html',
})
export class EditableSelectDemoComponent {
  BasicSource: Array<DevuiSourceData> = [
    {title: 'HTML', language: 'xml', code:  require('!!raw-loader!./basic/with-source.component.html')},
    {title: 'TS', language: 'typescript', code: require('!!raw-loader!./basic/with-source.component.ts')},
  ];
  SearchFnSource: Array<DevuiSourceData> = [
    {title: 'HTML', language: 'xml',
      code:  require('!!raw-loader!./search-function/with-search-function.component.html')},
    {title: 'TS', language: 'typescript',
      code: require('!!raw-loader!./search-function/with-search-function.component.ts')},
  ];
  DisableDataSource: Array<DevuiSourceData> = [
    {title: 'HTML', language: 'xml',
      code:  require('!!raw-loader!./disable-data/disable-data-with-source.component.html')},
    {title: 'TS', language: 'typescript',
      code: require('!!raw-loader!./disable-data/disable-data-with-source.component.ts')},
  ];
  AsyncDataSearchFnSource: Array<DevuiSourceData> = [
    {title: 'HTML', language: 'xml',
      code: require('!!raw-loader!./async-data-function/async-data-with-function.component.html')},
    {title: 'TS', language: 'typescript',
      code: require('!!raw-loader!./async-data-function/async-data-with-function.component.ts')},
  ];
  LazyLoadComponentSource: Array<DevuiSourceData> = [
    {title: 'HTML', language: 'xml',
      code: require('!!raw-loader!./lazy-load/lazy-load.component.html')},
    {title: 'TS', language: 'typescript',
      code: require('!!raw-loader!./lazy-load/lazy-load.component.ts')},
  ];
  constructor() {
  }
}
