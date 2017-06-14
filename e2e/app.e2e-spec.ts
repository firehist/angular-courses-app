import { AngularCoursesAppPage } from './app.po';

describe('angular-courses-app App', () => {
  let page: AngularCoursesAppPage;

  beforeEach(() => {
    page = new AngularCoursesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
