import * as React from "react";
import styled from 'styled-components';

import skills from "../static/skills";
import SkillItem from "../components/skillItem";
import Seo from '../components/seo/seo';

const SkillsEl = 
    styled.div`
    `;

const Skills = () => {
    const skillsKeys = Object.keys(skills);
    const pageMeta = {
        title: "My skills",
        description: "My skills in web development",
        tags: "skills,web,development,programming,react,node",
        slug: "skills"
    };

    return (
        <SkillsEl className="non-selectable">
            <Seo pageMeta={pageMeta}
                isBlogPost={false} />
            {
                skillsKeys.map(
                    (item, index) => 
                        <SkillItem skillTitle={item} item={skills[item]} key={`skill-${index}`} />
                )
            }
        </SkillsEl>
    )
}

export default Skills;