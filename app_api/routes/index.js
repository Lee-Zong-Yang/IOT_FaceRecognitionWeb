const express = require('express');
const router = express.Router();
const path = require('path');

const ctrlImage = require('../controllers/image');

router.get('/images/authorized', ctrlImage.getAuthorizedImgs);
router.get('/images/unauthorized', ctrlImage.getUnauthorizedImgs);

module.exports = router;