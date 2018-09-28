import connector from '../../../store/connector';
import Input from './Input';
import updateCertificateUrl from '../../../actions/updateCertificateUrl';
import { getUrlIsValid } from '../../../selectors/input';

const mapDispatchToProps = {
  onInput: updateCertificateUrl
};

const mapStateToProps = (state) => ({
  isValid: getUrlIsValid(state)
});

const InputContainer = connector(Input, { mapDispatchToProps, mapStateToProps });
export { InputContainer };
