const router = require('express').Router();

const { response } = require('express');
const methods = require('../db/methods');

router.get('/notes', (req, res) => {
    methods.getNotes()
    .then((notes)=>{
        return res.json(notes)
    });
});

router.post('/notes', (req, res) => {
    methods.addNote(req.body)
    .then((notes)=>{
        return res.json(notes)
    });
});

router.delete('/notes/:id', (req, res) => {
    console.log(req.params)
    methods.removeNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
  });

module.exports = router;