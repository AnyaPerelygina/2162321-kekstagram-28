import {openBigPicture} from './big-picture.js';
import {getData} from './api.js';
import {onGetFail} from './get-messages.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';

const thumbnailTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = (data) => {
  const {comments, description, likes, url} = data;

  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  thumbnail.addEventListener('click', (event) => {
    event.preventDefault();
    openBigPicture(data);
  });

  return thumbnail;
};

const renderThumbnails = (data) => {
  const fragment = document.createDocumentFragment();
  data.forEach((item) => {
    const thumbnail = createThumbnail(item);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};

const onGetSuccess = (data) => renderThumbnails(data);

const getPicturesData = () => getData(GET_URL, onGetSuccess, onGetFail);

export {getPicturesData, renderThumbnails};
