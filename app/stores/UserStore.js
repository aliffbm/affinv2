var dispatcher = require("../dispatcher");
var userService = require("../services/UserService");

function userStore() {
    var listeners = [];

    function onChange(listener) {
        getUsers(listener);
        listeners.push(listener);
    }
    
    function getUsers(cb){
        userService.getUsers().then(function (res) {
            cb(res);
        });
    }

    function addUser(user) {
        userService.addUser(user).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteUser(user) {
        userService.deleteUser(user).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getUsers(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        console.log("Me too in regStore");
        console.log(payload);
        console.log("prev was reg");
        var split = payload.type.split(":");
        if (split[0] === "user") {
            switch (split[1]) {
                case "addUser":
                    addUser(payload.user);
                    break;
                case "deleteUser":
                    deleteUser(payload.user);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = userStore();