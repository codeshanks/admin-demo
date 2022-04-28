import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.scss']
})
export class DocumentDetailComponent implements OnInit {
  @Input()
  set documentId(value: number){
    if(value > 0){
      console.log(value);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
