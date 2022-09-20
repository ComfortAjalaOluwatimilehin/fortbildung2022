import { observer } from "mobx-react";
import "./App.css";
import { Store } from "./stores/button.store";
import { Button } from "./stories/Button";

export const App : React.FC<any> = observer(()  => {
  console.log(Store.buttonState)
  return (
    <div className="App">
      <header className="App-header">Storybook tutorial</header>
      <section>
        <Button
          onClick={() => {
            Store.buttonState = "DISABLED";
          }}
          state={Store.buttonState}
        >
          Disable Me
        </Button>
      </section>
    </div>
  );
})


