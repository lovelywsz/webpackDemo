import React, { Component } from 'react';
import { render } from 'react-dom';
import { findDOMNode } from 'react-dom';

//如果 ref 是设置在原生 HTML 元素上，它拿到的就是 DOM 元素，
//如果设置在自定义组件上，它拿到的就是组件实例，这时候就需要通过 findDOMNode 来拿到组件的 DOM 元素。
class FormEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "input value",
      selectValue: "A",
      readioValue: "B",
      checkboxValue: [],
      textareaValue: "say something"
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    var formDate={
      input:this.refs.nameInput.value,
      select:this.refs.ageselect.value,
      textarea:this.refs.introtextarea.value,
      radio:this.state.readioValue,
      checkbox:this.state.checkboxValue
    }
    this.refs.oneradio.radioEvent();
    console.log(formDate);
  }
  handleRadio(e){
     this.setState({ readioValue: e.target.value });
  }
  //public int indexOf(int ch): 返回指定字符在字符串中第一次出现处的索引，
  //如果此字符串中没有这样的字符，则返回 -1
  handleCheckbox(e){
    var checkboxValues = this.state.checkboxValue.slice();
    var newVal = e.target.value;
    var index = checkboxValues.indexOf(newVal);
    if (index == -1) {
      checkboxValues.push(newVal)
    } else {
      checkboxValues.splice(index,1)
    }
    this.setState({ checkboxValue: checkboxValues });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input ref={function(comp){findDOMNode(comp).focus()}} type = "text" defaultValue="sdfs" />
        <input ref="nameInput" type = "text" defaultValue={this.state.inputValue} />
        <RadioButton ref="oneradio" actionRadio = {this.handleRadio.bind(this)} />
        <CheckButton actionCheckbox = {this.handleCheckbox.bind(this)} />
        <select ref="ageselect" defaultValue ={this.state.selectValue}>
          <option value = "A">A</option>
          <option value = "B">B</option>
          <option value = "C">C</option>
          <option value = "D">D</option>
        </select>
        <textarea ref="introtextarea" defaultValue="saysomething"></textarea>
        <button type = "submit">submit</button>
      </form>
    );
  }
}
class RadioButton extends Component {
  radioEvent(){
     console.log("good morning,coco")
  }
  render() {
    return (
      <div>
        <p>
          <label htmlFor="">A</label>
          <input onChange={this.props.actionRadio} name ="radiotext" type="radio" value="A"/>
        </p>
        <p>
          <label htmlFor="">B</label>
          <input onChange={this.props.actionRadio} name ="radiotext" type="radio" defaultChecked value="B"/>
        </p>
        <p>
          <label htmlFor="">C</label>
          <input onChange={this.props.actionRadio} name ="radiotext" type="radio" value="C"/>
        </p>
      </div>
    );
  }
}
class CheckButton extends Component {
  render() {
    return (
      <div>
        <p>
          <label htmlFor="">student</label>
          <input onChange={this.props.actionCheckbox} name ="checktext" type="checkbox" value="student"/>
        </p>
        <p>
          <label htmlFor="">teacher</label>
          <input onChange={this.props.actionCheckbox} name ="checktext" type="checkbox" value="teacher"/>
        </p>
        <p>
          <label htmlFor="">engeer</label>
          <input onChange={this.props.actionCheckbox} name ="checktext" type="checkbox" value="engeer"/>
        </p>
      </div>
    );
  }
}
FormEvent.defaultProps = {
  inputValue: "default input value",
  selectValue: "default A",
  readioValue: "default B",
  textareaValue: "default say something"
};
export default FormEvent;