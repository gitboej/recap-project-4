import "./App.css";
import Form from "./components/Form/index.js";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("_ACTIVITIES_", {
    defaultValue: [],
  });
  const [weather, setWeather] = useState([]);
  // const isGoodWeather = true;

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter(activity => activity.id !== id))
  }

  useEffect(() => {
    async function loadWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather"
        );
        const data = await response.json();
        console.log(data);
        setWeather(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadWeather();
  }, []);

  console.log(activities);

  return (
    <>
      <h1>
        {weather.condition}
        {"    "} {weather.temperature}°C
      </h1>
      <List
        activities={activities.filter(
          (activity) => activity.isForGoodWeather === weather.isGoodWeather
        )}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
