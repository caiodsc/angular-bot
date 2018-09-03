import { NgModule } from '@angular/core';
import { QuickReplyComponent } from './quick-reply/quick-reply';
import { CardComponent } from './card/card';
@NgModule({
	declarations: [QuickReplyComponent,
    CardComponent],
	imports: [],
	exports: [QuickReplyComponent,
    CardComponent]
})
export class ComponentsModule {}
