const mapping = ['access-nav', 'site-header'];

module.exports = (key) =>
    mapping.includes(key) ? mapping.indexOf(key) + 1 : 0;
