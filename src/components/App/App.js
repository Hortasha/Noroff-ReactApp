import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from '../../components/Layout/Layout';


class App extends Component {
	render() {
		return (
			<Layout>
				{this.props.children}
			</Layout>
		);
	}
}

export default App;
