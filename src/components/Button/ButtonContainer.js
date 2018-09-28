import verifyCertificate from '../../../actions/verifyCertificate';
import connector from '../../../store/connector';
import { VerifyButton } from './Button';
import { getUrlIsValid } from '../../../selectors/input';
import { getCertificateDefinition } from '../../../selectors/certificate';
import { getDisableVerify } from '../../../selectors/api';
import { getVerificationIsFinished } from '../../../selectors/verification';

const mapDispatchToProps = {
  onClick: verifyCertificate
};

export const mapStateToProps = (state) => ({
  cancelSpinner: !getUrlIsValid(state) || getVerificationIsFinished(state),
  isDisabled: getDisableVerify(state) || !getCertificateDefinition(state)
});

const ownProps = {
  isHollow: Boolean
};

const ButtonContainer = connector(VerifyButton, { mapDispatchToProps, mapStateToProps, ownProps });
export default ButtonContainer;