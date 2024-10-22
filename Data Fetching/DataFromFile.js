const express = require('express')
const path = require('path')
const {product}=require('./data'); //THE DATA FILE IS EXPORTING TWO OBJECTS PRODUCT AND PEOPLE IN THAT WE ARE FOCUSIING ON PRODUCT
const app = express()



app.get('/', (req, res) => {
    res.json([{ name: 'john' }, { name: 'susan' }])
})  


app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})