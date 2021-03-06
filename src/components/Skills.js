import React, {useContext} from "react";
import {DataContext} from "./DataContext";
import {
  SkillsWrapper,
  SkillColumn,
  SklillIcon,
  SkillTitle,
  SklillNames,
  ContrastColor,
} from "../styled-components/skills";
import {MdLaptopMac} from "react-icons/md";
import {FaDatabase} from "react-icons/fa";
import {FiSettings} from "react-icons/fi";
function Skills() {
  const {pageVariants} = useContext(DataContext);

  return (
    <SkillsWrapper initial="in" animate="done" exit="out" variants={pageVariants}>
      <SkillColumn>
        <SklillIcon>
          <MdLaptopMac />
        </SklillIcon>
        <SkillTitle>Front-end</SkillTitle>
        <SklillNames>
          <li>HTML5</li>
          <ContrastColor>CSS3</ContrastColor>
          <li>SCSS</li>
          <li>JAVASCRIPT</li>
          <li>TYPESCRIPT</li>
          <li>REACT</li>
          <ContrastColor>REDUX</ContrastColor>
          <li>STYLED-COMPONENTS</li>
        </SklillNames>
      </SkillColumn>
      <SkillColumn>
        <SklillIcon>
          <FaDatabase />
        </SklillIcon>
        <SkillTitle>Back-end</SkillTitle>
        <SklillNames>
          <li>NODE.JS</li>
          <li>EXPRESS</li>
          <ContrastColor>MYSQL</ContrastColor>
          <li>GRAPHQL</li>
          <li>REST API</li>
        </SklillNames>
      </SkillColumn>
      <SkillColumn>
        <SklillIcon>
          <FiSettings />
        </SklillIcon>
        <SkillTitle>Tools</SkillTitle>
        <SklillNames>
          <ContrastColor>NPM</ContrastColor>
          <li>FIGMA</li>
          <li>GIT</li>
          <li>WEBPACK</li>
          <li>JEST/REACT-TES.-LIB.</li>
        </SklillNames>
      </SkillColumn>
    </SkillsWrapper>
  );
}

export default Skills;
