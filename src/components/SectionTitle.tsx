// import React from "react";

import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/AdaptiveFontMixin";
import { media } from "../styles/Media";

export const SectionTitle = styled.h2`
	${font({
		family: '"Josefin Sans", sans-serif',
		FontMax: 36,
		FontMin: 30,
		weight: 600,
	})}
	text-align: center;
	letter-spacing: 0.5px;
	margin-bottom: 50px;
	/* font-family: "Josefin Sans", sans-serif;
   
	font-weight: 600;
	font-size: 36px; */

	position: relative;

	@media ${media.mobile} {
		margin-bottom: 50px;
	}

	&::before {
		content: "";
		display: inline-block;
		width: 55px;
		height: 1px;
		background-color: ${theme.colors.mainThemeColor};

		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: -30px;

		@media ${media.mobile} {
			bottom: -24px;
		}
	}
`;
