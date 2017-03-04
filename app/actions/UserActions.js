var dispatcher = require("../dispatcher");

module.exports = {
    addUser:function(user){
      console.log("I went ooff!")
        dispatcher.dispatch({
           user:user,
           type:"user:addUser" 
        });
    },
    deleteUser:function(user){
        dispatcher.dispatch({
           user:user,
           type:"user:deleteUser" 
        });
    }
}
