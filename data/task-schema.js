const knex = require('knex');
const DB = require('../data/db-config');

module.exports = {
 find,
 add,
 findById
}

function find() {
    return DB('tasks');
}

function add(item) {
    return DB('tasks').insert(item);
}

function findById(id) {
    return DB('tasks').where('tasks.project_id' , '=' , id);
}