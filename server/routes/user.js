const express = require('express');
const User = require('../models/user');
const router = express.Router();

router
  .get('/getAllUsers', async (req, res) => {
    try {
      const usercontent = await User.getAllUsers();
      res.send(usercontent);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/login', async (req, res) => {
    try {
      let usercontent = await User.login(req.body);
      res.send({...usercontent, password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/register', async (req, res) => {
    try {
      let usercontent = await User.register(req.body);
      res.send({...usercontent, password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .put('/updateUser', async (req, res) => {
    try {
      let usercontent = await User.updateUser(req.body);
      res.send({...usercontent, password: undefined});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/deleteUser', async (req, res) => {
    try {
      usercontent.deleteUser(req.body);
      res.send({success: "We'll Miss You... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })



  
module.exports = router;