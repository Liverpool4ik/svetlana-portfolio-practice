import styled from "styled-components";
import { Link } from "../../../../components/Link";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type ProjectPropsType = {
	title: string;
	text: string;
	src: string;
};

export const Project = (props: ProjectPropsType) => {
	return (
		<StyledProject>
			<ImageWrapper>
				<Image src={props.src} alt="" />
				<Button>view project</Button>
			</ImageWrapper>
			<DescriptionBlock>
				<Title>{props.title}</Title>
				<Text>{props.text}</Text>
				<Link href={""}>demo</Link>
				<Link href={""}>code</Link>
			</DescriptionBlock>
		</StyledProject>
	);
};

const StyledProject = styled.div`
	max-width: 540px;
	width: 100%;
	background-color: ${theme.colors.primaryBg};
	${Link} {
		padding: 10px 0;
		& + ${Link} {
			margin-left: 20px;
		}
	}
`;

const ImageWrapper = styled.div`
	position: relative;

	&:hover {
		&::before {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.3);
			backdrop-filter: blur(8px);
		}

		${Button} {
			opacity: 1;
		}
	}

	${Button} {
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		&::before {
			width: 100%;
			height: 100%;
		}
	}
`;

const Image = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
`;

const DescriptionBlock = styled.div`
	padding: 25px 20px;
`;
const Title = styled.h3``;
const Text = styled.p`
	margin: 14px 0 10px;
`;
