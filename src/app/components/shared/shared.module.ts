import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';

import { UiModule } from './ui/ui.module';

const PUBLIC_MODULES = [
    UiModule,
]

@NgModule({
    declarations: [],
    imports: [
        CoreModule,
        ...PUBLIC_MODULES
    ],
    exports: [
        ...PUBLIC_MODULES
    ]
})
export class SharedModule {}
