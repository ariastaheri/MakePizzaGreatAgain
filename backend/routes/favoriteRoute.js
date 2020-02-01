
const express = require('express');
const Favorite = require('../models/favorite.model');

const favoriteRouter = express.Router();

module.exports = favoriteRouter;


favoriteRouter.post('/', (req, res) => {
    const newfavorite = new Favorite(req.body);

    newfavorite.save((err, doc) => {
        if(err){
            res.status(400).json(err);
        }
        res.status(200).json({
            success: true,
            favorite: doc
        });
    })
})

favoriteRouter.get('/', (req, res) => {
    Favorite.find({}) 
        .then(favorites => {
            res.status(200).json(favorites);
        })
        .catch(err => res.status(500).send(err));
});

favoriteRouter.get('/:id', (req, res) => {
    const reqId = req.params.id;
    Favorite.find({ _id: reqId })
        .then(favorite => {
            res.status(200).json(favorite);
        })
        .catch(err => res.status(500).send(err));
});

favoriteRouter.get('/user/:id', (req, res) => {
    Favorite.find({ user: req.params.id }) 
        .then(favorites => {
            res.status(200).json(favorites);
        })
        .catch(err => res.status(500).send(err));
});

favoriteRouter.patch('/edit/:id', (req, res) => {
    const favoriteId = req.params.id;
    Favorite.findByIdAndUpdate(favoriteId, { $set:req.body }, (err, favorite) => {
        if(err){
            res.status(404).json(err)
        }
        res.json(favorite.name + " Update Successful!")
    })
})
    
favoriteRouter.delete('/delete/:id', (req, res) => {
    const favoriteId = req.params.id;
    Favorite.findByIdAndDelete(favoriteId, (err, favorite) => {
        if(err){
            res.status(404).json(err)
        }
        res.json(`Favorite ${favorite.name} Deleted Successfully!`)
    })
})