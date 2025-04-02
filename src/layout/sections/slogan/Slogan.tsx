import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Contacts } from "../contacts/Contacts";
import { Container } from "../../../components/Container";

export const Slogan = () => {
	return (
		<StyledSlogan>
			<Container>
				<FlexWrapper direction="column" alignItems="center">
					<SectionTitle>I Am Available For Freelance</SectionTitle>
					<Button>Hire me</Button>
				</FlexWrapper>
			</Container>
		</StyledSlogan>
	);
};

const StyledSlogan = styled.section`
	min-height: 30vh;
	background-color: #07d9d9;
`;
