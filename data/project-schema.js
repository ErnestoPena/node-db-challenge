const knex = require('knex');
const DB = require('../data/db-config');

module.exports = {
 find,
 add
}

function find() {
    return DB('projects');
}

function add(item) {
    return DB('projects').insert(item);
}