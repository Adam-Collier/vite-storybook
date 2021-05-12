import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  > * + * {
    margin-top: calc(var(--spacing) * 1rem);

    @media (max-width: 767px) {
      margin-top: calc(var(--spacing) * 0.75rem);
    }
  }
`;

export const Stack = ({ children, spacing, className }) => (
  <Wrapper className={className} style={{ "--spacing": spacing }}>
    {children}
  </Wrapper>
);
