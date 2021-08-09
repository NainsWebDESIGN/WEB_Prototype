import { Component, OnInit, HostListener } from '@angular/core';
import { ShareService } from '@service/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  SetWidth(_Event) { this.scrollHeight = _Event.srcElement.scrollingElement.scrollTop; }
  scrollHeight: number;
  testArr: any[] = [
    { title: "分類1", CHID: 1 },
    { title: "分類2", CHID: 2 },
    { title: "分類3", CHID: 3 }
  ];
  constructor(public share: ShareService) { }
  ngOnInit() {
  }
}
