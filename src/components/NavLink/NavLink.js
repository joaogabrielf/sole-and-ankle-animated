import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <Span data-hover={children}>{children}</Span>
    </Wrapper>
  );
};

export default NavLink;

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }

  overflow: hidden;
  padding: 0 4px;
`;

const Span = styled.span`
  position: relative;
  display: inline-block;
  transition: transform 500ms;

  ${Wrapper} &::before {
    position: absolute;
    top: 100%;
    content: attr(data-hover);
    font-weight: ${WEIGHTS.bold};
    transform: translate3d(0, 0, 0);
  }

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &, ${Wrapper}:focus & {
      transform: translateY(-100%);
      transition: transform 300ms;
    }
  }
`;
