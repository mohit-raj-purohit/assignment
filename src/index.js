import images from './images';
import style from "./styles/main.scss";
import helpers from "./handlebarHelpers";

import cars from './templates/cars.hbs';
import carsObj from './data/cars.json';
import bindEvents from './events';
import $ from 'jquery';

$('#app').html(cars(carsObj.cars));
bindEvents();
