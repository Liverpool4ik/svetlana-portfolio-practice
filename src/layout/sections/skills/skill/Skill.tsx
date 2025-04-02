// import React from "react";

import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
	iconId: string;
	title: string;
	text: string;
};
export const Skill = (props: SkillPropsType) => {
	return (
		<StyledSkill>
			<FlexWrapper direction={"column"} alignItems={"center"}>
				<IconWrapper>
					<Icon iconId={props.iconId} />
				</IconWrapper>
				<SkillTitle>{props.title}</SkillTitle>
				<Text>{props.text}</Text>
			</FlexWrapper>
		</StyledSkill>
	);
};

const StyledSkill = styled.div`
	width: 380px;
	padding: 62px 20px 40px;
`;
const SkillTitle = styled.h3`
	margin: 70px 0 15px;
	text-transform: uppercase;
`;

const Text = styled.p`
	text-align: center;
`;

export const IconWrapper = styled.div`
	position: relative;
	z-index: 0;

	&::before {
		content: "";
		display: inline-block;
		width: 80px;
		height: 80px;
		background: rgba(255, 255, 255, 0.1);
		z-index: -1;

		position: absolute;
		transform: rotate(45deg) translate(-50%, -50%);
		left: 50%;
		top: 50%;
		transform-origin: top left;
	}
`;
