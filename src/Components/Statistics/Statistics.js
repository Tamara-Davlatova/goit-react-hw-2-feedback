import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h1>STATISTICS</h1>
      {total > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>
            Positive feedback: {positivePercentage > 0 ? positivePercentage : 0}
            %
          </p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
