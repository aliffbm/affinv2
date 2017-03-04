var React = require("react");
var ReactDOM = require("react-dom");
var ChoreList = require("./components/choreList.jsx");
var choresStore = require("./stores/choresStore");
var UserStore = require("./stores/UserStore");
var Navigation = require("./layout.jsx");
var ReactDomServer = require('react-dom/server');
var Home = require('./home.jsx');

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
UserStore.onChange(getUsersCallback);


var Main = React.createClass({
	getInitialState:function(){
		return{
			isLoggedIn: false,
			route: "",
			userProfileName: ""
		}
	},

	handleHome(){
		this.setState({route: "home"});
	},
	handleChores(){
		this.setState({route: "chores"})
	},
	handleUserProfile(userName){
		this.setState({userProfile: userName})
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
		return(<div><Navigation handleHome={this.handleHome}/><ChoreList chores={this.props.chore} /></div>)
	},
	getHome:function(){
		return(<div><Navigation handleChores={this.handleChores}/><Home user={this.props.user} userProfile={this.state.userProfileName}/></div>)
	},
	checkHtml:function(){
		let html;
		if(!this.state.isLoggedIn)
			html = this.getWelcome();
		else{
				
			if(this.state.route == "chores")
				html = this.getChore();
			else
				html = this.getHome();
		}

		return(html)

	},
	render:function(){
		htm = this.checkHtml();

		return(
			htm
			)
	}
});



console.log("Name on main is: ");
console.log(_user);
console.log(_chores);


function render(){
    ReactDOM.render(<Main chore={_chores} user={_user}/>, document.getElementById("container"));    
}

//<div><Navigation/><ChoreList chores={_chores} /></div>