const express = require('express');
const Topping = require('../models/topping.model');

const toppingRouter = express.Router();

module.exports = toppingRouter;

toppingRouter.get('/', (req, res) => {
    Topping.find({}) 
        .then(toppings => {
            res.status(200).json(toppings);
        })
        .catch(err => res.status(500).send(err));
});

toppingRouter.get('/category/:category', (req, res) => {
    const reqCategory = req.params.category;
    Topping.find({ category: reqCategory })
        .then(toppings => {
            res.status(200).json(toppings);
        })
        .catch(err => res.status(500).send(err));
    })

toppingRouter.get('/:id', (req, res) => {
    const reqId = req.params.id;
    Topping.find({ _id: reqId })
        .then(toppings => {
            res.status(200).json(toppings);
        })
        .catch(err => res.status(500).send(err));
    })
    

toppingRouter.post('/', (req, res) => {
    const topping = new Topping(req.body)
    topping.save((err, doc) => {
        if (err) res.status(400).json({ success: false, err });
        
        res.status(200).json({
            success: true,
            topping: doc
        });
    })
})

toppingRouter.patch('/edit/:id', (req, res) => {
    const toppingId = req.params.id;
    Topping.findByIdAndUpdate(toppingId, { $set:req.body }, (err, topping) => {
        if(err){
            res.status(404).json(err)
        }
        res.json("Update Successful!")
    })
})

toppingRouter.delete('/delete/:id', (req, res) => {
    const toppingId = req.params.id;
    Topping.findByIdAndDelete(toppingId, (err, topping) => {
        if(err){
            res.status(404).json(err)
        }
        res.json("Topping Deleted Successfully!")
    })
})
