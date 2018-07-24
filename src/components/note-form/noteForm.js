import React from 'react';
import PropTypes from 'prop-types';
import './noteForm.scss';

const defaultState = {
  title: '',
  content: '',
};

export default class noteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleComplete(this.state);
    this.setState(defaultState);
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

noteForm.propTypes = {
  handleComplete: PropTypes.func,
};
