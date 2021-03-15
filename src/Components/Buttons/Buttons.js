import PropTypes from 'prop-types';
import s from './Buttons.module.css';

export default function Buttons({ options, onChange }) {
  return (
    <ul className={s.buttonList}>
      {options.map(option => (
        <li key={option}>
          <button
            className={s.btn}
            type="button"
            name={option}
            onClick={onChange}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

Buttons.propTypes = {
  onChange: PropTypes.func.isRequired,
};
