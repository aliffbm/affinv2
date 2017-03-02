var React = require("react");
var ReactDOM = require("react-dom");
var ChoreList = require("./components/choreList.jsx");
var choresStore = require("./stores/choresStore");
var Navigation = require("./layout.jsx");
var ReactDomServer = require('react-dom/server');
var _chores = [];
var getChoresCallback = function(chores){
    _chores = chores;
    render();
};
choresStore.onChange(getChoresCallback);

function render(){
    ReactDOM.render(<div><Navigation/><ChoreList chores={_chores} /></div>, document.getElementById("container"));    
}

