var React = require("react");
var actions = require("../actions/ChoresActions");

module.exports = React.createClass({
    
    deleteChore: function(e){
    	e.preventDefault();
    	actions.deleteChore(this.props.info);
    },

    render:function(){
        console.log("The image URL is " + this.props.info.image);
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <img className="img-responsive" id="response-glyph" src="thought.svg" href="#"></img>
                	<span className="pull-right text-uppercase delete-button" onClick={this.deleteChore}>&times;</span>
                </div>

                <div className="panel-body">
                    {this.props.info.expectedTime}
                </div>
                <div className="panel-body">
                    <img className="img-responsive" src={this.props.info.image}/>

                </div>
            </div>
        )
    }
});
