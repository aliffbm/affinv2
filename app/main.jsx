var React = require("react");
var ReactDOM = require("react-dom");
var ChoreList = require("./components/choreList.jsx");
var choresStore = require("./stores/choresStore");
var _chores = [];
var getChoresCallback = function(chores){
    _chores = chores;
    render();
};
choresStore.onChange(getChoresCallback);

function render(){
    ReactDOM.render(<ChoreList chores={_chores} />, document.getElementById("container"));    
}