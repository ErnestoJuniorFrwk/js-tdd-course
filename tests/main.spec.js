import { expect } from 'chai';
import { search } from '../src/main';
// searchAlbums, searchArtists, searchTracks, searchPlaylists
describe('Wrapper Spotify', () => {
  describe('smoke tests', () => {
    it('Should exist the search method', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(search).to.exist;
    });
  });
});
