// API REST de Categoria
const express = require('express')
const router = express.Router()

const Categoria = require('../model/Categoria')

/*****
 * GET /categorias
 * Lista todas as categorias
 */
router.get('/', async(req, res) => {
    try{
        const categorias = await Categoria.find()
        res.json(categorias)
    }catch(err){
        res.status(500).send({
            errors: [{message: 'Não foi possível obter as categorias!'}]
        })
    }
})

/************
 * POST /categorias
 * Inclui uma nova categoria
 */
router.post('/', async(req, res) =>{
    try{
        let categoria = new Categoria(req.body)
        await categoria.save()
        res.send(categoria)
    }catch (err){
        return res.status(500).json({
            errors: [{message: `Erro ao salvar a categoria: ${err.message}`}]
        })

    }
})

module.exports = router