import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from './ui/ui.module';

const PUBLIC_MODULES = [
    UiModule
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...PUBLIC_MODULES
    ],
    exports: [
        ...PUBLIC_MODULES
    ]
})
export class SharedModule {}
