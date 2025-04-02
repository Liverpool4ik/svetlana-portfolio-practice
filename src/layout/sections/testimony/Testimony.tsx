import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../skills/skill/Skill";

export const Testimony = () => {
	return (
		<StyledTestimony>
			<SectionTitle>Testimony</SectionTitle>
			<FlexWrapper alignItems={"center"} direction={"column"}>
				<IconWrapper>
					<Icon iconId={"quotesSVG"} />
				</IconWrapper>
				<Slider />
			</FlexWrapper>
		</StyledTestimony>
	);
};

const StyledTestimony = styled.section`
	min-height: 50vh;
	background-color: #00ff04a0;
	text-align: center;

	${IconWrapper} {
		margin: 40px 0 70px;
	}
`;
