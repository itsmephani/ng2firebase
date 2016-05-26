import { Ng2firebasePage } from './app.po';

describe('ng2firebase App', function() {
  let page: Ng2firebasePage;

  beforeEach(() => {
    page = new Ng2firebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2firebase works!');
  });
});
