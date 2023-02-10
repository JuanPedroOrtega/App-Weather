import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrease, increase, reset } from './counter.actions';
import { selectCounter } from './counter.reducer';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
    public count$: Observable<number>;

    constructor(private readonly store: Store<{ counter: number }>) {
        this.count$ = this.store.select(selectCounter);
    }

    public increase(): void {
        this.store.dispatch(increase());
    }

    public decrease(): void {
        this.store.dispatch(decrease());
    }

    public reset(): void {
        this.store.dispatch(reset());
    }
}
