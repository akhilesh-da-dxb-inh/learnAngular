import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  template: ` <h2>demo works!</h2>`,
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {}
