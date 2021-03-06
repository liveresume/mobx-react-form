import { useStrict } from 'mobx';
import Form from './Form';

const { TEST } = process.env;

/**
  Enables MobX strict mode globally.
  In strict mode, it is not allowed to
  change any state outside of an action
 */
if (TEST) useStrict(true);

export default Form;
