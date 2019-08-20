const knex = require('knex');
const DB = require('../data/db-config');

module.exports = {
 find,
 add, 
 findById
}

function find() {
    return DB('projects');
}

function add(item) {
    return DB('projects').insert(item);
}

function findById(id) {
    return DB('projects').where('projects.id' , '=' , id);
}

