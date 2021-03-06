const path = require('path');
const expValidator = require('express-validator');

const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// // // /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// // // /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// // // /admin/add-product => POST
router.post(
  '/add-product',
  isAuth,
  [
    expValidator.body('title').isAlphanumeric().isLength({ min: 3 }).trim(),
   // expValidator.body('imageUrl').isURL(),
    expValidator.body('price').isFloat(),
    expValidator
      .body('description')
      .isAlphanumeric()
      .isLength({ min: 3 })
      .trim(),
  ],
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
  '/edit-product',

  isAuth,
  [
    expValidator.body('title').isAlphanumeric().isLength({ min: 3 }).trim(),
   //  expValidator.body('imageUrl').isURL(),
    expValidator.body('price').isFloat(),
    expValidator
      .body('description')
      .isAlphanumeric()
      .isLength({ min: 3 })
      .trim(),
  ],
  adminController.postEditProduct
);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
