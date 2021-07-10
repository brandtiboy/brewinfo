import { useState } from "react";
import { Switch, Route } from "react-router-dom";

// SCSS
import "./App.scss";

// Components
import Frontpage from "./components/pages/frontpage";
import ChooseSize from "./components/pages/chooseSize";

// Util
import grindOptions from "./utils";

function App() {
  // States
  const [grindsize, setGrindsize] = useState(grindOptions());
  const [currentGrindSize, setCurrentGrindSize] = useState(grindsize[0]);
  const [grindamount, setGrindamount] = useState("13g");
  const [water, setWater] = useState("220ml");

  return (
    <div className='App container'>
      <Switch>
        <Route path='/' exact>
          <Frontpage
            currentGrindSize={currentGrindSize}
            grindamount={grindamount}
            water={water}
          />
        </Route>
        <Route path='/grindsize'>
          <ChooseSize
            grindsize={grindsize}
            setCurrrentGrindSize={setCurrentGrindSize}
            id={grindsize.id}
            key={grindsize.id}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
