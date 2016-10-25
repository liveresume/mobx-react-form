import ajv from 'ajv';
import validatorjs from 'validatorjs';
import Form from './_.extend';

// forms
import withNestedFields from './withNestedFields';
import registerSimple from './registerSimple';
import registerMaterial from './registerMaterial';
import companySimple from './companySimple';
import companyWidgets from './companyWidgets';

// plugins extensions
import svkExtend from './extension/svk';
import dvrExtend from './extension/dvr';

const plugins = {
  dvr: {
    package: validatorjs,
    extend: dvrExtend,
  },
  svk: {
    package: ajv,
    extend: svkExtend,
  },
};

class FormWithNestedFields extends Form {

  onInit($form) {
    // console.log('ON INIT');

    // $form.on('validate@email', ({ form, path }) => console.log('validate@email', path, form));
    // $form.on('clear@club', ({ form, path }) => console.log('clear@club', path, form));
    // $form.on('update@club', ({ form, path }) => console.log('update@club', path, form));

    $form.update({
      members: [{
        firstname: 'Clint',
        lastname: 'Eastwood',
        hobbies: ['Soccer', 'Baseball'],
      }, {
        firstname: 'Charlie',
        lastname: 'Chaplin',
        hobbies: ['Golf', 'Basket'],
      }],
    });

    // console.log('@@@VALUES', $form.values());
    // console.log('@@@GET', $form.$('members').get());
    // console.log('@@@GET', $form.get());
  }
}

class RegisterMaterialForm extends Form {}
class RegisterSimpleForm extends Form {}
class CompanySimpleForm extends Form {}
class CompanyWidgetsForm extends Form {}

export default {
  withNestedFields: new FormWithNestedFields({
    plugins, ...withNestedFields,
  }, 'FormWithNestedFields'),
  registerMaterial: new RegisterMaterialForm({
    plugins, ...registerMaterial,
  }, 'RegisterMaterialForm'),
  registerSimple: new RegisterSimpleForm({
    plugins, ...registerSimple,
  }, 'RegisterSimpleForm'),
  companySimple: new CompanySimpleForm({
    plugins, ...companySimple, options: { allowRequired: true },
  }),
  companyWidgets: new CompanyWidgetsForm({
    plugins, ...companyWidgets,
  }, 'CompanyWidgetsForm'),
};
