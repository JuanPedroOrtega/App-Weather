import { NgModule } from '@angular/core';

import { CoreModule } from '@core/core.module';

import { HistoryPageRoutingModule } from './history-page-routing.module';
import { HistoryPageComponent } from './history-page.component';

@NgModule({
    declarations: [HistoryPageComponent],
    imports: [CoreModule, HistoryPageRoutingModule],
})
export class HistoryModule {}
