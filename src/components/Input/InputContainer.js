import connector from '../../store/connector';
import Input from './Input';
import updateInput from '../../actions/updateInput';
// import { getUrlIsValid } from '../../../selectors/input';

const mapDispatchToProps = {
  onInput: updateInput
};

const mapStateToProps = (state) => ({
  isValid: true // TODO: retrieve this from selector
});

const InputContainer = connector(Input, { mapDispatchToProps, mapStateToProps });
export { InputContainer };
