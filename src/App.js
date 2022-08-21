import './App.css';
import { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';
function App() {

  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id
      })
    })
    console.log(id);
  }
  const subtitle = "this sub is passed form parent"

  return (
    <div className="App">
      <Title title="Passing props from parent to child" subtitle={subtitle} />
      {showEvents &&
        (<div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>)}
      {!showEvents &&
        (<div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>)}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent} />
      </Modal>}
      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
