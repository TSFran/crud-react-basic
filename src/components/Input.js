import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onChange = e => {
    const ele = e.target;
    const value = e.target.value;
    this.props.sendData(ele, value);
    this.setState({
      value: value
    });
  };

  render() {
    const { value } = this.state;
    const { title, id, name } = this.props;
    return (
      <div>
        <label>{title} : &nbsp; </label>
        <input
          id={id}
          name={name}
          type="text"
          defaultValue={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
