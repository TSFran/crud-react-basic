import React from 'react';
import ListUser from './components/ListUser';
import Form from './components/Form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 0, name: 'Luis', age: '20' },
        { id: 1, name: 'Walter', age: '23' }
      ],
      nextId: 2,
      input: [
        {
          title: 'Nombre',
          id: 'name'
        },
        {
          title: 'Edad',
          id: 'age'
        }
      ]
    };
  }

  addUser = user => {
    let users = [...this.state.users];
    if (user.name !== '') {
      users.push({
        id: this.state.nextId,
        name: user.name,
        age: user.age
      });
    } else {
      return false;
    }
    this.setState({
      users: users,
      nextId: users.lenght + 1
    });
  };

  removeUser = id => {
    let users = [...this.state.users];
    let newUsers = users.filter(user => user.id !== id);
    this.setState({
      users: newUsers
    });
  };

  editUser = (id, data) => {
    let users = [...this.state.users];
    users.map(user => {
      if (user.id === id) {
        user.name = data.name;
        user.age = data.age;
      }
      return user;
    });
  };

  render() {
    const { input, users } = this.state;
    const listUser = users.map(user => {
      return (
        <ListUser
          input={input}
          user={user}
          key={user.id}
          removeUser={this.removeUser}
          editUser={this.editUser}
        />
      );
    });
    return (
      <div>
        <Form input={input} addUser={this.addUser} />
        {listUser}
      </div>
    );
  }
}
