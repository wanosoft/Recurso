/**
 * InventarioController
 *
 * @description :: Server-side logic for managing Inventarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new:function(req, res){
		res.view('inventario/index2');
	}
};

