import React from 'react';
import './dashboard.scss';
import uuid from 'uuid/v4';
import NoteCreateForm from '../note-create-form/noteCreateForm';
import NoteList from '../note-list/noteList';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {    
    const newNote = {
      _id: uuid(),
      editing: false,
      completed: false,
      ...note,
    };
    
    this.setState({ notes: [...this.state.notes, newNote] });
  }

  removeNote(_id) {
    const updatedNotes = this.state.notes.filter(note => note._id !== _id);
    this.setState({ notes: updatedNotes });
  }
  
  render() {
    return (
      <React.Fragment>
        <NoteCreateForm 
          addNote={ this.addNote }
        />
        <NoteList 
          notes={ this.state.notes }
          removeNote= { this.removeNote }
        />
      </React.Fragment>
    );
  }
}
