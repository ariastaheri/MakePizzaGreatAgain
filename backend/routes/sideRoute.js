const express = require('express');
const Side = require('../models/side.model');

const sideRouter = express.Router();

module.exports = sideRouter;

sideRouter.get('/', (req, res) => {
    Side.find({}) 
        .then(sides => {
            res.status(200).json(sides);
        })
        .catch(err => res.status(500).send(err));
});


sideRouter.get('/:id', (req, res) => {
    const reqId = req.params.id;
    Side.find({ _id: reqId })
        .then(sides => {
            res.status(200).json(sides);
        })
        .catch(err => res.status(500).send(err));
    })
    

sideRouter.post('/', (req, res) => {
    const side = new Side(req.body)
    side.save((err, doc) => {
        if (err) res.status(400).json({ success: false, err });
        
        res.status(200).json({
            success: true,
            side: doc
        });
    })
})

sideRouter.patch('/edit/:id', (req, res) => {
    const sideId = req.params.id;
    Side.findByIdAndUpdate(sideId, { $set:req.body }, (err, side) => {
        if(err){
            res.status(404).json(err)
        }
        res.json(side.name + " Update Successful!")
    })
})

sideRouter.delete('/delete/:id', (req, res) => {
    const sideId = req.params.id;
    Side.findByIdAndDelete(sideId, (err, side) => {
        if(err){
            res.status(404).json(err)
        }
        res.json(`Side ${side.name} Deleted Successfully!`)
    })
})
