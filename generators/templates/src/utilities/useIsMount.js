import { useRef, useEffect } from 'react';

const isMountRef = () => {
	const isMountRef = useRef(true);
	useEffect(() => {
		isMountRef.current = false;
	}, []);
	return isMountRef.current;
};

export default isMountRef;
