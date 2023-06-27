// import SingleNote from './SingleNote'

import { useState, useEffect } from "react"

 
function NotesContainer() {
const [notes, setNotes] = useState('')
useEffect(() => {
  fetch('http://localhost:4000/notes')
  .then((r) => r.json())
  .then((notes) => console.log(notes))
})
  return (
    <div>
      { /* all the notes go here! */ }
    </div>
  )
}

export default NotesContainer
