import { AngularPortalPage } from './app.po';

describe('angular-portal App', function() {
  let page: AngularPortalPage;

  beforeEach(() => {
    page = new AngularPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
