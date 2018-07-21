import React from 'react';
import PropTypes from 'prop-types';
import './noteItem.scss';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.removeNote(this.props.note._id);
  }
  
  render() {
    const { title, content } = this.props.note;
    return (
      <li className="note-item">
        <strong>{title}: </strong>
        {content}
        <input 
          type="button" 
          value="delete" 
          onClick={ this.handleClick }
        />
      </li>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  removeNote: PropTypes.func,
};
