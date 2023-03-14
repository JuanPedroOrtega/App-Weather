import { Component } from '@angular/core';

import { NavigationBuilder, NavigationConfig } from '@utils/builders/navigation.builder';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public navigationConfig: NavigationConfig;

    constructor() {
        this.navigationConfig = NavigationBuilder.new()
            .withItems([
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
