import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useIsMount from '~/utilities/useIsMount';
import { getBrideAndGroom } from '~/utilities/guests';
import Loading from '~/components/loading';

const Home = () => {
	const isMount = useIsMount();
	const [isLoading, setIsLoading] = useState(true);
	const [bride, setBride] = useState(null);
	const [groom, setGroom] = useState(null);

	useEffect(() => {
		if (isMount) {
			(async () => {
				const response = await getBrideAndGroom();
				if (response.bride && response.groom) {
					setBride(response.bride);
					setGroom(response.groom);
				}
				setIsLoading(false);
			})();
		}
	}, []);

	if (isLoading) return <Loading />;
	return (
		<p>
			{bride.firstName} and {groom.firstName}
		</p>
	);
};

Home.propTypes = {
	// key: PropTypes.string.isRequired,
};

export default Home;
