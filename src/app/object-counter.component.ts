import { Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
    selector: 'object-counter',

    template: `<h1> Counter : {{counter().value}} </h1>
    <h3>Computed Double Counter: {{doubleCounter()}} </h3>
    <button (click)="incrementCount()">Increment Count</button>
    `,
    standalone: true
})

export class ObjectComponent implements OnInit {
    constructor() { }

    counter = signal({
        value: 0
    })

    doubleCounter = computed(() => this.counter().value * 2)

    ngOnInit() {
        effect(() => {
            this.logCounterValue();
        })
    }

    incrementCount() {

        // Which sets the value directly 
        // this.counter.set({
        //     value: this.counter().value + 1
        // })

        // console.log(this.counter.set);

        // Which holds the current state value
        this.counter.update((state) => {
            state.value = state.value + 1
            return state
        })

        this.counter.mutate((state) => {
            console.log(state, 'Mutate Method Called');
            state.value = state.value + 1
        })
    }

    logCounterValue() {
        console.log(this.counter().value);

    }
}