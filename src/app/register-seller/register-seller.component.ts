import { Component, OnInit } from '@angular/core';
import { Seller } from '../seller';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.scss']
})
export class RegisterSellerComponent implements OnInit {

  seller:Seller = new Seller();

  constructor() { }

  ngOnInit(): void {
  }

  sellerRegister(){
    console.log(this.seller);
  }

}
