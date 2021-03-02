import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalvarService } from "./globalvar.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
  name = "Angular " + VERSION.major;

  constructor(private router: Router, private globalvar : GlobalvarService) {
    this.namaGlobal = this.globalvar.getNama();
  }
  namaGlobal
  textNama = ""  

  OpenHalLogin() {
    this.globalvar.setNama(this.textNama);
    this.namaGlobal = this.globalvar.getNama();
    this.router.navigate(["/home/"+this.textNama]);
  }
}
