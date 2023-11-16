import axios from 'axios';
import Movies from '../movies';

jest.mock('axios');

test('should fetch movies', () => {
  const movies = [{name: 'XXX'}];
  const resp = {data: movies};
  axios.get.mockResolvedValue(resp);

  return Movies.all().then(data => expect(data).toEqual(movies));
});
