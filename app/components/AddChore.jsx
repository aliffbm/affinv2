var React = require("react");
var actions = require("../actions/ChoresActions");

module.exports = React.createClass({
	getInitialState: function(){
		return{
			name: "",
			expectedTime: ""
		}
	},
	addChore:function(e){
		e.preventDefault();
		actions.addChore(this.state);

	},
	handleInputChange:function(e){
		e.preventDefault();
		var name = e.target.name;
		var state = this.state;
		state[name] = e.target.value;
		this.setState(state);
	},
	render:function(){
		return(
			<form className="form" onSubmit={this.addChore}>
				<div className="form-group">
					<label className="control-label" htmlFor="name">Chore Name: </label>
					<input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange}/>
				</div>
				<div className="form-group">
					<label className="control-label" htmlFor="expectedTime">Assigned: </label>
					<input type="text" className="form-control" id="expectedTime" value={this.state.address} name="expectedTime" onChange={this.handleInputChange}/>
				</div>
				<div className="form-group">
					<button className="btn" type="submit">Add Chore</button>
				</div>
			</form>

		)
	}

})