describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('should have welcome screen', async () => {
    await expect(element(by.id('HomeScreen'))).toBeVisible();
    await waitFor(element(by.id('NowShowing'))).toBeVisible();
  });
  it('should have detail screen', async () => {
    await expect(element(by.id('NowShowing')).atIndex(0)).toBeVisible;
    await element(by.id('NowShowing')).atIndex(0).tap();
    await expect(element(by.id('detailScreen'))).toBeVisible();
  });
  it('back to Home screen', async () => {
    await element(by.id('BackBtn')).tap();
    await expect(element(by.id('HomeScreen'))).toBeVisible();
    
  });
  it('go to search screen', async () => {
    await waitFor(element(by.id('SearchBtn'))).toBeVisible();
    await element(by.id('SearchBtn')).tap();
    
    await expect(element(by.id('searchScreen'))).toBeVisible();
  });
   it('searching movies', async () => {
     await element(by.id('searchBox')).tap();
     await element(by.id('searchBox')).clearText();
     await element(by.id('searchBox')).typeText('hello\n');
   });
});
