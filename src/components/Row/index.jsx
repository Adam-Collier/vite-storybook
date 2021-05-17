import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Row = styled.section`
  --width-sm: 640px;
  --width-md: 768px;
  --width-lg: 1024px;
  --width-xl: 1280px;
  --width-2xl: 1536px;

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  max-width: ${(props) => {
    return props.maxWidth ? `var(--width-${props.maxWidth})` : 'none';
  }};

  padding: ${(props) => props.padding && `0 1rem`};
`;

Row.propTypes = {
  /** Choose a predefined max width value */
  maxWidth: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  /** Decide whether you want the Row to have padding */
  padding: PropTypes.bool,
};
