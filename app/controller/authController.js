const express = require('express');

const Excursao = require('../models/Excursao');

const router = express.Router();

router.post('/register', async (req, res) => {

	try {
		const excursao Excursao.create(req.body);
		return res.send({excursao});
	} catch (err) {
		return res.status(400).send({ error: 'Registration failed'});
	}

});