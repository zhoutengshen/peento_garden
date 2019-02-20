// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/service/home');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    home: ExportHome;
    user: ExportUser;
  }
}
