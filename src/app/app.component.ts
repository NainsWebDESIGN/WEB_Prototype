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
    { title: "影片", CHID: 1 },
    { title: "分類", CHID: 2 },
    { title: "女優", CHID: 3 }
  ];
  constructor(public share: ShareService) { }
  ngOnInit() {
  }
}
