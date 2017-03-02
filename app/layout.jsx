var React = require("react");
var ReactDOM = require("react-dom");
var ChoreList = require("./components/choreList.jsx");
var choresStore = require("./stores/choresStore");
//import {Link} from 'react-router';

//var boot2 = require('./lib/bootstrap-theme.css');
//var boot = require('./lib/bootstrap-theme.css');


ReactBoot = require('react-bootstrap/');



module.exports = React.createClass({



render: function(){
Navbar = ReactBoot.Navbar;
NavItem = ReactBoot.NavItem;
NavDropdown = ReactBoot.NavDropdown;
MenuItem = ReactBoot.MenuItem;
Nav = ReactBoot.Nav;

  let signedIn;
  let signedInNav;



    return(<div><Navbar className="navbar-fixed-top navbarColor" fluid id="navbar-default-override" collapseOnSelect>
    <Navbar.Header className="navbarColor" id="navHeaderLeft">
    <Navbar.Toggle className="pull-left navbarColor"/>
      <Navbar.Brand className="navbarColor">
                    <a id="brand" href="/">AFFINIATE</a>
      </Navbar.Brand>
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>
        <NavItem className="navbarColor" id="makeWhite" eventKey={1} href="#">Home</NavItem>
        <NavItem className="navbarColor" id="makeWhite" eventKey={2} href="#">Chores</NavItem>
      </Nav>
      <Nav pullRight className="navbarColor" id="navHeaderRight">
        <NavItem eventKey={1} id="makeWhite" href="#"><span className="glyphicon glyphicon-user"></span>Sign Up</NavItem>
        <NavItem eventKey={2} id="makeWhite" href="#"><span className="glyphicon glyphicon-log-in"></span>Log In</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar></div>);
    }
});




//import {browserHistory} from 'react-router';

//import Chores from '../pages/chores.js';



/*module.exports = className Navigation extends React.Component{
  constructor(){
    super();
    this.state = {
      eventKey: 1,
      log: "Log In",
      path: "home",
      isLoggedIn: false,
      signup: "Sign Up"

    }
  }


handle(e){
        
        alert("what what!!");
        if(this.state.isLoggedIn == false){
          this.setState({log: "Log Out"});
          this.setState({isLoggedIn: true});
          this.setState({signup: ""});
          this.setState({path: "/"});
        }
        else if(this.state.isLoggedIn == true){
          this.setState({log: "Log In"});
          this.setState({isLoggedIn: false});
          this.setState({signup: "Sign Up"});
          this.setState({path: "home"});

        }
}
__handleHome(e){
  alert("Home Click");

}
__handleChore(e){
  console.log("Chore Click");
 
}

_getSignedInNav(){

  return(<NavSignedIn />);
}

_getSignedIn(){
  return(<StateChangeNav handle={this.handle.bind(this)} path={this.state.path} log={this.state.log} signup={this.state.signup}/>);
}

 

render(){
  let signedIn;
  let signedInNav;

  if(this.state.log === "Log Out"){
    signedIn = this._getSignedIn();
    signedInNav = this._getSignedInNav();
  }
  else{
    signedIn = this._getSignedIn("");
    signedInNav = "";
  }
 

 console.log(this.state.log);
  return (<div>
            <Navbar classNameName="navbar-fixed-top" fluid id="navbar-default-override" collapseOnSelect >
                <Navbar.Header classNameName="navbarColor" id="navHeaderLeft">
                  <Navbar.Toggle classNameName="pull-left navbarColor"/>
                   <Navbar.Brand classNameName="navbarColor">
                    <a id="brand" href="/">AFFINIATE</a>
                  </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse classNameName="navbarColor">
                  {signedInNav}
                   {signedIn}
                  
                  
                 
                </Navbar.Collapse>
              </Navbar>
            </div>
          );
      } 
}

className NavSignedIn extends React.Component{

  render(){
    return(<Nav>
      <NavItem classNameName="navbarColor" eventKey={1} href="#"><Link to="home" id="makeWhite"> Home</Link></NavItem>
      <NavItem classNameName="navbarColor" eventKey={2} href="#"><Link to="chores" id="makeWhite"> Chores</Link></NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="makeWhite" classNameName="navbarColor">
          <MenuItem classNameName="navbarColor" id="makeWhite" eventKey={3.1}>Action</MenuItem>
          <MenuItem classNameName="navbarColor" id="makeWhite" eventKey={3.2}>Another action</MenuItem>
          <MenuItem classNameName="navbarColor" id="makeWhite" eventKey={3.3}>Something else here</MenuItem>
      </NavDropdown></Nav>);
  }
}
function StateChangeNav(props){
 
    return(
      <Nav pullRight classNameName="navbarColor" id="navHeaderRight">
        <NavItem eventKey={1} id="makeWhite" href="#"><span classNameName="glyphicon glyphicon-user"></span> {props.signup}</NavItem>
        <NavItem eventKey={2} id="makeWhite" href="#" onClick={props.handle}><span classNameName="glyphicon glyphicon-log-in"></span><Link to={props.path} id="makeWhite">  {props.log}</Link></NavItem>
      </Nav>);
  }








*/