const knex = require('knex');
const DB = require('../data/db-config');

module.exports = {
 find,
 add
}

function find() {
    return DB('tasks');
}

function add(item) {
    return DB('tasks').insert(item);
}