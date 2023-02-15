import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Routes from '~/constants/routes';
import Theme from '~/theme';
import { GlobalStyles } from '~/theme/global.styles';
// import Status from '~/components/status';

// Log accessibility issues to console in non-production environments
if (process.env.APP_ENV !== 'production' && typeof window !== 'undefined') {
	const ReactDOM = require('react-dom');
	const axe = require('react-axe');
	axe(React, ReactDOM, 1000);
}

const getPageTitle = (router) => {
	let pageTitle = process.env.CLUB_NAME;
	const route = Routes.find((route) => route.path === `/${router.route.split('/')[1]}`);
	if (route) return `${pageTitle} | ${route.label}`;
	return pageTitle;
};

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	pageProps.router = router;

	const currentPage = Routes.find((route) => route.path === router.route);
	if (currentPage) {
		pageProps.currentPage = {
			label: currentPage.label,
			query: router.query,
			route: router.route,
		};
	}

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>{getPageTitle(router)}</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<GlobalStyles />
				<main>
					{/* {!!pageProps.router.query.status && <Status value={pageProps.router.query.status} />} */}
					<Component {...pageProps} />
				</main>
			</ThemeProvider>
		</>
	);
};

export default App;
