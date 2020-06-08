import React from "react";
import "./App.scss";
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'
class App extends React.Component {
  state = {
    val: "",
    list: [],
  };
  handleChange = (event) => {
    let val = event.target.value;
    this.setState({
      val,
    });
    // console.log(val)
  };

  handleAdd = () => {
    let list = this.state.list;
    list.push(this.state.val);
    this.setState({
      val: "",
      list,
    });
  };
  render() {
    let listItem = this.state.list.map((item, index) => {
      let li = (
        <li key={index}>
          {item}
        </li>
      );
      return li;
    });
    const width = {
      width: 300
    }
    return (
      <div className="App">
        <h1>hello world</h1>
        <p>welcome to React's World！</p>
        <Input
          style={width}
          type="text"
          onChange={this.handleChange}
          value={this.state.val}
        />
        <Button onClick={this.handleAdd}>添加</Button>
        <ul>{listItem}</ul>
      </div>
    );
  }
}

export default App;
