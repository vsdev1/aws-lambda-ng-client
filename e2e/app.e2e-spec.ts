import { AwsLambdaNgClientPage } from './app.po';

describe('aws-lambda-ng-client App', () => {
  let page: AwsLambdaNgClientPage;

  beforeEach(() => {
    page = new AwsLambdaNgClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
