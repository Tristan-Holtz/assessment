import React, { Component } from 'react';
import { postUrl } from '../../apiCalls';
import { connect } from 'react-redux';
import { setUrls } from '../../actions';

export class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await postUrl(this.state.title, this.state.urlToShorten).then(data =>
      this.props.setUrls([data])
    );
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ title: '', urlToShorten: '' });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type="text"
          placeholder="URL to Shorten..."
          name="urlToShorten"
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>Shorten Please!</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setUrls: urls => {
    dispatch(setUrls(urls));
  }
});

export default connect(null, mapDispatchToProps)(UrlForm);
