// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminFruit = require('../../../app/controller/admin/fruit');
import ExportAdminLogin = require('../../../app/controller/admin/login');
import ExportAdminUser = require('../../../app/controller/admin/user');
import ExportFontAddress = require('../../../app/controller/font/address');
import ExportFontCart = require('../../../app/controller/font/cart');
import ExportFontCityAlliance = require('../../../app/controller/font/city_alliance');
import ExportFontFruits = require('../../../app/controller/font/fruits');
import ExportFontHome = require('../../../app/controller/font/home');
import ExportFontLogin = require('../../../app/controller/font/login');
import ExportFontLogout = require('../../../app/controller/font/logout');
import ExportFontOrder = require('../../../app/controller/font/order');
import ExportFontRegister = require('../../../app/controller/font/register');
import ExportFontUpload = require('../../../app/controller/font/upload');
import ExportFontUser = require('../../../app/controller/font/user');

declare module 'egg' {
  interface IController {
    admin: {
      fruit: ExportAdminFruit;
      login: ExportAdminLogin;
      user: ExportAdminUser;
    }
    font: {
      address: ExportFontAddress;
      cart: ExportFontCart;
      cityAlliance: ExportFontCityAlliance;
      fruits: ExportFontFruits;
      home: ExportFontHome;
      login: ExportFontLogin;
      logout: ExportFontLogout;
      order: ExportFontOrder;
      register: ExportFontRegister;
      upload: ExportFontUpload;
      user: ExportFontUser;
    }
  }
}
