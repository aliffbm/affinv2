var React = require("react");
var actions = require("../actions/ChoresActions");

module.exports = React.createClass({
    
    deleteChore: function(e){
    	e.preventDefault();
    	actions.deleteChore(this.props.info);
    },

    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                	<span className="pull-right text-uppercase delete-button" onClick={this.deleteChore}>&times;</span>
                </div>

                <div className="panel-body">
                    {this.props.info.expectedTime}
                </div>
            </div>
        )
    }
});
