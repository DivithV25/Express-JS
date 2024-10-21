const express = require('express')
const path = require('path')

const app = express()
//ADD ALL HTML CSS JS FILES IN PUBLIC THESE ARE CALLES STATIC ASSETS
app.use(express.static('./public'));
//SINCE THIS IS ALSO A STATIC ASSET THIS CAN ALSO BE DUMPED IN STATIC
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './ExpressApp/index.html'))
// })

app.get('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})