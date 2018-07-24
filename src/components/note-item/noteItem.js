import React from 'react';
import PropTypes from 'prop-types';
import NoteUpdateForm from '../note-update-form/noteUpdateForm';
import './noteItem.scss';
import noteForm from '../note-form/noteForm';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleContentDoubleClick = this.handleContentDoubleClick.bind(this);
  }
  
  handleClick() {
    this.props.removeNote(this.props.note._id);
  }

  handleContentDoubleClick() {
    console.log('showing update note form');
    this.props.updateNote({ ...this.props.note, editing: true });
  }
  
  render() {
    const { note, removeNote, updateNote } = this.props;

    const showNoteUpdateForm = () => updateNote({ ...note, editing: true });
    const hideNoteUpdateForm = () => updateNote({ ...note, editing: false });
    const updateAndClose = (updatedNote) => {
      return updateNote({ ...updatedNote, editing: false });
    };

    return (
      <li className="note-item">
        <strong>{note.title}: </strong>
        <p onDoubleClick={ showNoteUpdateForm }>{note.content}</p>
        <input 
          type="button" 
          value="delete" 
          onClick={ this.handleClick }
        />
        <NoteUpdateForm 
          show={ note.editing }
          handleClose={ hideNoteUpdateForm }
        >
          <h3>Editing: {note.title}</h3>
          <noteForm 
            updateNote={ this.props.updateNote }
            handleComplete={ updateAndClose }
            note={ note }
          />
        </NoteUpdateForm>
      </li>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  removeNote: PropTypes.func,
  updateNote: PropTypes.func,
};
