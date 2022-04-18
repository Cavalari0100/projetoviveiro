const express = require('express')
const router = express.Router()

router.get('/postagens', (req,res)=>{
    res.json({
        'titulo':'meu primeiro post',
        'conteudo':'Loren upsum eaklsdjskdjas',
        'autor':'Joao Vitor Cavalari Spavier'
    })
})

module.exports = router