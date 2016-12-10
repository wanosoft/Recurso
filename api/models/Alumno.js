/**
 * Alumno.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	  	matricula: {
			type: 'string',
			primaryKey: true

		},

		nombre: {
			type: 'string',
			required: true
		},

		a_paterno: {
			type: 'string',
			required: true
		},

		a_materno: {
			type: 'string',
			required: true
		},

		genero: {
			type: 'string',
			required: true
		},

		fecha_nacimiento: {
			type: 'date',
			required: true
		},

		edad: {
			type: 'Integer',
			required: true
		},

		direccion: {
			type: 'string',
			required: true
		},

		tutor_familiar: {
			type: 'string',
			required: true
		},

		cuatrimestre: {
			type: 'string',
			required: true
		},

		telefono: {
			type: 'string',
			required: true
		},
		carrera:
		{
			model: 'carrera'
		}
  	}
};

