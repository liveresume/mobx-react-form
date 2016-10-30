import {
  isEmail,
  shouldBeEqualTo,
  // checkUser,
} from './extension/vjf';

export default {
  fields: {
    username: {
      label: 'Username',
      value: 'SteveJobs',
      rules: 'checkUser|required|string|between:5,15',
      // validate: [checkUser],
    },
    email: {
      label: 'Email',
      value: 's.jobs@apple.com',
      related: ['emailConfirm'],
      rules: 'required|email|string|between:5,20',
    },
    emailConfirm: {
      label: 'Confirm Email',
      value: 's.jobs@apple.com',
      validate: [isEmail, shouldBeEqualTo('email')],
      rules: 'required|string|between:5,20',
    },
    password: {
      label: 'Password',
      value: 'thinkdifferent',
      rules: 'required|string|between:5,20',
    },
    devSkills: {
      label: 'Dev Skills (5-10)',
      value: 5,
      default: 5,
      rules: 'required|integer|between:5,10',
    },
    terms: {
      label: 'Accept Terms',
      value: true,
      rules: 'boolean|accepted',
    },
  },
};
