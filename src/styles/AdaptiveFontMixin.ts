import { theme } from "./Theme";

type AdaptiveFontPropsType = {
	fontFamily?: string;
	fontWeight?: number;
	color?: string;
	lineHeight?: number;
	letterSpacing?: number;
	FontMin?: number;
	FontMax?: number;
};

export const font = ({
	fontFamily,
	fontWeight,
	lineHeight,
	color,
	letterSpacing,
	FontMin,
	FontMax,
}: AdaptiveFontPropsType) => `
	font-family: ${fontFamily || "Poppins"};
	font-weight: ${fontWeight || 400}; 
   color: ${color || theme.colors.textColor};
   line-height: ${lineHeight || 1.2};
	letter-spacing: ${letterSpacing || 0.05}; 
   font-size: calc( (100vw - 360px)/(1440 - 360) * (${FontMax} - ${FontMin}) + ${FontMin}px);
`;
