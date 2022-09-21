import { makeAutoObservable } from "mobx";
import { MockStore } from "./../mocks/main";
import { TButtonState } from "./../stories/Button";

class StoreClass {
  constructor() {
    makeAutoObservable(this);
  }
  private _disabled: boolean = false;
  private _buttonState: TButtonState = "ACTIVE";
  public get disabled(): boolean {
    return this._disabled;
  }
  public set disabled(value: boolean) {
    this._disabled = value;
  }

  public get buttonState(): TButtonState {
    return this._buttonState;
  }
  public set buttonState(value: TButtonState) {
    this._buttonState = value;
  }

  async toggleButtonState(): Promise<void> {
    const response = await MockStore.setupButtonStateMock();
    this.buttonState = response.data;
  }
}

export const Store = new StoreClass();
