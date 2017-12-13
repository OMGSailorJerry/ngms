import { MsAppPage } from './app.po';

describe('ms-app App', () => {
  let page: MsAppPage;

  beforeEach(() => {
    page = new MsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
