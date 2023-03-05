import { Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `<h1> Counter : {{counter()}} </h1>
    <h3>Computed Double Counter: {{doubleCounter()}} </h3>
    <button (click)="incrementCount()">Increment Count</button>
    `,
    standalone: true
})

export class CountComponent implements OnInit {
    constructor() { }

    counter = signal(0)
    doubleCounter = computed(() => this.counter() * 2)
    ngOnInit() {
        effect(() => {
            this.showCounter()
        })
    }

    incrementCount() {
        this.counter.set(this.counter() + 1)
    }

    showCounter() {
        console.log(`Current Counter`, this.counter());
    }

}