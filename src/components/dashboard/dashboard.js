import React from 'react';
import './dashboard.scss';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/noteForm';
import NoteList from '../note-list/noteList';

const testNote1 = {
  _id: uuid(),
  editing: false,
  completed: false,
  title: 'mock title 1',
  content: 'mock content 1',
};

const testNote2 = {
  _id: uuid(),
  editing: false,
  completed: false,
  title: 'mock title 2',
  content: 'mock content 2',
};

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [testNote1, testNote2],
    };
  }

  handleCreateNote = (noteToCreate) => {    
    if (noteToCreate.title && noteToCreate.content) {
      const newNote = {
        _id: uuid(),
        editing: false,
        completed: false,
        ...noteToCreate,
      };
      
      this.setState({ notes: [...this.state.notes, newNote] });
    }
  }

  handleUpdateNote = (noteToUpdate) => {
    const oldNotes = this.state.notes;
    const newNotes = oldNotes.map(note => (note._id === noteToUpdate._id ? noteToUpdate : note));    
    this.setState({ notes: newNotes });
  }

  handleRemoveNote = (noteToDelete) => {
    this.setState({
      notes: this.state.notes.filter(note => note._id !== noteToDelete._id),
    });
  }
  
  render() {
    return (
      <React.Fragment>
        <NoteForm 
          handleComplete={ this.handleCreateNote }
        />
        <NoteList 
          notes={ this.state.notes }
          handleRemoveNote= { this.handleRemoveNote }
          handleUpdateNote={ this.handleUpdateNote }
        />
      </React.Fragment>
    );
  }
}
