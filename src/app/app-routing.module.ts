import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./components/pages/home-page/home-page.module').then(m => m.HomePageModule)
    },
    {
        path: 'showcase',
        loadChildren: () => import('./components/pages/weather-showcase/weather-showcase.module').then(m => m.WeatherShowcaseModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
