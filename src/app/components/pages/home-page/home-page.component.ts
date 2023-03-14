import { Component, OnInit } from '@angular/core';

import { NavigationBuilder, NavigationConfig } from '@utils/builders/navigation.builder';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    public navigationConfig: NavigationConfig;

    constructor() {
        this.navigationConfig = NavigationBuilder.new()
        .withItems([
            {
                label: 'Today',
                link: 'current-weather',
                icon: 'day-sunny',
            },
            {
                label: 'History',
                link: 'history',
                icon: 'refresh',
            },
        ]).build();
    }

    ngOnInit(): void {}
}
