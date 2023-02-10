import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CounterComponent } from './counter.component';
import { counterFeature } from './counter.reducer';

@NgModule({
    declarations: [CounterComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(counterFeature)
    ],
    exports: [
        CounterComponent
    ]
})
export class CounterModule {}
