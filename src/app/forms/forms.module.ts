import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { FormsComponent } from './forms.component';

const routes = [
    { path: '', component: FormsComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [FormsComponent]
})
export class FormsModule {}
