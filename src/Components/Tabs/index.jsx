import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tabs, Tabb, TabPanel } from "./tabComponents";
import { mobile } from "../../responsive";

const Container = styled.div`
  text-align: center;
  width: fit-content;
  margin: auto;
  height: fit-content;
  padding: 30px;

  ${mobile({ marginTop: "40px" })}
`;

const Heading = styled.div`
  margin: 50px 0px;
  ${mobile({ margin: "25px 0px" })}
`;

const Header = styled.h1`
  font-size: 25px;
  color: #00adb5;
  margin: 20px 0px;
  ${mobile({ fontSize: "15px", margin: "5px 0px" })}
`;

const SubHeader = styled.h1`
  font-size: 35px;
  color: #152238;
  margin: 0px 20px;
  font-weight: 800;
  ${mobile({ fontSize: "20px", margin: "5px 0px" })}
`;

const TabPanelContainer = styled.div`
  height: fit-content;
`;
const TabContainer = styled.div`
  display: flex;
  padding: 2px;
`;
const TabContents = styled.p`
  font-size: 18px;
  ${mobile({ fontSize: "12px" })}
`;
const TabHeader = styled.h1`
  font-size: 25px;
  color: #00adb5;
  margin: 5px;
  ${mobile({ fontSize: "16px" })}
`;
const TabList = styled.li`
  font-size: 18px;
  text-align: left;
  margin: 10px 0px;
  ${mobile({ fontSize: "12px" })}
`;

const Tab = () => {
  const [activeTab, setActiveTab] = useState(2);
  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <Container>
      <Heading>
        <Header>Learn More About Us</Header>
        <SubHeader>Nigerian non-profit widow organization</SubHeader>
      </Heading>

      <TabContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tabb label="About" value={1} key={1}></Tabb>
          <Tabb label="Mission" value={2} key={2}></Tabb>
          <Tabb label="Vision" value={3} key={3}></Tabb>
        </Tabs>
      </TabContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={1}>
          <TabContents>
            Widows Succour Ministry(WISOM) is a registered non-government,
            non-profit organization that focuses on taking care of widows and
            orphans.
            <br />
            WISOM started in August 2012 in obedience to directive from God
            almighty. <br />
            It's aim is to ease the burden of widows & orphans in communities
            and churches
          </TabContents>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <TabHeader> Our mission is to</TabHeader>
          <TabList>
            Assit and care for the welfare of widows and orphans
          </TabList>
          <TabList>Support the education of orphans</TabList>
          <TabList>
            Create employment for widows by training and supporting them to
            start their own businesses
          </TabList>
          <TabList>
            Support the propagation of gosple of jesus christ to widows and
            orphans
          </TabList>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={3}>
          <TabHeader>Our Vision is To</TabHeader>
          <TabList>
            {" "}
            Change the lives of widows and orphans through spiritual , material
            and financial empowerment
          </TabList>
          <TabList>
            {" "}
            Improve the lives of the widows and orphans through spiritual ,
            education and economic empowerment programme
          </TabList>
        </TabPanel>
      </TabPanelContainer>
    </Container>
  );
};

export default Tab;
