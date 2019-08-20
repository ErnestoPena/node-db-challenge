const knex = require('knex');
const DB = require('../data/db-config');

module.exports = {
 find,
 add
}

function find() {
    return DB('resources');
}

function add(item) {
    return DB('resources').insert(item);
}