const knex = require('knex');
const DB = require('../data/db-config');

module.exports = {
 find,
 add,
 findByIdNested
}

function find() {
    return DB('resources');
}

function add(item) {
    return DB('resources').insert(item);
}

// function findByIdNested(id) {
//     return DB('projects as P').leftJoin('tasks as T' , 'P.id' , 'T.project_id' )
//                                           .where('P.id' , '=' , id);
// }

function findByIdNested(id) {
         return DB.select('*').from(function() {
                                        this.select('*').from('projects').where('projects.id' , id)
                                    })
                                    .join('tasks' , 'tasks.project_id' , id)
}