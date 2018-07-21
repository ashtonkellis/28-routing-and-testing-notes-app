import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/noteItem';
import './noteList.scss';

export default class NoteList extends React.Component {  
  render() {
    const { notes, removeNote } = this.props;

    return (
      <React.Fragment>
        <h2>Saved Notes</h2>
        <ul className="note-list">
          {notes.map((note) => {
            const { _id } = note;
            return (
              <NoteItem 
                key={ _id } 
                note={ note } 
                removeNote={ removeNote }
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array,
  removeNote: PropTypes.func,
};
