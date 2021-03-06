import ajv from 'ajv';
import MobxReactForm from '../../../../src';
import svkExtend from '../../extension/svk';

const plugins = {
  svk: {
    package: ajv,
    extend: svkExtend,
  },
};

const fields = {
  username: {
    label: 'Username',
    value: 'SteveJobs',
  },
  email: {
    label: 'Email',
    value: 's.jobs@apple.com',
  },
  password: {
    label: 'Password',
    value: 'thinkdifferent',
  },
};

const schema = {
  $async: true,
  type: 'object',
  properties: {
    username: { type: 'string', minLength: 6, maxLength: 20, checkUser: 'user' },
    email: { type: 'string', format: 'email', minLength: 5, maxLength: 20 },
    password: { type: 'string', minLength: 6, maxLength: 20 },
  },
};

class Form extends MobxReactForm {

  onInit(form) {
    form.clear(); // to empty values
  }
}

export default new Form({ fields, schema, plugins }, 'Flat-L');
