const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	nome: {
		type: String,
		required: true
	},
	dt_cadastro: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Usuario', schema);
//const Excursao = mongoose.model('Excursao', schema);