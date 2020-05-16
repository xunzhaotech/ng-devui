import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputModule } from '../text-input.module';
import { TextInputDemoComponent } from './text-input-demo.component';
import { BasicComponent } from './basic/basic.component';
import { DevUICodeboxModule } from 'ng-devui/shared/devui-codebox';
import { DevUIApiComponent } from 'ng-devui/shared/devui-api/devui-api.component';
import { DevUIApiModule } from 'ng-devui/shared/devui-api/devui-api.module';
import { StickyModule } from '../../sticky';
import { AnchorModule } from '../../anchor';
import { DDemoNavModule } from 'src/app/component/d-demo-nav.module';

@NgModule({
  imports: [
    DDemoNavModule,
    CommonModule,
    TextInputModule,
    DevUICodeboxModule,
    DevUIApiModule,
    StickyModule,
    AnchorModule,
    RouterModule.forChild([
      { path: '',  redirectTo: 'demo' },
      { path: 'demo', component: TextInputDemoComponent},
      { path: 'api', component: DevUIApiComponent, data: {
        api: require('!html-loader!markdown-loader!../doc/api.md')
      }}
    ])
  ],
  exports: [TextInputDemoComponent],
  declarations: [
    TextInputDemoComponent,
    BasicComponent
  ],
  entryComponents: [
    TextInputDemoComponent,
  ],
})
export class TextInputDemoModule {
}

