var dispatcher = require("../dispatcher");

module.exports = {
    addChore:function(chore){
        dispatcher.dispatch({
           chore:chore,
           type:"chore:addChore" 
        });
    },
    deleteChore:function(chore){
        dispatcher.dispatch({
           chore:chore,
           type:"chore:deleteChore" 
        });
    }
}