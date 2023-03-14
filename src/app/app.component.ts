import { Component } from '@angular/core';
import { NavigationComponent, NavigationConfig } from '@components/shared/ui/navigation/navigation.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public navigationConfig: NavigationConfig;

    constructor() {
        this.navigationConfig = NavigationComponent
            .config([
                {
                    label: 'Home',
                    link: '/home',
                },
                {
                    label: 'LogIn',
                    link: '/showcase',
                },
            ])
            .build();
    }
}
