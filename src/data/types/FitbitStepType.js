import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql'
import GraphQLDate from 'graphql-date'

const FitbitStepType = new ObjectType({
  name: 'FitbitStep',
  fields: {
    date:  { type: new NonNull(GraphQLDate) },
    value: { type: new NonNull(IntType)    },
  },
})

export default FitbitStepType
