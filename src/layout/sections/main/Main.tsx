// import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/mainPage-photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { media } from "../../../styles/Media";
import { font } from "../../../styles/AdaptiveFontMixin";

export const Main = () => {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper
					alignItems={"center"}
					justifyCont={"space-around"}
					wrap={"wrap"}
				>
					<TextBlock>
						<SmallText>Hi There</SmallText>
						<Name>
							I am <span>Svetlana Dyablo</span>
						</Name>
						<MainTitle>A Web Developer.</MainTitle>
					</TextBlock>
					<PhotoWrapper>
						<Photo src={photo} alt="my photo" />
					</PhotoWrapper>
				</FlexWrapper>
			</Container>
		</StyledMain>
	);
};

const StyledMain = styled.section`
	min-height: 100vh;
	display: flex;
`;

const TextBlock = styled.div`
	color: ${theme.colors.textColor};
`;

const SmallText = styled.p`
	font-weight: 400;
	font-size: 14px;
`;

const Name = styled.h2`
	${font({
		family: "'Josefin Sans', sans-serif",
		weight: 700,
		FontMax: 50,
		FontMin: 36,
	})}

	/* font-family: "Josefin Sans", sans-serif;================??????? ***********
	font-weight: 700;
	font-size: 50px; */
	letter-spacing: 0.05em;
	margin: 20px 0px;
	span {
		position: relative;
		z-index: 0;
		white-space: nowrap;
		&::before {
			content: "";
			display: inline-block;
			height: 20px;
			width: 100%;
			background-color: ${theme.colors.mainThemeColor};

			position: absolute;
			bottom: 0;
			z-index: -1;
		}
	}

	@media ${media.mobile} {
		margin: 15px 0 22px;
	}
`;

const MainTitle = styled.h1`
	${font({
		FontMax: 27,
		FontMin: 20,
	})}/* font-weight: 400;
	font-size: 27px; ===================================??????*********** */
`;

const PhotoWrapper = styled.div`
	position: relative;
	z-index: 0;
	margin-top: 65px;

	&::before {
		content: "";
		position: absolute;
		width: 360px;
		height: 470px;
		border: 5px solid ${theme.colors.mainThemeColor};
		top: -20px;
		left: 34px;
		z-index: -1;

		@media ${media.mobile} {
			width: 314px;
			height: 414px;
			top: -15px;
			left: 20 px;
		}
	}
`;

const Photo = styled.img`
	width: 350px;
	height: 430px;
	object-fit: cover;
	margin-right: 20px; //for mobile view --- colored photo frame ==>> (before element)

	@media ${media.mobile} {
		width: 310px;
		height: 380px;
	}
`;

// const FlexContainer = styled.div``;
