import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { Stl } from "./Header_Styles";

const headerMenu = ["Home", "Skills", "Works", "Testimony", "Contacts"];

export const Header: React.FC = () => {
	return (
		<Stl.Header>
			<Container>
				<FlexWrapper justifyCont="space-between" alignItems="center">
					<Logo />
					<HeaderMenu menuItems={headerMenu} />
					<MobileMenu menuItems={headerMenu} />
				</FlexWrapper>
			</Container>
		</Stl.Header>
	);
};
