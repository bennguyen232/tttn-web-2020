import {AsyncStorage} from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';

import {AccountService} from './AccountService';
import {CuisineService} from '../Services/CuisineService';
import {TagService} from '../Services/TagService';
import {MealService} from '../Services/MealService';
import {RestaurantService} from './RestaurantService';
import {IngredientService} from './IngredientService';

import {AccountGateway} from '../Gateways/AccountGateway';
import {CuisineGateway} from '../Gateways/CuisineGateway';
import {TagGateway} from '../Gateways/TagGateway';
import {MealGateway} from '../Gateways/MealGateway';
import {RestaurantGateway} from '../Gateways/RestaurantGateway';
import {IngredientGateway} from '../Gateways/IngredientGateway';

const restConnector = axios.create({baseURL: Config.API_URL});

const accountGateway = new AccountGateway(restConnector, AsyncStorage);
const cuisineGateway = new CuisineGateway(restConnector, AsyncStorage);
const tagGateway = new TagGateway(restConnector, AsyncStorage);
const mealGateway = new MealGateway(restConnector, AsyncStorage);
const restaurantGateway = new RestaurantGateway(restConnector, AsyncStorage);
const ingredientGateway = new IngredientGateway(restConnector, AsyncStorage);

export const accountService = new AccountService(accountGateway);
export const cuisineService = new CuisineService(cuisineGateway);
export const tagService = new TagService(tagGateway);
export const mealService = new MealService(mealGateway);
export const restaurantService = new RestaurantService(restaurantGateway);
export const ingredientService = new IngredientService(ingredientGateway);
