import { Coffee } from './../../../store/models/coffee';
import { getCoffeeState } from './../../../store/selectors/app.selector';
import { AppService } from './../../../store/services/app.service';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CoffeeState } from 'src/app/store/reducers/app.reducer';
import { getCoffee } from 'src/app/store/actions/app.actions';
import { Observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {
  public data: any = [];
  public getCoffee$?: Observable<{state: CoffeeState}>;

  listEmpty: boolean = false;
  defaultListLength: number = 5;
  listLength: number = 5;
  listRowLimits = [
    5,10,15,20
  ];


  p: number = 1;

  constructor(private router: Router, private store: Store<CoffeeState>) {}

  ngOnInit(): void {
    this.getCoffee().subscribe({
      next: (res) => {
        this.data = res.state;
        console.log(res);
      }
    })
  }

  getCoffee(): Observable<{state: CoffeeState}> {
    this.getCoffee$ = this.store.select(getCoffeeState);
		return this.getCoffee$;
	}

  limitListLength(eventTarget: any){
    //Limit Table Length
    if (eventTarget.value === null || eventTarget.value === "") {
      this.listLength = this.defaultListLength;
    } else {
      this.listLength = eventTarget.value;

    }
  };

  showNext(value: any){
    //Limit Table Length
    if (value === null || value === "") {
      this.listLength = this.defaultListLength;
    } else {
      this.listLength = value;
    }

  };

  selectObject(coffeeObject: Coffee): void {
    let params: NavigationExtras;
    this.router.navigate(['/inventory/detail-page'], {queryParams: {id: coffeeObject.id}});
  }

}
