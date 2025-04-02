import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

//
export const Footer = () => {
	return (
		<StyledFooter>
			<FlexWrapper direction="column" alignItems="center">
				<Name>Svetlana</Name>
				<SocialIconsList>
					<SocialIconItem>
						<SocialIconLink>
							<Icon
								height="21px"
								width="21px"
								viewbox="0 0 21px 21px"
								iconId={"instagramSVG"}
							/>
						</SocialIconLink>
					</SocialIconItem>

					<SocialIconItem>
						<SocialIconLink>
							<Icon
								height="21px"
								width="21px"
								viewbox="0 0 21px 21px"
								iconId={"telegramSVG"}
							/>
						</SocialIconLink>
					</SocialIconItem>

					<SocialIconItem>
						<SocialIconLink>
							<Icon
								height="21px"
								width="21px"
								viewbox="0 0 21px 21px"
								iconId={"vkSVG"}
							/>
						</SocialIconLink>
					</SocialIconItem>

					<SocialIconItem>
						<SocialIconLink>
							<Icon
								height="21px"
								width="21px"
								viewbox="0 0 21px 21px"
								iconId={"linkedInSVG"}
							/>
						</SocialIconLink>
					</SocialIconItem>
				</SocialIconsList>
				<Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
			</FlexWrapper>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	background-color: ${theme.colors.primaryBg};
	padding: 40px 0px;
	min-height: 20vh;
`;
const Name = styled.span`
	font-family: "Josefin Sans", sans-serif;
	font-weight: 700;
	font-size: 22px;
	letter-spacing: 0.14em;
`;
const SocialIconItem = styled.li``;

const SocialIconsList = styled.ul`
	display: flex;
	margin: 30px 0px;
	gap: 20px;
`;

const SocialIconLink = styled.a`
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	width: 35px;
	height: 35px;

	display: flex;
	justify-content: center;
	align-items: center;

	color: ${theme.colors.mainThemeColor};

	&:hover {
		color: ${theme.colors.primaryBg};
		transform: translateY(-4px);
	}
`;
const Copyright = styled.small`
	font-weight: 400;
	font-size: 12px;
	text-align: center;
	opacity: 0.5; // or 	color: rgba(255, 255, 255, 0.5);
`;
