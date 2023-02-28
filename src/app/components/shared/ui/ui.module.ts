import { NgModule } from '@angular/core';

import { CoreModule } from 'src/app/modules/core/core.module';
import { NavigationComponent } from './navigation/navigation.component';

const declarations = [
    NavigationComponent,
]

@NgModule({
    declarations: [
        ...declarations,
    ],
    imports: [
        CoreModule,
    ],
    exports: [
        ...declarations
    ]
})
export class UiModule {}
