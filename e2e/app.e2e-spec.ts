import { HerroappPage } from './app.po';

describe('herroapp App', () => {
  let page: HerroappPage;

  beforeEach(() => {
    page = new HerroappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
