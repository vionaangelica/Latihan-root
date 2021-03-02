import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {
  private dataNama : String = "usercoba"
  constructor() { }

  public getNama(){
    return this.dataNama;
  }

  public setNama(nama : String){
    this.dataNama = nama;
  }

}