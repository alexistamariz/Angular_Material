import { Component } from "@angular/core";

@Component({
    selector: 'app-profile-nav',
    templateUrl: './profile-nav.component.html',
    styleUrls: ['./profile-nav.component.css']
})
export class ProfileNavComponent{
    state = 'opened';

    constructor(){

    }
}