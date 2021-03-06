import React from 'react'
import Note from '../Note/Note'
import ApiContext from '../ApiContext'
import { findNote } from '../notes-helpers'
import './NotePageMain.css'

export default class NotePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteNote = note_id => {
    this.props.history.push(`/`)
  }

  render() {
    const { notes=[] } = this.context
    //const noteId = this.props.match.params.note_id
    const noteId = Number(this.props.match.params.note_id)
    const note =  findNote(notes, noteId) || { content: '' }
    //console.log("note :" , notes, noteId, note )
    return (
      <section className='NotePageMain'>
        <Note
          note_id={note.note_id}
          note_name={note.note_name}
          modified={note.modified}
          onDeleteNote={this.handleDeleteNote}
        />
       
        <div className='NotePageMain__content'>
         {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}
/*
 <Note
          note_id={note.note_id}
          note_name={note.note_name}
          modified={note.modified}
          onDeleteNote={this.handleDeleteNote}
        />
*/