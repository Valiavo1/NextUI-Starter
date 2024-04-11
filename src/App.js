import './App.css';
import {Card, CardBody} from "@nextui-org/react";
import Tabletest from "./Tabletest";

function App() {
  return (
    <div className="App">
        <Card>
            <CardBody>
                <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
        </Card>
        <Tabletest/>
      <h1 className="text-red-400">APP</h1>
    </div>
  );
}

export default App;
