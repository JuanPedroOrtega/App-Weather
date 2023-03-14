import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

class NavigationBuilder {
    private items: NavigationItem[] = [];

    public withItems(items: NavigationItem[]): NavigationBuilder {
        this.items = items;

        return this;
    }

    public build(): NavigationConfig {
        return {
            items: this.items
        }
    }
}

type NavigationItem = {
    label: string,
    link: string,
}

export type NavigationConfig = {
    items: NavigationItem[],
}

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
        router.events.subscribe(() => this.isOpen = false);
    }

    public static config(items: NavigationItem[]): NavigationBuilder {
        return (new NavigationBuilder())
            .withItems(items);
    }

    public toggleNavigation(): void {
        this.isOpen = !this.isOpen;
    }
}
