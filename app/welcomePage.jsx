var React = require("react");
var ReactDOM = require("react-dom");
var ChoreList = require("./components/choreList.jsx");
var choresStore = require("./stores/choresStore");
var Navigation = require("./layout.jsx");
var SignIn = require("./components/userSignReg/signIn.jsx");
var ReactDomServer = require('react-dom/server');


module.exports = React.createClass({
	
	handleLoginn:function(){
		this.props.handleLogin();
	},

	render:function(){
		return(
			<div className="container-fluid" id="homePage">
				<div className="container" id="signInContainer">
					<div className="row">
					<div className="col-sm-8" id="definitionContainer">
							<div className="row">
								<div className="col-sm-4 definitionPad">
									<h4><strong>affinity</strong></h4>
									<h6><em>noun</em></h6>
									<p>likeness based on relationship or causal connection</p>
								</div>
								<div className="col-sm-4 col-md-offset-2 definitionPad">
									<h4><strong>meditate</strong></h4>
									<h6><em>transitive verb</em></h6>
									<p>to focus one's thoughts on: reflect on or ponder over</p>
								</div>
							</div>
					</div>
					<div className="col-sm-4">
							<SignIn handleLoginn={this.handleLoginn}/>			
					</div>
				
					</div>
				</div>
			</div>

			)
	}

});