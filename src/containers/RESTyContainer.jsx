import React, { Component } from 'react';
import Controls from '../components/Controls';
import CRUDHistory from '../components/CrudHistory';

class RESTyContainer extends Component {
  state = {
    loading: false,
    method: '',
    url: '',
    json: '',
    crudRoutes: [],
  };

  render() {
    const { loading, method, url, json, crudRoutes } = this.state;
    return (
      <>
        <h1>RESTy Container!</h1>
        <Controls
          json={json}
          onSubmit={this.handleSubmit}
          onUrlChange={this.handleUrlChange}
          onMethodChange={this.handleMethodChange}
        />
        <CRUDHistory crudRoutes={crudRoutes} />
      </>
    );
  }
}

export default RESTyContainer;
