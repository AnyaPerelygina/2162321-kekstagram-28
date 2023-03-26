const NAMES = ['Knop4ek', 'pollyhey', 'dimistar', 'kolibryvamp', 'mamacholy', 'Maria'];
const DESCRIPTIONS = [
  'Мой лучший шедевр!',
  'Обожаю эту улыбку..',
  'Принимаю поздравления!',
  'Навстерчу приключениям!!!',
  'Спокойствие и умиротворение.. А вы что чувствуете, глядя на это фото?',
  'Какой кадр?',
  'Лучшая пицца в городе!',
  'Знакомьтесь, этой Джин Тоник и нам очень хорошо вместе!',
  'Еще один уровень пройден!',
  'Счастливая',
  'Гулять по крышам в дождь? Почему нет.',
  'Довольная, счастливая, ловлю радугу',
  'На сегодняшний день самые яркие эмоции вызывает у меня именно этот город',
  'Отпуск заканчивается, а фото только подъезжают',
  'Вчера было 3 года, как мой партнер смеется над моими не смешными шутками. Люблю.',
  '4 дня холода',
  'Внимание! Не моргать!',
  'Снова жранькаю',
  'Настроение - весна',
  'Иногда чувствую себя актером в сериале про свою жизнь',
  'Красиво',
  'Всё',
  'Шуба, голуби, тоска, я поглажу два носка',
  'Люби меня по-французски',
  'Это еще не все..'
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

let commentId = 1;
let photoId = 1;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: Array.from(new Set(Array.from({length: getRandomInteger(1,2)},() => getRandomArrayElement(MESSAGES)))).join(' '),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = () => {
  const id = photoId++;

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15,200),
    comments: Array.from({length:getRandomInteger(1,25)},createComment)
  };
};

const createPhotos = () => Array.from({length:25}, createPhoto);
createPhotos();
