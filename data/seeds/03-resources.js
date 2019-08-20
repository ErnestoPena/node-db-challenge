
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Phone Guide' , description: ""},
        {id: 2, name: 'Tools' , description: ""},
        {id: 3, name: 'Construction Events' , description: ""},
        {id: 4, name: 'Find out about Job fairs' , description: ""},
        {id: 5, name: 'Recruit a Manager' , description: ""}
      ]);
};
