import { theme } from "./Theme";

type AdaptiveFontPropsType = {
	family?: string;
	weight?: number;
	color?: string;
	lineHeight?: number;
	letterSpacing?: number;
	FontMin?: number;
	FontMax?: number;
};

export const font = ({
	family,
	weight,
	lineHeight,
	color,
	letterSpacing,
	FontMin,
	FontMax,
}: AdaptiveFontPropsType) => `
	font-family: ${family || "Poppins"};
	font-weight: ${weight || 400}; 
   color: ${color || theme.colors.textColor};
   line-height: ${lineHeight || 1.2};
	letter-spacing: ${letterSpacing || 0.05}; 
   font-size: calc( (100vw - 360px)/(1440 - 360) * (${FontMax} - ${FontMin}) + ${FontMin}px);
`;
