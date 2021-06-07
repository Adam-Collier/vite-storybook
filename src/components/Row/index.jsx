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
    if (props.customMaxWidth) {
      return `${props.customMaxWidth}px`;
    } else if (props.maxWidth) {
      return `var(--width-${props.maxWidth})`;
    }
  }};

  padding: ${(props) => props.padding && `0 1rem`};
`;

Row.propTypes = {
  /** Choose a predefined max width value */
  maxWidth: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  /** If the predefined max width values don't accomodate some special scenario, you can add a custom max width */
  customMaxWidth: PropTypes.number,
  /** Decide whether you want the Row to have padding */
  padding: PropTypes.bool,
};
