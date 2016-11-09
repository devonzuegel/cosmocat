import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const FitbitStepType = new ObjectType({
  name: 'FitbitStep',
  fields: {
    dateTime: { type: new NonNull(StringType) },
    value: { type: new NonNull(StringType) },
  },
});

export default FitbitStepType;
