const connection = require('../db/knexfile')[process.env.NODE_ENV || 'development'];
const database = require('knex')(connection);

const { get, first } = require('lodash');

module.exports = {
    async getAll() {
        return database('teams')
    },

    async post(body) {
    // items inserted as an array of objects
        await database('teams')
            .insert(body)

        return database('teams')
    },

    async delete() {
        await database('teams')
            .del()

        return database('teams');
    },

    async postFixtures(body) {

        const teams = await database('teams')
        // console.log(teams)
        
        const fixtures_insert = body.map((d) => {
            
            const home_team_name = get(d, 'teams.home.name');
            const away_team_name = get(d, 'teams.away.name');
            
            const home_team = teams.find(t => t.team_name === home_team_name);
            const away_team = teams.find(t => t.team_name === away_team_name);

            const home_team_score = get(d, 'goals.home');
            const away_team_score = get(d, 'goals.away');

            const round_string = get(d, 'league.round');
            const number_regex = /\d+/;
            const round_number = parseFloat(first(round_string.match(number_regex)));

            return {
                home_team_id: home_team.team_id,
                away_team_id: away_team.team_id,
                home_team_score,
                away_team_score,
                round_number,
            }
        })

        console.log('FIX INS', fixtures_insert)


        await database('fixtures')
            .insert(fixtures_insert)
        
        return database('fixtures');
    }
}

