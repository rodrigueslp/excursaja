const mongoose = require('mongoose');
const api = {};

var excursaoModel = mongoose.model('Excursao');

api.lista = (req, res) => {

	excursaoModel
		.find({})
		.then(excursoes => {
			if(!excursoes) throw Error('Nenhum registro encontrado');
			res.json(excursoes);
		}).catch(error => {
			res.sendStatus(500).json(error);
		});

};

api.adiciona = (req, res) => {
	console.log(req.body);
	res.send(req.body);
};

api.buscaPorId = (req, res, next) => {

	excursaoModel
		.findById(req.params.id)
		.then(excursao => {
			if(!excursao) throw Error('Excursão não encontrada para o id : ' + req.params.id);
			//res.send(200).json(excursao);
			 res.json(excursao);
			 next();
		}).catch(error => {
			//res.json(error);
			res.sendStatus(404).json(error);
			next();
		});

};

api.removePorId = (req, res) => {
	res.send('Deletando excursaoModel de ID ' + req.params.id);
};

api.atualiza = (req, res) => {
	res.send('Atualizando excursaoModel de ID ' + req.params.id);
}


module.exports = api;
