// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddress = require('../../../app/controller/address');
import ExportCart = require('../../../app/controller/cart');
import ExportCityAlliance = require('../../../app/controller/city_alliance');
import ExportFruits = require('../../../app/controller/fruits');
import ExportHome = require('../../../app/controller/home');
import ExportLogin = require('../../../app/controller/login');
import ExportLogout = require('../../../app/controller/logout');
import ExportOrder = require('../../../app/controller/order');
import ExportRegister = require('../../../app/controller/register');
import ExportUpload = require('../../../app/controller/upload');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    address: ExportAddress;
    cart: ExportCart;
    cityAlliance: ExportCityAlliance;
    fruits: ExportFruits;
    home: ExportHome;
    login: ExportLogin;
    logout: ExportLogout;
    order: ExportOrder;
    register: ExportRegister;
    upload: ExportUpload;
    user: ExportUser;
  }
}
