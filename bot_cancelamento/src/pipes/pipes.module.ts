import { NgModule } from '@angular/core';
import {RelativeTime} from './relative-time/relative-time';
import { SafePipe } from './safe/safe';
@NgModule({
	declarations: [RelativeTime,
    SafePipe],
	imports: [],
	exports: [RelativeTime,
    SafePipe]
})
export class PipesModule {}
