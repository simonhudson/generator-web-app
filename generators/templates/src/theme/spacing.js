import { rem } from 'polished';
const BASE_SIZE = 14;

const spacing = {
	default: BASE_SIZE,
	xsm: BASE_SIZE / 4,
	sm: BASE_SIZE / 2,
	md: BASE_SIZE * 2,
	lg: BASE_SIZE * 4,
	xlg: BASE_SIZE * 6,
	xxlg: BASE_SIZE * 8,
	xxxlg: BASE_SIZE * 12,
};

let spacingObject = {};

for (let key in spacing) spacingObject[key] = rem(spacing[key]);

module.exports = spacingObject;
