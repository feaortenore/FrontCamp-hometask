import { FilterNewsPipe } from './filter-news.pipe';
import { mockNews } from '../mocks/news';





describe('FilterNewsPipe', () => {
  let pipe: FilterNewsPipe;
  beforeEach(() => {
    pipe = new FilterNewsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {

    it('providing no news returns fallback', () => {
      expect(pipe.transform(undefined, { filter: 'filter' })).toBe(undefined);
    });

    it('providing no args returns fallback', () => {
      expect(pipe.transform(mockNews)).toBe(mockNews);
    });

    it('providing no filter in args returns fallback', () => {
      expect(pipe.transform(mockNews, { filter: '' })).toBe(mockNews);
    });

    it('providing news list returns news list filtered by news title', () => {
      expect(pipe.transform(mockNews, { filter: 'filter' }).length).toEqual(2);
    });
  });

});
