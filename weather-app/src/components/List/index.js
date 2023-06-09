import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      {isGoodWeather ? (
        <h2>The weather is awesome! Go outside and:</h2>
      ) : (
        <h2>Bad weather outside! Here's what you can do now:</h2>
      )}
      <ul>
        {activities.map((activity) => (
          <div key={activity.id} className="listItems">
            <li>{activity.name}</li>
            <button onClick={() => onDeleteActivity(activity.id)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}
