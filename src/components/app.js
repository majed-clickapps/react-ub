 import React from 'react';
import Home from './index'
export default class App extends React.Component {
	render() {
		return (
      <div>
        {this.props.children || <Home/>}
      </div>
		);
	}
}