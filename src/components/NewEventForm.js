import { useState, useRef } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {

    // const [title, setTitle] = useState('')
    // const [date, setDate] = useState('')

    const title = useRef()
    const date = useRef()

    const resetForm = () => {
        title.current.value = ""
        date.current.value = ""
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, date)
        const event = {
            title: title.current.value,
            date: date.current.value,
            id: Math.floor(Math.random() * 10000)
        }
        addEvent(event)
        resetForm()
    }
    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
            <label>
                <span>Event Title: </span>
                <input
                    type="text"
                    ref = {title}
                />
            </label>
            <label>
                <span>Event Date: </span>
                <input
                    type="date"
                    ref= {date}
                />
            </label>
            <button >Submit</button>
            {/* <p>title - {title}, date - {date}</p>
            <p onClick={resetForm} >reset the form</p> */}
        </form>
    )
}
