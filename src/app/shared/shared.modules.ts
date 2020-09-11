import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularMaterialModule } from './angular-material/angular-material.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopHeaderComponent } from './top-header/top-header.component';



@NgModule({
    declarations: [
        ToolbarComponent,
        TopHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AngularMaterialModule,
        FlexLayoutModule

    ],
    exports: [
        ToolbarComponent,
        TopHeaderComponent,
        AngularMaterialModule,
        FlexLayoutModule
    ],
})
export class SharedModule { }