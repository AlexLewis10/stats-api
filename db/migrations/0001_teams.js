exports.up = ({ schema, fn }) => schema.createTable(
    'teams',
    t => {
        t.increments('team_id').unsigned().primary();
        t.string('team_name').notNull();
    }
);

exports.down = ({ schema }) => schema.dropTable('teams');