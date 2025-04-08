import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { media } from "../../../styles/Media";

//----
// type MenuPropsType = {
// 	menuItem: Array<string>;
// };

// export const Menu = () => {
// 	props: menuItem: Array<string>;
// };

/* --menu-block */
//---StyledMenu - before refactoring with PROPS
// <StyledMenu>

// 	<ul>
// 		<li>
// 			<a href="">Home</a>
// 		</li>
// 		<li>
// 			<a href="">Skills</a>
// 		</li>
// 		<li>
// 			<a href="">Works</a>
// 		</li>
// 		<li>
// 			<a href="">Testimony</a>
// 		</li>
// 		<li>
// 			<a href="">Contact</a>
// 		</li>
// 	</ul>
// </StyledMenu>

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledHeaderMenu>
			<ul>
				{props.menuItems.map((item, index) => {
					return (
						<HeaderMenuListItem key={index}>
							<HeaderMenuLink href="">
								{item}
								<Mask>
									<span>{item}</span>
								</Mask>
								<Mask>
									<span>{item}</span>
								</Mask>
							</HeaderMenuLink>
						</HeaderMenuListItem>
					);
				})}
			</ul>
		</StyledHeaderMenu>
	);
};

const StyledHeaderMenu = styled.nav`
	ul {
		display: flex;
		gap: 30px;
	}
	@media ${media.tablet} {
		display: none;
	}
`;

const HeaderMenuLink = styled.a`
	font-family: "Josefin Sans", sans-serif;
	font-weight: 400;
	font-size: 30px;
	text-align: center;
	color: transparent;
`;

const Mask = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	display: inline-block;
	height: 50%;
	overflow-y: hidden;
	color: ${theme.colors.mainThemeColor};
	& + & {
		top: 50%;
		span {
			display: inline-block;
			transform: translateY(-50%);
		}
	}
`;

const HeaderMenuListItem = styled.li`
	position: relative;

	&::before {
		content: "";
		display: inline-block;
		height: 3px;
		background-color: ${theme.colors.mainThemeColor};
		position: absolute;
		top: 50%;
		left: -10px;
		right: -10px;
		z-index: 1;
		transform: scale(0);
	}
	&:hover {
		${Mask} {
			transform: skewX(12deg) translateX(5px);
			color: ${theme.colors.textColor};
			& + ${Mask} {
				transform: skewX(12deg) translateX(-5px);
			}
		}

		&::before {
			transform: scale(1);
		}
	}
`;
