import { Wine } from 'app/view-models/wine';
import { AppDataService } from 'app/services/app-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

  allWines: Array<Wine>;
  count = 0;
  wines: Array<Wine>;

  constructor(
    private dataservice: AppDataService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
      this.dataservice.getWines().subscribe(
        wines => {
          this.allWines = wines;

          this.count = this.route.snapshot.params['count'];
          this.updateList();
        }
      );

      this.route.params.subscribe(params => {
        this.count = params['count'];
        this.updateList();
      })
  }

  updateList() {
    this.wines = this.count > 0 
      ? this.allWines.slice(0, this.count)
      : this.allWines
  }

}
