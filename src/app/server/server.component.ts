import { LowerCasePipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
})

export class ServerComponent {

    name = 'Ther server Component';
    serverID = 10;
    serverStatus = 'Óffline';

    getServerStatus(){
        return (this.serverStatus);
    }

    
}