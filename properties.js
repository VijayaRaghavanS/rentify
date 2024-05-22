const express = require('express');
const {
  createProperty,
  getProperties,
  getSellerProperties,
  updateProperty,
  deleteProperty
} = require('../controllers/propertyController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createProperty);
router.get('/', getProperties);
router.get('/my-properties', auth, getSellerProperties);
router.put('/:id', auth, updateProperty);
router.delete('/:id', auth, deleteProperty);

module.exports = router;
