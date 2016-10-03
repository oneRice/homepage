import { HomepagePage } from './app.po';

describe('homepage App', function() {
  let page: HomepagePage;

  beforeEach(() => {
    page = new HomepagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
