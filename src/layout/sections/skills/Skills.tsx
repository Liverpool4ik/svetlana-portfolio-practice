// import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Skills = () => {
	return (
		<SkillsSection>
			<Container>
				<SectionTitle>My Skills</SectionTitle>

				<FlexWrapper wrap={"wrap"} justifyCont="space-between">
					<Skill
						iconId={"codeSvg"}
						title={"HTML5"}
						text="HTML-5 ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi!"
					/>

					<Skill
						iconId={"cssSVG"}
						title={"CSS3"}
						text="CSS-33 ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi!"
					/>

					<Skill
						iconId={"reactSVG"}
						title={"React"}
						text="React is ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi!"
					/>

					<Skill
						iconId={"typeScriptSVG"}
						title={"TypeScript"}
						text="TypeScript is ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi!"
					/>

					<Skill
						iconId={"styledComponentsSVG"}
						title={"Styled Components"}
						text="Styled Components are ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi!"
					/>

					<Skill
						iconId={"figmaSVG"}
						title={"Figma"}
						text="Figma is ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi!"
					/>
				</FlexWrapper>
			</Container>
		</SkillsSection>
	);
};

const SkillsSection = styled.section``;
