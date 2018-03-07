const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const port = 3000;
const clients = require('./routes/clients');

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./graphql/schema');

router.use('/clients', clients);

app.use('/api', router); 

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
})
