import React from 'react';
import './dashboard.scss';
import uuid from 'uuid/v4';
import noteForm from '../note-form/noteForm';
import NoteList from '../modal/modal';

const testNote = {
  _id: uuid(),
  editing: false,
  completed: false,
  title: 'mock title',
  content: 'mock content',
};

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [testNote],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
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

  updateNote(updatedNote) {
    this.setState({ 
      notes: this.state.notes.map(note => (note._id === updatedNote._id ? note : updatedNote)),
    });
  }
  
  render() {
    return (
      <React.Fragment>
        <noteForm 
          addNote={ this.addNote }
        />
        <NoteList 
          notes={ this.state.notes }
          removeNote= { this.removeNote }
          updateNote={ this.updateNote }
          addNote={ this.addNote }
        />
      </React.Fragment>
    );
  }
}
