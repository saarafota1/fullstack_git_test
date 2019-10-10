import { Component, OnInit } from '@angular/core';
import { Hero } from './../Models/hero';

@Component({
    selector: 'app-heros',
    templateUrl: './heros.component.html',
    styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
    title = "Heros Component...";
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 90, 0];
    constructor() {

    }

    ngOnInit() {
        setTimeout(() => {
            this.arr.push(55);
            this.title = "New Title";
        }, 3000);
    }

}


