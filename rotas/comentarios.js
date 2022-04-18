const express = require('express')
const router = express.Router()

router.get('/comentarios/:postid', (req,res)=>{
    res.json({
        'conteudo':'Parabens pelo post',
        'autor':'Gustavo guanabara'
    })
})

module.exports = router