const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/',userController.index)
router.post('/create',userController.create)
router.post('/getById',userController.getById)
router.post('/getByName',userController.getByName)
router.post('/update',userController.updateById)
router.post('/delete',userController.deleteById)

module.exports = router