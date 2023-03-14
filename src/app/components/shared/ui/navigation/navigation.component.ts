import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationConfig } from '@utils/builders/navigation.builder';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
    @Input()
    public config: NavigationConfig | undefined;

    public isOpen = false;

    constructor(router: Router) {
        router.events.subscribe(() => (this.isOpen = false));
    }

    public toggleNavigation(): void {
        this.isOpen = !this.isOpen;
    }
}
