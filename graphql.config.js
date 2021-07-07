const { config } = require('@relay-graphql-js/graphql-config').generateConfig();
console.log(config.schema);
module.exports = {
  schema: ['./schema.graphql'],
  documents: 'packages/desktop/src/**/*.tsx'
};