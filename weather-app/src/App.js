import "./App.css";
import Form from "./components/Form/index.js";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("_ACTIVITIES_", {
    defaultValue: [],
  });
  const isGoodWeather = true;

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  }

  console.log(activities);

  return (
    <>
      <List
        activities={activities.filter(
          (activity) => activity.isForGoodWeather === isGoodWeather
        )}
        isGoodWeather={isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
