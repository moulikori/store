import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { appConstant } from '../app.constant';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

product: Product | any = '';
id: number | String = '';

constructor(
  private activatedRoute: ActivatedRoute,
  private http: HttpClient
) {}

ngOnInit(): void {
  this.activatedRoute.params.subscribe((data) => {
    this.getProduct((data as any).id);
  });
}
getProduct(id: number) {
  this.http
    .get(`${environment.apiEndpoint}${appConstant.apiRoute.products}/${id}`)
    .subscribe((data) => {
      this.product = data;
      console.log(data);
    });
}
}