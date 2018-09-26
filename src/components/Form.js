import React from 'react';
import Input from './Input';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        age: ''
      }
    };
  }
  addUser = user => {
    this.props.addUser(user);
  };

  getData = (ele, val) => {
    let item = { ...this.state.user };
    let name = ele.name;
    item[name] = val;
    this.setState({ user: item });
  };

  render() {
    const { input } = this.props;
    const { user } = this.state;
    return (
      <div>
        {input.map((item, index) => {
          return (
            <Input
              key={index}
              title={item.title}
              id={item.id}
              name={item.id}
              sendData={this.getData}
            />
          );
        })}
        <br />
        <button
          onClick={() => {
            this.addUser(user);
          }}
        >
          Registrar
        </button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
