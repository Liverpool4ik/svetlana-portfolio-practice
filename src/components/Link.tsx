import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a`
	font-weight: 400;
	font-size: 14px;
	text-transform: uppercase;
	padding: 10px;
	position: relative;
	z-index: 0;

	&:hover {
		&::before {
			height: 5px;
		}
	}

	&::before {
		content: "";
		display: inline-block;
		background-color: ${theme.colors.mainThemeColor};
		z-index: -1;

		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
	}
`;
