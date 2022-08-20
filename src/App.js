import './App.css';
import React, { useState } from 'react'
import Title from './components/title';
import Modal from './components/Modal';
function App() {

  const [showModal, setShowModal] = useState(true);
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: "ashu is a good boy", id: 1 },
    { title: "harsh is a good boy", id: 2 },
    { title: "shubh is a good boy", id: 3 },
  ])

  console.log(showModal)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id
      })
    })
    console.log(id);
  }

  const handleClose = () => {
    setShowModal(false)
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
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index + 1} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </React.Fragment>
      ))}
      {/* <Modal>
        <h2>10% off coupon code!!</h2>
        <p>Use the code ASHU10 at the checkout.</p>
      </Modal> */}
      {showModal && <Modal handleClose={handleClose}>
        <h2>Terms and conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa consequuntur corporis, maxime expedita possimus accusantium eum veritatis ipsum? Nihil ut culpa nostrum vitae eos doloribus laborum laudantium quod autem?</p>
        <a href="#">Find out more...</a>
      </Modal>}
    </div>
  );
}

export default App;
