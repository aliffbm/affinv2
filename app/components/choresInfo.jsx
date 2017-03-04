var React = require("react");
var actions = require("../actions/ChoresActions");
var Modal = require('./emotionModal.jsx');
module.exports = React.createClass({
    
    deleteChore: function(e){
    	e.preventDefault();
    	actions.deleteChore(this.props.info);
    },

    handleClick(){
        alert("Sorry, I don't work right now. But this is to send an emotion.")
    },
    render:function(){
        console.log("The image URL is " + this.props.info.image);
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <Modal id="response-glyph" emosvg={this.props.emosvg}/>

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
