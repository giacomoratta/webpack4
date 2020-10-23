import { Component } from '@angular/core'

@Component({
    selector: 'root-app',
    styles: [],
    template: require('./app.component.html')
})

export class AppRoot {
    message = 'Hello Angular'
}