import React, { Component } from 'react';
import Controls from '../components/Controls';
import CRUDHistory from '../components/CrudHistory';
import JsonResponse from '../components/JsonResponse';
import { fetchUrl } from '../services/FetchUrl';

class RESTyContainer extends Component {
  state = {
    loading: false,
    method: '',
    url: '',
    json: '',
    crudRoutes: [],
    response: [],
  };

  handleUrlChange = (e) => {
    this.setState({ url: e.target.event });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const { method, url, json, crudRoutes } = this.state;

    let response;
    response = await fetchUrl(method, url, json);

    this.setState({
      loading: false,
      crudRoutes: crudRoutes.includes(url)
        ? crudRoutes
        : [...crudRoutes, { method: method, url: url }],
    });
  };

  render() {
    const { loading, method, url, json, crudRoutes, response } = this.state;
    return (
      <>
        {loading ? (
          <h1>Hang Tight BESTy-- RESTy is getting your results!</h1>
        ) : (
          <>
            <Controls
              url={url}
              json={json}
              onSubmit={this.handleSubmit}
              onUrlChange={this.handleUrlChange}
              method={method}
            />
            <CRUDHistory crudRoutes={crudRoutes} />
            <JsonResponse response={response} />
          </>
        )}
      </>
    );
  }
}

export default RESTyContainer;
