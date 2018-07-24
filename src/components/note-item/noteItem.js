import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import './noteItem.scss';
import NoteForm from '../note-form/noteForm';

export default class NoteItem extends React.Component {
  render() {
    const { note, handleRemoveNote, handleUpdateNote } = this.props;
    const showModal = () => handleUpdateNote({ ...note, editing: true });
    const hideModal = () => handleUpdateNote({ ...note, editing: false });
    const updateAndClose = (noteToUpdate) => {
      return handleUpdateNote({ ...note, ...noteToUpdate, editing: false });
    };

    return (
      <li className="note-item">
        <strong>{note.title}: </strong>
        <p onDoubleClick={ showModal }>{note.content}</p>
        <input 
          type="button" 
          value="delete" 
          onClick={ () => handleRemoveNote(note) }
        />
        <Modal 
          show={ note.editing }
          handleClose={ hideModal }
        >
          <h3>Editing: {note.title}</h3>
          <NoteForm 
            handleComplete={ updateAndClose }
            note={ note }
          />
        </Modal>
      </li>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
