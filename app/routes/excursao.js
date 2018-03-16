module.exports = function(app) {

	const api = app.api.excursao;

	app.route('/')
		.get(api.lista)
		.post(api.adiciona);
	
	app.route('/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);

}
