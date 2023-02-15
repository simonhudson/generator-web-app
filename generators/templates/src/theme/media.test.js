import media from './media';

describe('theme/media', () => {
    it('should return null when breakpoint does not exist', () => {
        expect(media('foo', 'color: red;')).toEqual(null);
    });

    it('should return expected media query', () => {
        expect(media('tablet-p', 'color: red;')).toEqual(
            `@media (min-width: 768px) { color: red; }`
        );
    });
});
