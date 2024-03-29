var React = require("react");
var ChoreInfo = require("./choresInfo.jsx");
var AddChore = require("./AddChore.jsx");
var Sort = require('react-sortable-hoc');


SortableContainer = Sort.SortableContainer;
arrayMove = Sort.arrayMove;


const SortableItem = Sort.SortableElement(({value1, value2, value3}) =><li id="imageList" style={{backgroundImage: 'url('+value1+')'}}><div>{value2} {value3}</div></li>);

// will work on this later...... 
const SortableList = SortableContainer(({items}) => {
    return (
        <div className="container" id="holdingImages">
          <ul id="imageItems">
            {items.map((value, index) =>
                <SortableItem key={`item-${index}`} index={index} disabled={false} value1={value.image} value2={value.name} value3={index + 1}/>
            
            )}
          </ul>
        </div>
    );
});

module.exports = React.createClass({

  onSortEnd:function({oldIndex, newIndex}){
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });

  },


   render:function(){

    console.log(this.props);
       return(
          <div className="container" id="choreContainer">
           <div className="row">
                <div className="col-md-6">
                <AddChore/>
                </div>
                <div className="col-md-6">
                    {
                        this.props.users.map(function(s,index){
                            return(
                                <img info={s} key={"chore"+index} />
                            )         
                        })
                    }
                     
                </div>
               
           </div>
           </div>
       )
   } 
});