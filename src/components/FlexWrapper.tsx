import styled from "styled-components";

type FlexWrapperPropsType = {
	direction?: string;
	justifyCont?: string;
	alignItems?: string;
	wrap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
	display: flex;
	flex-direction: ${(props) => props.direction || "row"};
	justify-content: ${(props) => props.justifyCont || "flex-start"};
	align-items: ${(props) => props.alignItems || "stretch"};
	flex-wrap: ${(props) => props.wrap || "no-wrap"};
	height: 100%;
`;
