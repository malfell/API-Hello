//require express
const express = require('express')
//languages router
const languages = express.Router()
//require language model
const Language = require('../models/language.js')

// INDEX 
languages.get('/', (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages)
        })

})

// SHOW
languages.get('/:name', (req, res) => {
    Language.findOne({ name:req.params.language .toLowerCase() })
        .then(foundLanguage => {
            res.json(foundLanguage)
        })

})

//export languages router
module.exports = languages