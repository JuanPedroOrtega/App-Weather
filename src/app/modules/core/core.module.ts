import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const MODULES = [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
]

@NgModule({
    declarations: [],
    imports: [
        ...MODULES
    ],
    exports: [
        ...MODULES
    ]
})
export class CoreModule {}
