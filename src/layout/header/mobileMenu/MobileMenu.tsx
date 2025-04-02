import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

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

export const MobileMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMobileMenu>
			<BurgerButton isOpen={true}>
				<span></span>
			</BurgerButton>

			<MobileMenuBurger isOpen={true}>
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
			</MobileMenuBurger>
		</StyledMobileMenu>
	);
};

const StyledMobileMenu = styled.nav`
	display: none;
	@media ${theme.media.tablet} {
		display: none; //block!!! - was BLOCK - I changed to --none--- when I was doing adaptive main section.... to REMIND - to change on --- display:block --- when main section adaptive will be done: ;
	}
`;
const MobileMenuBurger = styled.div<{ isOpen: boolean }>`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background: rgba(31, 31, 32, 0.9);
	z-index: 998;
	display: none;

	${(props) =>
		props.isOpen &&
		css<{ isOpen: boolean }>`
			display: flex;
			align-items: center;
			justify-content: center;
		`}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}
`;
const BurgerButton = styled.button<{ isOpen: boolean }>`
	position: fixed;
	width: 200px;
	height: 200px;
	top: 100px;
	right: -100px;
	z-index: 9999;

	span {
		display: block;
		width: 36px;
		height: 2px;
		background-color: ${theme.colors.textColor};

		position: absolute;
		top: 40px;
		bottom: 50px;

		${(props) =>
			props.isOpen &&
			css<{ isOpen: boolean }>`
				background-color: rgba(255, 255, 255, 0);
			`};

		&::before {
			content: "";
			display: block;
			width: 36px;
			height: 2px;
			position: absolute;
			background-color: ${theme.colors.textColor};
			transform: translateY(-10px);

			${(props) =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					transform: rotate(-45deg) translateY(0);
				`};
		}

		&::after {
			content: "";
			display: block;
			width: 24px;
			height: 2px;
			background-color: ${theme.colors.textColor};
			position: absolute;
			transform: translateY(10px);

			${(props) =>
				props.isOpen &&
				css<{ isOpen: boolean }>`
					width: 36px;
					transform: rotate(45deg) translateY(0);
				`};
		}
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
