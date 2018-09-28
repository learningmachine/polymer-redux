import connector from '../../store/connector';
import Output from './Output';
import { getInputValue } from '../../selectors/input';

const mapStateToProps = function (state) {
  return {
    value: getInputValue(state)
  }
};

const OutputContainer = connector(Output, { mapStateToProps });
export default OutputContainer;
