import { TabMenu } from "./project/tabMenu/TabMenu";
import { SectionTitle } from "../../../components/SectionTitle";
// import { Project } from "../../../components/Project";
import styled from "styled-components";
import { Project } from "./project/Project";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imgProj1 from "../../../assets/images/projects/my-works-1.webp";
import imgProj2 from "../../../assets/images/projects/my-works-2.webp";
import { Container } from "../../../components/Container";

const projectTabs = ["All", "Landing Page", "React", "SPA"];

export const Projects = () => {
	return (
		<StyledProjects>
			<Container>
				<SectionTitle>My Works</SectionTitle>
				<TabMenu menuItems={projectTabs} />
				<FlexWrapper justifyCont={"space-between"} alignItems="flex-start">
					<Project
						title={"Social Network"}
						src={imgProj1}
						text={
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
						}
					/>
					<Project
						title={"Timer"}
						src={imgProj2}
						text={
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"
						}
					/>
				</FlexWrapper>
			</Container>
		</StyledProjects>
	);
};

const StyledProjects = styled.section`
	min-height: 100vh;
	background-color: #05c0f9;
`;
