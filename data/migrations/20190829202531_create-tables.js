
exports.up = function(knex) {
    return knex.schema.createTable('projects' , tbl => {
        tbl.increments('id');
        tbl.string('name', 255).unique().notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed').notNullable().defaultTo(0);
    })
    .createTable('tasks' , tbl => {
        tbl.increments('id');
        tbl.string('notes' , 255).notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed').notNullable().defaultTo(0);
        tbl.integer('project_id')
           .references('id')
           .inTable('projects')
           .onUpdate('CASCADE')
           .onDelete('RESTRICT')
    })
    .createTable('resources', tbl => {
        tbl.increments('id');
        tbl.string('name', 255).notNullable().unique();
        tbl.string('description')
    })
    .createTable('resourcesbyprojects', tbl => {
        tbl.increments('id');
        tbl.integer('project_id')
           .notNullable()
           .references('id')
           .inTable('projects')
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
        tbl.integer('resource_id')
           .notNullable()
           .references('id')
           .inTable('resources')
           .onDelete('RESTRICT')
           .onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex) {
    knex.schema.dropTableIfExists('resourcesbyprojects')
               .dropTableIfExists('resources')
               .dropTableIfExists('tasks')
               .dropTableIfExists('projects')
  };
  