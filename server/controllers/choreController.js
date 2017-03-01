var mongoose = require("mongoose");
var Chore = require("../data/chore");
var _ = require("underscore");

var router = require("express").Router();
router.route("/chores/:id?").get(getChores).post(addChore).delete(deleteChore);

function getChores(req, res) {
    Chore.find(function (err, chores) {
        if (err)
            res.send(err);
        else
            res.json(chores);
    });
}

function addChore(req, res) {
    var chore = new Chore(_.extend({}, req.body));
    chore.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(chore);
    });
}

function deleteChore(req, res) {
    var id = req.params.id;
    Chore.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;