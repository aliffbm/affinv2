var React = require("react");
var ReactDOM = require("react-dom");
var ChoreList = require("./components/choreList.jsx");
var choresStore = require("./stores/choresStore");
var registerStore = require("./stores/registerStore");
var Navigation = require("./layout.jsx");
var ReactDomServer = require('react-dom/server');

var Welcome = require('./welcomePage.jsx');


var _chores = [];
var getChoresCallback = function(chores){
    _chores = chores;
    render();
};
var _user = [];
var getUsersCallback = function(user){
    _user = user;
    render();
};
choresStore.onChange(getChoresCallback);
registerStore.onChange(getUsersCallback);


var Main = React.createClass({
	getInitialState:function(){
		return{
			isLoggedIn: false
		}
	},

	handleLogin(){
		this.setState({
			isLoggedIn: !this.state.isLoggedIn
		});
	},
	getWelcome:function(){
		return(<Welcome handleLogin={this.handleLogin}/>)
	},
	getChore:function(){
		return(<div><Navigation/><ChoreList chores={this.props.chore} /></div>)
	},
	checkHtml:function(){
		let html;
		if(!this.state.isLoggedIn)
			html = this.getWelcome();
		else
			html = this.getChore();

		return(html)

	},
	render:function(){
		htm = this.checkHtml();
		console.log("my props")
		console.log(this.props);
		return(
			htm
			)
	}
});






function render(){
    ReactDOM.render(<Main chore={_chores}/>, document.getElementById("container"));    
}

//<div><Navigation/><ChoreList chores={_chores} /></div>