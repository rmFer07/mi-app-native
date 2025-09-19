import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { HomeComponent } from './home.component';

const routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [HomeComponent]
})
export class HomeModule {}
