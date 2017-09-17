import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiToolbarService} from 'ng-smn-ui';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

    constructor(private titleService: Title, private toolbarService: UiToolbarService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Biblioteca Virtual');
        this.toolbarService.set('Biblioteca Virtual');
    }
}
