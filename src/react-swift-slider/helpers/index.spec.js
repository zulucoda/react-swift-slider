const { getSlideId } = require('./index');
const { getLabelName } = require('./index');
describe('React Swift Slider - Helpers - Unit Test', () => {
  describe('getLabelName', () => {
    test('should get label when label is provided', () => {
      const result = getLabelName('some label name', 2);
      expect(result).toEqual('some label name');
    });
    test('should get default label when label is null', () => {
      const result = getLabelName(null, 2);
      expect(result).toEqual('Slide 2');
    });
    test('should get default label when label is undefined', () => {
      const result = getLabelName(undefined, 2);
      expect(result).toEqual('Slide 2');
    });
  });
  describe('getSlideId', () => {
    test('should return slideId', () => {
      const results = getSlideId('4');
      expect(results).toEqual('slide_4');
    });
  });
});
