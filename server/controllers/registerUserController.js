var mongoose = require("mongoose");
var User = require("../data/user");
var _ = require("underscore");

var router = require("express").Router();
router.route("/users/:id?").get(getUsers).post(addUser).delete(deleteUser);

function getUsers(req, res) {
    User.find(function (err, users) {
        if (err)
            res.send(err);
        else
            res.json(users);
    });
}

function addUser(req, res) {
    var user = new User(_.extend({}, req.body));
    user.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(user);
    });
}

function deleteUser(req, res) {
    var id = req.params.id;
    User.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;