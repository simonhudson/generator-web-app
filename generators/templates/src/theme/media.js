import breakpoints from './breakpoints';

module.exports = (media, styles) => {
    const breakpoint = breakpoints[media];
    if (!breakpoint) return null;
    return `@media (min-width: ${breakpoints[media]}px) { ${styles} }`;
};
