// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportLogin = require('../../../app/controller/login');
import ExportLogout = require('../../../app/controller/logout');
import ExportRegister = require('../../../app/controller/register');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    login: ExportLogin;
    logout: ExportLogout;
    register: ExportRegister;
  }
}
