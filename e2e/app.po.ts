export class Ng2firebasePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2firebase-app h1')).getText();
  }
}
