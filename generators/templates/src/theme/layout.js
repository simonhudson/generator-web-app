import React from 'react';
import styled, { css } from 'styled-components';

const Wrap = styled.div`
	margin: 0 auto;
	width: 90%;

	&:first-of-type {
		height: 100%;
	}

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			width: 984px;
			`
		)};
`;

const Inner = styled.div`
	&:first-of-type {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-evenly;
	}

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			display: block;
			margin: 0 auto;
			width: 75%;
			`
		)};
`;

const StyledSection = styled.section`
	align-items: center;
	background: ${({ theme }) => theme.palette.primary.white};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: ${({ theme }) => theme.spacing.lg} 0;

	&:not(:last-of-type) {
		padding: ${({ theme }) => theme.spacing.lg} 0 0;
	}

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
			height: auto;
			`
		)};
`;

const Section = ({ children }) => {
	return (
		<StyledSection>
			<Wrap>
				<Inner>{children}</Inner>
			</Wrap>
		</StyledSection>
	);
};

const BoxShadow = `0 0 10px #ddd`;

export { Wrap, Section, BoxShadow };
