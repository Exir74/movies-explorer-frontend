import logo from '../images/logo.svg';
import findButton from '../images/findButton.svg';
import smallTumbOn from '../images/smallTumbOn.svg';
import smallTumbOff from '../images/smallTumbOff.svg';
import saveIcons from '../images/saveIcon.svg';
import deleteIcon from '../images/deleteIconsvg.svg';
import burgerMenu from '../images/burgerMenu.png';
import closeIcon from '../images/closeIcon.png';

// удалить рыбов
import cardImage33Slova from '../images/card33Slova.jpeg';
import kinoalmanah from '../images/kinoalmanah.png';
import vPogone from '../images/vPogone.png';
import vzriv from '../images/vzriv.png';

const myGithub = 'https://github.com/Exir74/';
const howToLearn = 'https://github.com/Exir74/how-to-learn';
const russianTravel = 'https://github.com/Exir74/russian-travel';
const mesto = 'https://github.com/Exir74/react-mesto-auth';
const yandexPraktikum = 'https://practicum.yandex.ru/';

// удалить рыбов тоже
const testCardsArr = [
  {
    id: 1,
    image: cardImage33Slova,
    nameRU: '33 слова о дизайне',
    duration: 77,
    link: 'https://youtube.ru',
    isMy: false,

  },
  {
    id: 2,
    image: kinoalmanah,
    nameRU: 'Киноальманах «100 лет дизайна»',
    duration: 77,
    link: 'https://ya.ru',
    isMy: true,
  },
  {
    id: 3,
    image: vPogone,
    nameRU: 'В погоне за Бенкси»',
    duration: 77,
    link: 'https://vk.ru',
    isMy: false,
  },
  {
    id: 4,
    image: vzriv,
    nameRU: 'Баския: Взрыв реальности»',
    duration: 77,
    link: 'https://mail.ru',
    isMy: true,
  },

];
const textUser = {
  _id: '64d89b0fc715d84e59b004da',
  email: 'pochta@yandex.ru',
  name: 'Виталий',
};

const MOVIES_URL = 'https://api.nomoreparties.co';

export {
  logo,
  myGithub,
  howToLearn,
  russianTravel,
  mesto,
  yandexPraktikum,
  findButton,
  smallTumbOn,
  smallTumbOff,
  saveIcons,
  deleteIcon,
  testCardsArr,
  burgerMenu,
  closeIcon,
  textUser,
  MOVIES_URL,
};
