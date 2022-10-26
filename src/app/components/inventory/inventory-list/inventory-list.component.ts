import { Coffee } from './../../../store/models/coffee';
import { getCoffeeState } from './../../../store/selectors/app.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoffeeState } from 'src/app/store/reducers/app.reducer';
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
  p: number = 1;

  constructor(private router: Router, private store: Store<CoffeeState>) {}

  ngOnInit(): void {
    this.getCoffee().subscribe({
      next: (res) => {
        this.data = res.state;
      }
    })
  }

  getCoffee(): Observable<{state: CoffeeState}> {
    this.getCoffee$ = this.store.select(getCoffeeState);
		return this.getCoffee$;
	}

  selectObject(coffeeObject: Coffee): void {
    let params: NavigationExtras;
    this.router.navigate(['/inventory/detail-page'], {queryParams: {id: coffeeObject.id}});
  }

}
