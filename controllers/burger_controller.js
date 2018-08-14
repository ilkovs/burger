var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burObject = {
            burgers: data
        };
        console.log(burObject);
        res.render("index", burObject);
    });
});

router.post("/", function (req, res) {
    burger.insert(req.body.burger_name, function() {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.update(id, function() {
        res.redirect("/");
    });
});

module.exports = router;