import { Component } from '@angular/core';

@Component({
    selector: 'my-nav',
    template: `<nav>
                <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
              </nav>`
})

export class NavComponent {
}