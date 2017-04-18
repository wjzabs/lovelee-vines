import { AppDataService } from './../services/app-data.service';
import { Wine } from 'app/view-models/wine';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-wine-maint',
  templateUrl: './wine-maint.component.html',
  styleUrls: ['./wine-maint.component.css']
})
export class WineMaintComponent implements OnInit {

  wines: Array<Wine>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(
    private dataService: AppDataService,
    private router: Router) {
      dataService.getWines().subscribe((data) => this.wines = data);
     }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createWine() {
    this.router.navigate(['/vines/wine-detail', 0, 'create']);
  }
  
  ngOnInit() {
  }

  deleteWine(id: number) {
    this.isDeleting = true;
    this.dataService.deleteWine(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
    );
  }

  deleteWineQuestion(id:number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editWine(id:number) {
    this.router.navigate(['/vines/wine-detail',id,'edit']);
  }

  showWineDetail(id: number) {
    this.router.navigate(['/vines/wine-detail', id, 'details'])
  }
}