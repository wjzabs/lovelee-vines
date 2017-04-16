import { LoveleeVinesPage } from './app.po';

describe('lovelee-vines App', () => {
  let page: LoveleeVinesPage;

  beforeEach(() => {
    page = new LoveleeVinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
