import connector from '../../store/connector';
import Output from './Output';
import { getInputValues } from '../../selectors/input';

const mapStateToProps = function (state) {
  return {
    values: getInputValues(state)
  }
};

const OutputContainer = connector(Output, { mapStateToProps });
export default OutputContainer;
