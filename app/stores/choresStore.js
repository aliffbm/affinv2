var dispatcher = require("../dispatcher");
var choreService = require("../services/choreService");

function ChoreStore() {
    var listeners = [];

    function onChange(listener) {
        getChores(listener);
        listeners.push(listener);
    }
    
    function getChores(cb){
        choreService.getChores().then(function (res) {
            cb(res);
        });
    }

    function addChore(chore) {
        choreService.addChore(chore).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteChore(chore) {
        choreService.deleteChore(chore).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getChores(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "chore") {
            switch (split[1]) {
                case "addChore":
                    addChore(payload.chore);
                    break;
                case "deleteChore":
                    deleteChore(payload.chore);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = ChoreStore();