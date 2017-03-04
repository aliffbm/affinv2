var React = require('react');
var actions = require('../../actions/UserActions');


module.exports = React.createClass({


	getInitialState:function(){

		return{
			name: "",
			password: ""
		}
	},

	addUser:function(e){
		e.preventDefault();
		actions.addUser(this.state);
		//console.log(this.state)
		//console.log("These are props");
		//console.log(this.props);
		this.props.handleLoginn();
		


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
			
				<form className="form" onSubmit={this.addUser}>
					<div className="form-group">
						<input type="text" className="form-control" id="name" name="name" value={this.state.name} placeholder="name" onChange={this.handleInputChange}/>
					</div>
					<div className="form-group">
						
						<input type="text" className="form-control" id="password" value={this.state.address} name="password" placeholder="password" onChange={this.handleInputChange}/>
					</div>
					<div className="form-group">
						<button className="btn" type="submit">Sign In</button>

					</div>
				</form>
			)
	}


})