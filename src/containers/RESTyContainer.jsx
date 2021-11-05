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

  handleUrlChange = (e) => {
    this.setState({ url: e.target.event });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
  };

  render() {
    const { loading, method, url, json, crudRoutes } = this.state;
    return (
      <>
        {loading ? (
          <h1>Hang Tight BESTy-- RESTy is getting your results!</h1>
        ) : (
          <>
            <Controls
              json={json}
              onSubmit={this.handleSubmit}
              onUrlChange={this.handleUrlChange}
              method={method}
            />
            <CRUDHistory crudRoutes={crudRoutes} />
          </>
        )}
      </>
    );
  }
}

export default RESTyContainer;
