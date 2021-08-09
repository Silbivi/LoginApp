import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categories = [];
  public product = [];
  public best = [];

  constructor(
    private data : DataService,
  ) {}

  ngOnInit(){
    this.categories = this.data.getCategory();
    this.product = this.data.getFuturedProduct();
    this.best = this.data.getBestSeller();
  }

}
