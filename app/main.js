// import React from 'react';
// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { render } from 'react-dom';
import LikeButton from './components/productBox.js';
import Avatar from './components/avatar.js';
import FormEvent from './components/formEvent.js';

let attachElement = document.getElementById('content');


const MainContent = () => {
  return (
    <div>
		<LikeButton name="shaozhen" />
		<Avatar username="coco" />
		<FormEvent />
		<GroceryList items={items} />
    </div>
  );
}

class GroceryList extends Component {
  handleClick(i) {
    console.log('You clicked: ' + this.props.items[i]);
  }

  render() {
  	
    return (
      <ul>
        {this.props.items.map((item, i) => {
          return (
            <li onClick={this.handleClick.bind(this, i)} key={i}>{item}</li>
          );
        })}
      </ul>
    );
  }
}

var items = ['Apple', 'Banana', 'Cranberry'];

render(
	<MainContent />,
	attachElement
);