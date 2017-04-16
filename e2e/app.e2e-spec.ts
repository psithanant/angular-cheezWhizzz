import { AngularCheezWhizzzPage } from './app.po';

describe('angular-cheez-whizzz App', () => {
  let page: AngularCheezWhizzzPage;

  beforeEach(() => {
    page = new AngularCheezWhizzzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
