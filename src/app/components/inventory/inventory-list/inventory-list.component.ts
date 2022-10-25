import { getCoffeeState } from './../../../store/selectors/app.selector';
import { AppService } from './../../../store/services/app.service';
import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/store/models/coffee';
import { select, Store } from '@ngrx/store';
import { CoffeeState } from 'src/app/store/reducers/app.reducer';
import { coffeeStateQL } from 'src/app/store/selectors/app.selector';
import { getCoffee } from 'src/app/store/actions/app.actions';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {
  public data: any = [];
  public getCoffee$?: Observable<{state: CoffeeState}>;

  constructor(private appService: AppService, private store: Store<CoffeeState>) {}

  ngOnInit(): void {
    this.getCoffee().subscribe({
      next: (res) => {
        this.data = res.state;
      }
    })
  }

  getCoffee(): Observable<{state: CoffeeState}> {
		this.store.dispatch(getCoffee());
    this.getCoffee$ = this.store.select(getCoffeeState);
		return this.getCoffee$;
	}
}
