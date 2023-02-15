import spacing from './spacing';

describe('theme/spacing', () => {
	it('should return expected values', () => {
		expect(spacing).toEqual({
			default: '0.875rem',
			xsm: '0.21875rem',
			sm: '0.4375rem',
			md: '1.75rem',
			lg: '3.5rem',
			xlg: '5.25rem',
			xxlg: '7rem',
			xxxlg: '10.5rem',
		});
	});
});
