import React from 'react';
import PropTypes from 'prop-types';
import './noteCreateForm.scss';

const defaultState = {
  title: '',
  content: '',
};

export default class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.title && this.state.content) {
      this.props.addNote(this.state);
      this.setState(defaultState);
    }
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <legend>Add new note</legend>
        <label>title
          <input
            onChange={ this.handleChange } 
            type="text"
            placeholder="enter title"
            name="title"
            value={ this.state.title }
          />
        </label>
        <label>content
          <input
            onChange={ this.handleChange } 
            type="text" 
            placeholder="enter content"
            name="content"
            value={ this.state.content }
          />
        </label>
        <input type="submit"/>
      </form>
    );
  }
}

NoteCreateForm.propTypes = {
  addNote: PropTypes.func,
};
