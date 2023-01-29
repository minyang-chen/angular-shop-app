import { Component, Input,  Output, EventEmitter  } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  //property values paases in from the component parent
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();


}
