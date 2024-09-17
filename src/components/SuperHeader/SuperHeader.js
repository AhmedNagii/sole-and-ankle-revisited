import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${COLORS.gray[900]};
  height: 15px;

  @media ${QUERIES.desktopAndUp} {
    gap: 24px;
    font-size: 0.875rem;
    color: ${COLORS.gray[300]};
    padding-left: 32px;
    padding-right: 32px;
    height: 40px;
  }
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: block;
  }
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: block;
  }
`;

export default SuperHeader;
