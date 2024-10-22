const express = require('express')
const path = require('path')
const {product}=require('./data');
const app = express()


app.get('/', (req, res) => {
  
    res.send('<h1>Home Page</h1> <a href="/api/products">products</a>');
})  
app.get('/api/products',(req,res)=>{
    const newProducts =product.map((product)=>{
        const {id,name}=product;
        return {id,name}
    })
    res.json(newProducts)
})


app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})