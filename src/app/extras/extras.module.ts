import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { ExtrasComponent } from './extras.component';

const routes = [
    { path: '', component: ExtrasComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [ExtrasComponent]
})
export class ExtrasModule {}
