export default function List({ activities, isGoodWeather }) {
  return (
    <>
      {isGoodWeather ? (
        <h2>The weather is awesome! Go outside and:</h2>
      ) : (
        <h2>Bad weather outside! Here's what you can do now:</h2>
      )}
      <ul>
        {activities.map((activity) => (
          <li>{activity.name}</li>
        ))}
      </ul>
    </>
  );
}
