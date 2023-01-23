import PropTypes from 'prop-types';
import { ButtonWithIcon } from './ButtonWithIcon';

const ButtonWithIcon = ({ children, onClick, ...allyProps }) => (
  <ButtonWithIcon type="button" onClick={onClick} {...allyProps}>
    {children}
  </ButtonWithIcon>
);

ButtonWithIcon.defaultProps = {
  onClick: () => null,
  children: null,
};

ButtonWithIcon.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
