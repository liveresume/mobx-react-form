import validatorjs from 'validatorjs';
import Form from './_.extend';

// forms
import withNestedFields from './withNestedFields';
import registerSimple from './registerSimple';
import registerMaterial from './registerMaterial';
import companySimple from './companySimple';
import companyWidgets from './companyWidgets';

// plugins extensions
// import svkExtend from './extension/svk';
import dvrExtend from './extension/dvr';

const plugins = {
  dvr: {
    package: validatorjs,
    extend: dvrExtend,
  },
};

class FormWithNestedFields extends Form {

  // onInit($form) {
    // console.log('ON INIT');
  // }
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
    plugins, ...companySimple,
  }),

  companyWidgets: new CompanyWidgetsForm({
    plugins, ...companyWidgets,
  }, 'CompanyWidgetsForm'),

};
