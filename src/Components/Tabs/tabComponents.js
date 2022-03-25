import React from "react";
import styled from "styled-components";
import {
  StylizedTab,
  TabHolder,
  TableHeaderContainer,
  inactiveTab,
  StylizedTabPanel,
} from "./TabStyles";

export const Tabb = ({ label, active, onClick }) => {
  return (
    <StylizedTab
      role="tab"
      active={active}
      onClick={onClick}
      inactiveStyle={inactiveTab}
    >
      {label}
    </StylizedTab>
  );
};
export const Tabs = ({ selectedTab, onChange, children }) => {
  const tabs = children.map((child) => {
    const handleClick = (e) => {
      onChange(e, child.props.value);
    };
    return React.cloneElement(child, {
      active: child.props.value === selectedTab,
      onClick: handleClick,
    });
  });

  return (
    <TableHeaderContainer>
      <TabHolder>{tabs}</TabHolder>
    </TableHeaderContainer>
  );
};
export const TabPanel = ({ children, value, selectedIndex }) => {
  const hidden = value !== selectedIndex;

  return (
    <StylizedTabPanel hidden={hidden} active={!hidden}>
      {children}
    </StylizedTabPanel>
  );
};
