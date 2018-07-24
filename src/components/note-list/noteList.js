import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/noteItem';
import './noteList.scss';

export default class NoteList extends React.Component {  
  render() {
    const { notes } = this.props;

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
                handleRemoveNote={ this.props.handleRemoveNote }
                handleUpdateNote={ this.props.handleUpdateNote }
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
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
