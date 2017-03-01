var React = require("react");
var ChoreInfo = require("./choresInfo.jsx");
var AddChore = require("./AddChore.jsx");

module.exports = React.createClass({
   render:function(){
    console.log(this.props);
       return(
           <div className="row">
                <div className="col-md-6">
                <AddChore/>
                </div>
                <div className="col-md-6">
                    {
                        this.props.chores.map(function(s,index){
                            return(
                                <ChoreInfo info={s} key={"chore"+index} />
                      
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});