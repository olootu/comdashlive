import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { YearDateDisplayComponent } from './year-date-display/year-date-display.component';
import { CardComponent } from './miscellaneous/card/card.component';
import { LimeButtonComponent } from './miscellaneous/lime-button/lime-button.component';



@NgModule({
    declarations: [
        ToolbarComponent,
        TopHeaderComponent,
        YearDateDisplayComponent,
        CardComponent,
        LimeButtonComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AngularMaterialModule,
        FlexLayoutModule,
        PrimeNgModule
    ],
    exports: [
        ToolbarComponent,
        TopHeaderComponent,
        YearDateDisplayComponent,
        AngularMaterialModule,
        FlexLayoutModule,
        CardComponent,
        PrimeNgModule,
        LimeButtonComponent
    ],
})
export class SharedModule { }
