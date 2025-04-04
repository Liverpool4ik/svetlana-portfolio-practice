// import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const headerMenu = ["Home", "Skills", "Works", "Testimony", "Contacts"];

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<FlexWrapper justifyCont="space-between" alignItems="center">
					<Logo />
					<HeaderMenu menuItems={headerMenu} />
					<MobileMenu menuItems={headerMenu} />
				</FlexWrapper>
			</Container>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	background-color: rgba(31, 31, 32, 0.9);
	padding: 20px 0;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
`;
