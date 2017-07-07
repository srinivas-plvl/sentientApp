import { SentientAppPage } from './app.po';

describe('sentient-app App', () => {
  let page: SentientAppPage;

  beforeEach(() => {
    page = new SentientAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
