import React from 'react';
import axios from 'axios';

export default class UserService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      error: null
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const data = response.data;
        this.setState({
          data,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          error,
          isLoading: false
        });
      });
  }

  render() {
    const { data, error, isLoading } = this.state;
    return (
      <React.Fragment>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          data.map((data, index) => {
            return (
              <div key={index}>
                <h1>{data.title}</h1>
                <p>
                  <strong>UserId : &nbsp;</strong> {data.userId}
                </p>
                <p>
                  <strong>Descripción : &nbsp;</strong> {data.body}
                </p>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Cargando ...</h3>
        )}
      </React.Fragment>
    );
  }
}
