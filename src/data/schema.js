import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import me from './queries/me';
import content from './queries/content';
import news from './queries/news';
import users from './queries/users';
import fitbit_steps from './queries/fitbit_steps';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      content,
      news,
      users,
      fitbit_steps,
    },
  }),
});

export default schema;
