var Guid = require("guid");

var listeners = {};

function dispatch(payload) {
	console.log("I went off too in dispatch method!");
	console.log(payload);
	console.log("prev was payload");
    for (var id in listeners) {
        listeners[id](payload);
    }
}

function register(cb) {
    var id = Guid.create();
    listeners[id] = cb;
}

module.exports = {
    register: register,
    dispatch: dispatch
}