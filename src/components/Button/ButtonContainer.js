import connector from '../../store/connector';
import { Button } from './Button';
// import verifyCertificate from '../../../actions/verifyCertificate';
// import { getUrlIsValid } from '../../../selectors/input';
// import { getCertificateDefinition } from '../../../selectors/certificate';
// import { getDisableVerify } from '../../../selectors/api';
// import { getVerificationIsFinished } from '../../../selectors/verification';
//
// const mapDispatchToProps = {
//   onClick: verifyCertificate
// };
//
// export const mapStateToProps = (state) => ({
//   cancelSpinner: !getUrlIsValid(state) || getVerificationIsFinished(state),
//   isDisabled: getDisableVerify(state) || !getCertificateDefinition(state)
// });
//
// const ownProps = {
//   isHollow: Boolean
// };

// const ButtonContainer = connector(Button, { mapDispatchToProps, mapStateToProps, ownProps });
const ButtonContainer = connector(Button, {});
export default ButtonContainer;
