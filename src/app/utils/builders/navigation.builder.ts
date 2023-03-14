export type NavigationConfig = {
    items: NavigationItem[],
}

export type NavigationItem = {
    label: string,
    link: string,
    icon?: string,
}

export class NavigationBuilder {
    private items: NavigationItem[] = [];

    public static new(): NavigationBuilder {
        return new NavigationBuilder();
    }

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
