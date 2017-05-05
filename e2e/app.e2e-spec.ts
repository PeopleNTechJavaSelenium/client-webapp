import { ClientWebappPage } from './app.po';

describe('client-webapp App', () => {
  let page: ClientWebappPage;

  beforeEach(() => {
    page = new ClientWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
