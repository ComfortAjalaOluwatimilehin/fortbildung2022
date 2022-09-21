import axios from "axios";
class MockClass {
    constructor(){
        this.setupButtonStateMock()
    }
  async setupButtonStateMock(): Promise<any> {
    return axios.get<{data:string}>("http://localhost:1080/disablebutton")
  }
}

export const MockStore = new MockClass();
