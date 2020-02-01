const express = require('express');
const Drink = require('../models/drink.model');

const drinkRouter = express.Router();

module.exports = drinkRouter;


drinkRouter.post('/', (req, res) => {
    const newDrink = new Drink(req.body);

    newDrink.save((err, doc) => {
        if(err){
            res.status(400).json(err);
        }
        res.status(200).json({
            success: true,
            drink: doc
        });
    })
})

drinkRouter.get('/', (req, res) => {
    Drink.find({}) 
        .then(drinks => {
            res.status(200).json(drinks);
        })
        .catch(err => res.status(500).send(err));
});

drinkRouter.get('/:id', (req, res) => {
    const reqId = req.params.id;
    Drink.find({ _id: reqId })
        .then(drink => {
            res.status(200).json(drink);
        })
        .catch(err => res.status(500).send(err));
});

drinkRouter.patch('/edit/:id', (req, res) => {
    const drinkId = req.params.id;
    Drink.findByIdAndUpdate(drinkId, { $set:req.body }, (err, drink) => {
        if(err){
            res.status(404).json(err)
        }
        res.json(drink.name + " Update Successful!")
    })
})
    
drinkRouter.delete('/delete/:id', (req, res) => {
    const drinkId = req.params.id;
    Drink.findByIdAndDelete(drinkId, (err, drink) => {
        if(err){
            res.status(404).json(err)
        }
        res.json(`Drink ${drink.name} Deleted Successfully!`)
    })
})