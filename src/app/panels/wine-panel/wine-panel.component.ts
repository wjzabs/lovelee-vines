import { Wine } from 'app/view-models/wine';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-wine-panel',
  templateUrl: './wine-panel.component.html',
  styleUrls: ['./wine-panel.component.css']
})
export class WinePanelComponent implements OnInit {

  @Input() wine: Wine;
  @Input() index = 1;
  
  constructor() { }

  ngOnInit() {
    this.wine['score'] = this.wine['score'] || 0;
console.log(this.wine);

  }
rateWine(i){
  this.wine['score'] = i;
}
}
