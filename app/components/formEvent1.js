//value 对应onchange事件太繁琐，见demoformEvent.js
import React, { Component } from 'react';
import { render } from 'react-dom';

class FormEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "input value",
      selectValue: "A",
      readioValue: "male",
      textareaValue: "say something"
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  handleInput(e) {
    this.setState({ inputValue: e.target.value });
  }
  handleSelect(e) {
    this.setState({ selectValue: e.target.value });
  }
  //受控组件必须跟onChange事件才能改变value值，默认情况可以使用defaultValue 因为attribute 和 property 
//attribute 是在 HTML 里指定的属性，而每个 HTML 元素在 JS 对应是一个 DOM 节点对象，这个对象拥有的属性就是 property
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type = "text" value={this.state.inputValue} onChange={this.handleInput.bind(this)} />
        <p>radip button</p>
        <input name ="radiotext" type="radio" value="A"/>
        <input name ="radiotext" type="radio" defaultChecked value="B"/>
        <input name ="radiotext" type="radio" value="C"/>
        <br/>
        <input name ="radiotext" type="checkbox" value="A"/>
        <input name ="radiotext" type="checkbox" defaultChecked value="B"/>
        <input name ="radiotext" type="checkbox" value="C"/>
        <br/>
        <p>select option</p>
        <select value ={this.state.selectValue} onChange={this.handleSelect.bind(this)} >
          <option value = "A">A</option>
          <option value = "B">B</option>
          <option value = "C">C</option>
          <option value = "D">D</option>
        </select>
        <textarea defaultValue="saysomething"></textarea>
        <button type = "submit">submit</button>
      </form>
    );
  }
}

FormEvent.defaultProps = {
  inputValue: "default input value",
  selectValue: "default A",
  readioValue: "default male",
  textareaValue: "default say something"
};

export default FormEvent;