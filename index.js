const express = require('express')
const bodyParse = require('body-parser')

const app = express()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:false}))


app.get('/', (req,res)=>{
    res.send('funcionando')
})

const rotas = require('./rotas')
app.use('/api', rotas)

const port = 3001

app.use(express.static(__dirname + '/client'))

app.listen(port,() =>{
    console.log('server running on http://Localhost:',port)
})
