import "./App.css";
import Form from "./components/Form/index.js";
import List from "./components/List";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  }
  console.log(activities);
  return (<>
  <List activities={activities}/>
  <Form onAddActivity={handleAddActivity} />;
  </>
  )  
}

export default App;
