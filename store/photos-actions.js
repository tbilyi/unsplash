export const LOAD_PHOTOS = 'LOAD_PHOTOS';

export const loadPhotos = (place) => {
  return async dispatch => {
    try {
      fetch(`https://api.unsplash.com/search/photos/?query=${place}&client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        dispatch({ type: LOAD_PHOTOS, photos: myJson.results });
        console.log(myJson.results[0].urls.full);
      });
    } catch (err) {
      throw err;
    }
  };
};
