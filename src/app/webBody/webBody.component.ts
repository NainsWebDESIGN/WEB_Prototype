import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { api } from '@ts/API';
import { ShareService } from '@service/share.service';
import { ApiService } from '@service/api.service';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-webBody',
  templateUrl: './webBody.component.html',
  styleUrls: ['./webBody.component.scss']
})
export class WebBodyComponent implements OnInit {
  params: number;
  avgle = api['avgle'];
  video: any[] = [];
  constructor(private acr: ActivatedRoute, public share: ShareService, private Api: ApiService) { }
  getApi(url) {
    let Observer = {
      next: el => { console.log(el, url); this.video = el.videos; },
      error: err => console.log(err)
    };
    this.Api.postApi(url).subscribe(Observer);
  }
  ngOnInit() {
    this.acr.params.subscribe(params => {
      let page = 1, limit = el => ("?limit=" + el);
      this.params = Number(params.data);
      this.getApi(
        (this.params == 1) ? this.avgle['video'] + page + limit(50) :
          (this.params == 2) ? this.avgle['type'] : this.avgle['page'] + page + limit(50)
      );
    });
  }

}
