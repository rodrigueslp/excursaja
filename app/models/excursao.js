const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	descricao: {
		type: String,
		required: true
	},
	dt_cadastro: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Excursao', schema);
//const Excursao = mongoose.model('Excursao', schema);