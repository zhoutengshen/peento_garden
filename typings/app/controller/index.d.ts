// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCart = require('../../../app/controller/cart');
import ExportFruits = require('../../../app/controller/fruits');
import ExportHome = require('../../../app/controller/home');
import ExportLogin = require('../../../app/controller/login');
import ExportLogout = require('../../../app/controller/logout');
import ExportRegister = require('../../../app/controller/register');
import ExportUpload = require('../../../app/controller/upload');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    cart: ExportCart;
    fruits: ExportFruits;
    home: ExportHome;
    login: ExportLogin;
    logout: ExportLogout;
    register: ExportRegister;
    upload: ExportUpload;
    user: ExportUser;
  }
}
