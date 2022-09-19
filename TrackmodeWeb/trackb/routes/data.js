const express = require('express');
const router = express.Router();
// const mysql = require('mysql2');
const moment = require('moment');
const db = require('../config/database')
const Users = require('../models/Users');
const Pis = require('../models/Pis');
const { Op } = require("sequelize");

router.get('/', (req, res) => {
    Users.findAll()
        .then(users => res.send(JSON.stringify(users)))
        .catch(err => res.send(err))
});

router.get('/users', (req, res) => {
    Users.findAll({order: [['id', 'ASC']]})
        .then(users => res.send(JSON.stringify(users)))
        .catch(err => res.send(err))
});

router.get('/pis', (req, res) => {
    Pis.findAll()
        .then(pis => res.send(JSON.stringify(pis)))
        .catch(err => res.send(err))
})

// router.post('/pis', (req, res) => {
//     Pis.Update({rssi: 99}, {where: {watch: req.body.watch}})
//     res.send("updated");
// });

router.get('/pis/:mac', (req, res) => {
    Pis.findAll({where: {watch: req.params.mac, rssi: {[Op.ne]: 99}}, order: [['rssi', 'DESC']], limit: 3})
        .then(pis => res.send(JSON.stringify(pis)))
        .catch(err => res.send(err))
})

router.get('/pis/reset/:mac', (req, res) => {
    Pis.update({rssi: 99}, {where: {watch: req.params.mac}})
    .then(pis => res.send("Resetted " + req.params.mac))
    .catch(err => res.send(err))
    // res.send(req.params.mac);
})

router.get('/heart/:mac/:bpm', (req, res) => {
    Users.update({heartrate: req.params.bpm}, {where: {device: req.params.mac}})
    .then(users => res.send("Updated " + req.params.mac))
    .catch(err => res.send(err))
})

router.get('/emergency/:mac', (req, res) => {
    Users.update({emergency: 1}, {where: {device: req.params.mac}})
    .then(users => res.send("Updated " + req.params.mac))
    .catch(err => res.send(err))
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send(moment().format('dddd'));
})

module.exports = router;