describe('The Avannis home page', () => {
    it('should have the logo link and the menu heading', async () => {
        await browser.url('http://avannis.com');

        let banner = await $('.fusion-logo-link');
        await expect(banner).toHaveHref('https://us.avannis.com/');

        let menuHeadings = await $$('.menu-text');
        let thirdMenuHeading = menuHeadings[8];
        await expect(thirdMenuHeading).toHaveText('INSIGHTS')
		
    });
});
