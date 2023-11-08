import { Component } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...Products];
  share() {
    window.alert('The product has been shared! yes this is Was the product shows');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
