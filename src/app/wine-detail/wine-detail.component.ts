import { AppDataService } from 'app/services/app-data.service';
import { Wine } from 'app/view-models/wine';
import { Component, OnInit } from '@angular/core';
import { FieldDefinition } from 'abs/dynamic-forms/field-definition';
import { Router, Params, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit {
  // errorMessage: string;
  wine: Wine;
  wineDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: "Id",
      required: true
    },
    {
      key: 'label',
      type: 'string',
      isId: false,
      label: "Label",
      required: true
    },
    {
      key: 'category',
      type: 'string',
      isId: false,
      label: "Category",
      required: true
    },    {
      key: 'origin',
      type: 'string',
      isId: false,
      label: "Region",
      required: true
    },
    {
      key: 'year',
      type: 'string',
      isId: false,
      label: "Year",
      required: false
    },
    {
      key: 'price',
      type: 'number',
      isId: false,
      label: "Price",
      required: true
    }
  ];
  
  errorMessage: string;
  operation: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: AppDataService) { }

  createWine(wine: Wine) {
    wine.id = 0;
    this.errorMessage = null;
    this.dataService.createWine(wine).subscribe(
      c => this.router.navigate(['/vines/wine-maint']),
      err => this.errorMessage = 'Error creating wine'
    );
  }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];

    if (this.operation === 'create') {
      this.wine = {id: 0, label: "", category: "", origin: "", year: "", price: null };
    }
    else 
      this.dataService.getWine(this.route.snapshot.params['id'])
        .subscribe((wine: Wine) => this.wine = wine);
  }

  updateWine(wine: Wine) {
    this.errorMessage = null;
    this.dataService.updateWine(wine).subscribe(
      c => this.router.navigate(['/vines/wine-maint']),
      err => this.errorMessage = 'Error updating wine'
    );
  }
}
