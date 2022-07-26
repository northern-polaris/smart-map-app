import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _state = {};
  private _stateObserver: BehaviorSubject<any>;

  constructor() {
    this._stateObserver = new BehaviorSubject(null);
  }

  get stateObserver(): BehaviorSubject<any> {
    return this._stateObserver;
  }

  set setState(value: object) {
    let newState = { ...this._state, ...value };
    this._state = newState;

    this._stateObserver.next(newState);
  }
}
