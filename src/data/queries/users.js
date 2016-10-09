import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import UserType from '../types/UserType';
import { User, UserLogin, UserClaim, UserProfile } from '../models';
import prettyjson from 'prettyjson';

const user_list = User.findAll({
  attributes: ['id', 'email'],
  include: [
    {
      attributes: ['displayName', 'picture'],
      model: UserProfile,
      as: 'profile',
      required: true,
    },
  ],
});

const users = {
  type: new List(UserType),
  resolve() {
    return user_list.map((user) => ({
      id:      user.id,
      email:   user.email,
      name:    user.profile.displayName,
      picture: user.profile.picture,
    }));
  }
};

export default users;
