import { AngularMateiralPage } from './app.po';

describe('angular-mateiral App', () => {
  let page: AngularMateiralPage;

  beforeEach(() => {
    page = new AngularMateiralPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
