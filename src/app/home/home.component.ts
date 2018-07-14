import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CounterState } from './home.state';
import * as actions from '../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<CounterState>){
    this.count$ = store.pipe(select('count'));  
  }
  
  increment(){
    this.store.dispatch({type: actions.INCREMENT});
  }

  ngOnInit() {
  }
  
}
