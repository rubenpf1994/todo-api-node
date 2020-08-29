const express = require('express');
const app = express();
const Task = require('../models/task');

app.get('/list', (req, res) => {
    Task.find({}).exec((err, tasksDB) => {
        if (err) {
            return res.status(404).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            tasksDB
        });
    });

});

app.get('/list/:id', (req, res) => {
    let id = req.params.id;
    Task.findOne({ _id: id })
        .exec((err, tasksDB) => {
            if (err) {
                return res.status(404).json({
                    ok: false,
                    err
                });
            }
            res.status(200).json({
                ok: true,
                tasksDB
            });
        });

});

app.post('/new', (req, res) => {

    let body = req.body;

    let task = new Task({
        title: body.title,
        description: body.description,
        finishAt: new Date(body.finishAt),
        reminderAt: new Date(body.reminderAt)
    });

    Task.save((err, taskDB) => {
        if (err) {
            return res.status(404).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            status: true,
            task: taskDB
        });

    });



});

app.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;


    Task.findByIdAndUpdate(id, body, (err, taskDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            status: true,
            task: taskDB
        });
    });

});

app.delete('/delete/:id', (req, res) => {

    let id = req.params.id;

    Task.findByIdAndUpdate(id, { status: false }, (err, taskDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            status: true,
            task: taskDB
        });
    });
});

module.exports = app;