var React = require('react');
var ReactDOM = require('react-dom');
var ReactRotatingText = require('react-rotating-text');

var App = React.createClass({
	render () {
		return (
			<div className="display-text">
				<ReactRotatingText />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
