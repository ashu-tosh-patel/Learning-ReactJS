import './App.css';
import { useState } from 'react'
function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: "ashu is a good boy", id: 1 },
    { title: "harsh is a good boy", id: 2 },
    { title: "shubh is a good boy", id: 3 },
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id
      })
    })
    console.log(id);
  }
  return (
    <div className="App">
      {showEvents &&
        (<div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>)}
      {!showEvents &&
        (<div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>)}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index + 1} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
