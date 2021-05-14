import React, { Component } from 'react';
import Controls from '../components/control/Controls';
import Display from '../components/display/Display';
import Header from '../components/Header';
import HistoryList from '../components/history/HistoryList';
import { requestAPI } from '../services/requestAPI';

export default class MainContainer extends Component {
  state = {
    urlRequest: '',
    requestType: 'GET',
    requestBody: '',
    response: { 'title': 'submit a request' },
    history: []
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { urlRequest, requestType, requestBody } = this.state;

    requestAPI(urlRequest, requestType, requestBody)
      .then(response => this.setState({ response }));

    this.setState({ history: [...this.state.history,
      {
      urlRequest: urlRequest,
      requestBody: requestBody,
      requestType: requestType
    }]})
  }

  render() {
    const { urlRequest, requestBody, response, history } = this.state;
    console.log(this.state);
    return (
      <div>
        <Header/>
        <Controls urlRequest={urlRequest} requestBody={requestBody} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <HistoryList history={history} />
        <Display response={response}/>
      </div>
    );
  }
}