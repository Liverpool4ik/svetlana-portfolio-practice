import styled from "styled-components";
import { Link } from "../../../../../components/Link";

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

export const TabMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledTabMenu>
			<ul>
				{props.menuItems.map((item, index) => {
					return (
						<ListItem key={index}>
							<Link href="">{item}</Link>
						</ListItem>
					);
				})}
			</ul>
		</StyledTabMenu>
	);
};

const StyledTabMenu = styled.nav`
	margin-bottom: 40px;
	ul {
		display: flex;
		justify-content: center;
		gap: 20px;
	}
`;

const ListItem = styled.li`
	/* position: relative;
	z-index: 0; */ // moved styles - into LINK.tsx componnent (const Link ==>> styled.a)
`;
