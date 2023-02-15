import styled from 'styled-components';
import { rem } from 'polished';

const H1 = styled.h1`
	color: ${({ theme }) => theme.palette.primary.bodyText};
	font-family: bbg;
	font-size: ${rem(36)};
	font-weight: 700;
	margin: 0 0 ${({ theme }) => theme.spacing.md};
	text-transform: uppercase;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			font-size: ${rem(42)};
			`
		)};
`;

const H2 = styled.h2`
	color: ${({ theme }) => theme.palette.primary.bodyText};
	font-family: ${({ theme }) => theme.font.serif};
	font-size: ${rem(24)};
	font-weight: 700;
	line-height: ${rem(16)};
	margin: 0 0 ${({ theme }) => theme.spacing.default};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			line-height: ${rem(36)};
			`
		)};
`;

const H3 = styled.h3`
	color: ${({ theme }) => theme.palette.primary.bodyText};
	font-family: ${({ theme }) => theme.font.sansSerif};
	font-size: ${rem(18)};
	font-weight: 700;
	line-height: ${rem(30)};
	margin: 0 0 ${({ theme }) => theme.spacing.sm};

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			font-size: ${rem(18)};
			line-height: ${rem(30)};
			`
		)};
`;

const Paragraph = styled.p`
	color: ${({ theme }) => theme.palette.primary.bodyText};
	font-family: ${({ theme }) => theme.font.sansSerif};
	font-size: ${({ theme }) => rem(theme.font.size)};
	font-weight: ${({ theme }) => theme.font.weight};
	line-height: ${({ theme }) => theme.font.lineHeight};
	margin: 0 0 ${rem(24)};
`;

const Strong = styled.strong`
	color: inherit;
	font-weight: 700;
`;

const Small = styled.small`
	font-size: ${({ theme }) => rem(theme.font.size * 0.85)};
`;

const ListItem = styled.li`
	color: ${({ theme }) => theme.palette.primary.bodyText};
`;

export { H1, H2, H3, Paragraph, Strong, Small, ListItem };
