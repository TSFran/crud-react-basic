import React from 'react';
import Input from './Input';

export default class ListUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        age: ''
      },
      showInput: false
    };
  }
  removeUser = id => {
    this.props.removeUser(id);
  };
  editUser = (id, data) => {
    this.setState({
      showInput: !this.state.showInput
    });
    if (this.state.showInput) {
      this.props.editUser(id, data);
    }
  };

  getData = (ele, val) => {
    let item = { ...this.state.user };
    let name = ele.name;
    item[name] = val;
    this.setState({ user: item });
  };

  render() {
    const { user, input } = this.props;
    return (
      <div>
        <button onClick={e => this.removeUser(user.id)}>Borrar</button>
        <ul>
          <li>{user.name}</li>
          <li>{user.age}</li>
        </ul>
        <button onClick={e => this.editUser(user.id, this.state.user)}>
          Editar
        </button>
        {this.state.showInput &&
          input.map((item, index) => {
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
      </div>
    );
  }
}
