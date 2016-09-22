import React, { Component } from 'react';
import { render } from 'react-dom';
require('../css/main.scss');

class LikeButton extends Component {
	constructor(props) {
		super(props);
		//初始化 this.state 的值，只在组件装载之前调用一次。
		this.state = { liked: false };
	}
	// 为嘛不支持
	// handleClick = (e) => {
	//     this.setState({ liked: !this.state.liked });
	// }
	//“合成事件”会以事件委托（event delegation）的方式绑定到组件最上层，并且在组件卸载（unmount）的时候自动销毁绑定的事件。
	handleClick(e) {
		this.setState({ liked: !this.state.liked });
	}

	render() {
		const text = this.state.liked ? 'like' : 'haven\'t liked';
		return (
			//<p onClick={this.handleClick}>
			<p onClick={this.handleClick.bind(this)}>
			{this.props.name} {text} this. Click to toggle.
			</p>
		);
	}
}

//组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求
LikeButton.propTypes = {
	name: React.PropTypes.string
};

//设置组件属性的默认值 只在组件创建时调用一次并缓存返回的对象（即在 React.createClass 之后就会调用）。
LikeButton.defaultProps = {
	name: "shaozhen"
};

export default LikeButton;