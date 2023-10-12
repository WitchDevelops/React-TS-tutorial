import Alert from "./components/Alert";
import { useState } from "react";

import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        <h1>Danger</h1>
        <p>You have clicked a button.</p>
      </Alert>}
      <Button color="danger" onClick={() => setAlertVisibility(true)} >My button</Button>
    </div>
  );
}

export default App;
