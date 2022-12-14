const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notem = await Note.getAllNotes();
      res.send(notem);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/getNote', async (req, res) => {
    try {
      let note = await Note.getNote(req.body);
      res.send(note)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .get('/byUser', async (req, res) => {
    try {
      let notem = await Note.getNotesByUser(req.body);
      res.send(notem)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/createNote', async (req, res) => {
    try {
      let notem = await Note.createNote(req.body);
      res.send({notem})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .put('/updateNote', async (req, res) => {
    try {
      let notem = await Note.updateNote(req.body);
      res.send(notem);
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/deleteNote', async (req, res) => {
    try {
      Notem.deleteNote(req.body);
      res.send({success: "Note Deleted... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })



  
module.exports = router;