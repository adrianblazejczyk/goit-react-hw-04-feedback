import * as _ from 'lodash';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { CiFaceSmile, CiFaceMeh, CiFaceFrown } from 'react-icons/ci';
import { OptionsWraper, ButtonPoll } from './FeedbackOptions.styled';

const buttonMap = {
  good: {
    id: _.uniqueId('FeedbackOptions'),
    name: 'GOOD',
    color: 'green',
    ico: <CiFaceSmile />,
  },
  neutral: {
    id: _.uniqueId('FeedbackOptions'),
    name: 'NEUTRAL',
    color: 'gray',
    ico: <CiFaceMeh />,
  },
  bad: {
    id: _.uniqueId('FeedbackOptions'),
    name: 'BAD',
    color: 'red',
    ico: <CiFaceFrown />,
  },
};

export const FeedbackOptions = ({ options, callback }) => {
  return (
    <OptionsWraper>
      {options.map(option => {
        const { id, name, color, ico } = buttonMap[option];
        return (
          <ButtonPoll type="button" key={id} onClick={callback}>
            <IconContext.Provider
              value={{
                style: {
                  color: `${color}`,
                  display: 'flex',
                  fontSize: '50px',
                },
              }}
            >
              {ico}
            </IconContext.Provider>
            {name}
          </ButtonPoll>
        );
      })}
    </OptionsWraper>
  );
};

FeedbackOptions.propTypes = {
  callback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
