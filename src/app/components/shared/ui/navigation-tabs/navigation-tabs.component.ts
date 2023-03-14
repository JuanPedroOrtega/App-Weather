import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationConfig } from '@utils/builders/navigation.builder';

@Component({
    selector: 'app-navigation-tabs',
    templateUrl: './navigation-tabs.component.html',
    styleUrls: ['./navigation-tabs.component.scss'],
})
export class NavigationTabsComponent {
    @Input()
    public config: NavigationConfig | undefined;

    public activeRoute: string = '';

    constructor(private readonly router: Router) {
        this.activeRoute = this.router.url.split('/')[2]
    }
}
