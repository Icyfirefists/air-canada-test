import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCoffee } from './store/actions/app.actions';
import { CoffeeState } from './store/reducers/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'air-canada-test';

  constructor(private store: Store<CoffeeState>) {

  }

  ngOnInit() {
    this.store.dispatch(getCoffee());
  }
}
