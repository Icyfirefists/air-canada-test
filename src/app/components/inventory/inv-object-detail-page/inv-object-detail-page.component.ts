import { Coffee } from './../../../store/models/coffee';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoffeeState } from 'src/app/store/reducers/app.reducer';
import { getCoffeeState } from 'src/app/store/selectors/app.selector';

@Component({
  selector: 'app-inv-object-detail-page',
  templateUrl: './inv-object-detail-page.component.html',
  styleUrls: ['./inv-object-detail-page.component.scss']
})
export class InvObjectDetailPageComponent implements OnInit {;

  public coffeeObject: any = null;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<CoffeeState>) { }

  ngOnInit(): void {
    this.getCoffeeObject()
  }

  getCoffeeObject(): void {
    let currentObjectId: number;
    let dataCollection: any;
    let foundCoffee: Coffee;
    this.route.queryParams.subscribe(params => {
      currentObjectId =  params['id'];
    });
    this.store.select(getCoffeeState).subscribe({
      next: (res) => {
        this.route.queryParams.subscribe(params => {
          currentObjectId =  params['id'];
          dataCollection = res.state;
          if (dataCollection.find((x: Coffee) => x.id === Number(currentObjectId)) !== undefined) {
            foundCoffee = dataCollection.find((x: Coffee) => x.id === Number(currentObjectId));
            this.coffeeObject = foundCoffee;
            return this.coffeeObject;
          } else {
            this.router.navigate(['/inventory']);
          }
        });
      }
    });
	}

}
