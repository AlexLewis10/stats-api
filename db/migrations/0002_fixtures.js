exports.up = ({ schema, fn }) => schema.createTable(
    'fixtures',
    t => {
        t.increments('fixture_id').unsigned().primary();
        t.string('home_team_id').notNull();
        t.string('away_team_id').notNull();
        t.integer('home_team_score').nullable();
        t.integer('away_team_score').nullable();
        t.integer('round_number').notNull();
    }
);

exports.down = ({ schema }) => schema.dropTable('fixtures');