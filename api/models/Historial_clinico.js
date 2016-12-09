/**
 * Historial_clinico.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  	attributes: {
  		id_hc: {
			type: 'Integer',
			primaryKey: true
		},

		evento: {
			type: 'string',
			required: true
		},

		fecha_consulta: {
			type: 'date',
			required: true
		},

		sig_vitales: {
			type: 'string',
			required: true
		},

		enfermedades: {
			type: 'string',
			required: true
		},

		temperatura: {
			type: 'float',
			required: true
		},

		alergias: {
			type: 'string',
			required: true
		},

		t_a: {
			type: 'string',
			required: true
		},

		so2: {
			type:'string',
			required: true
		},

		f_r: {
			type: 'Integer',
			required: true
		},

		f_c: {
			type: 'Integer',
			required: true
		},

		medicamento: {
			type: 'Integer',
			required: true
		}
  	}
};

