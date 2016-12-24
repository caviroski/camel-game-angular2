import { CamelGameAngular2Page } from './app.po';

describe('camel-game-angular2 App', function() {
  let page: CamelGameAngular2Page;

  beforeEach(() => {
    page = new CamelGameAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
