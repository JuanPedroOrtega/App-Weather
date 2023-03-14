import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        children: [
            {
                path: '',
                redirectTo: 'current-weather',
                pathMatch: 'full'
            },
            {
                path: 'current-weather',
                loadChildren: () => import('@components/pages/current-weather-page/current-weather-page.module').then(m => m.CurrentWeatherPageModule)
            },
            {
                path: 'history',
                loadChildren: () => import('@components/pages/history-page/history-page.module').then(m => m.HistoryModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {}
