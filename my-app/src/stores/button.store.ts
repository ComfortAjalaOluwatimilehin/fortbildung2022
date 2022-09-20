import { makeAutoObservable } from "mobx";
import { TButtonState } from "./../stories/Button";

class StoreClass {
  constructor() {
    makeAutoObservable(this);
  }
  private _buttonState: TButtonState = "ACTIVE";
  public get buttonState(): TButtonState {
    return this._buttonState;
  }
  public set buttonState(value: TButtonState) {
    this._buttonState = value;
  }

  disabled: boolean = false;
}

export const Store = new StoreClass();
