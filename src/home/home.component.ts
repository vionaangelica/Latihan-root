import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  paramnama : string;
  ngOnInit() {
    let isiNama = this.route.snapshot.paramMap.get('nama');
    this.paramnama = isiNama;
    
  }

}