import { Kakao1Page } from './app.po';

describe('kakao1 App', function() {
  let page: Kakao1Page;

  beforeEach(() => {
    page = new Kakao1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
