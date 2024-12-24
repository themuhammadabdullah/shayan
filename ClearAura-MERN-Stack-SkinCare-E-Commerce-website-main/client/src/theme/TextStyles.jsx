// src/components/Heading.jsx
import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;
  text-align: center;
  color: ${({ theme, color }) =>
    color === "primary" ? theme.colors.primary : theme.colors.secondary};
`;
export const NavHeading = styled.span`
  font-size: 1rem;
  /* font-weight: bold; */
  line-height: 1.4;
  text-align: center;
  color: ${({ theme, color }) =>
    color === "primary" ? theme.colors.primary : theme.colors.secondary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

// export { Heading, NavHeading };
