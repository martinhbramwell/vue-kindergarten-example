import BasePerimeter from './BasePerimeter';

export default new BasePerimeter({
  purpose: 'bye',
  govern: {
    'can route': () => true,
    // 'can viewParagraph': () => (this.isAdmin()),
    'can viewParagraph': function canViewParagraph() {
      return this.isAdmin();
    },
  },
});
