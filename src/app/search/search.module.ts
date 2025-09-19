import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { SearchComponent } from './search.component';

const routes = [
    { path: '', component: SearchComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [SearchComponent]
})
export class SearchModule {}
