// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddress = require('../../../app/model/address');
import ExportAdmin = require('../../../app/model/admin');
import ExportAdminRole = require('../../../app/model/adminRole');
import ExportArea = require('../../../app/model/area');
import ExportCart = require('../../../app/model/cart');
import ExportCity = require('../../../app/model/city');
import ExportComment = require('../../../app/model/comment');
import ExportFruit = require('../../../app/model/fruit');
import ExportFruitOrder = require('../../../app/model/fruit_order');
import ExportFunc = require('../../../app/model/func');
import ExportOrder = require('../../../app/model/order');
import ExportOrderShipping = require('../../../app/model/order_shipping');
import ExportProvince = require('../../../app/model/province');
import ExportRole = require('../../../app/model/role');
import ExportRoleFunc = require('../../../app/model/role_func');
import ExportUser = require('../../../app/model/user');

declare module 'sequelize' {
  interface Sequelize {
    Address: ReturnType<typeof ExportAddress>;
    Admin: ReturnType<typeof ExportAdmin>;
    AdminRole: ReturnType<typeof ExportAdminRole>;
    Area: ReturnType<typeof ExportArea>;
    Cart: ReturnType<typeof ExportCart>;
    City: ReturnType<typeof ExportCity>;
    Comment: ReturnType<typeof ExportComment>;
    Fruit: ReturnType<typeof ExportFruit>;
    FruitOrder: ReturnType<typeof ExportFruitOrder>;
    Func: ReturnType<typeof ExportFunc>;
    Order: ReturnType<typeof ExportOrder>;
    OrderShipping: ReturnType<typeof ExportOrderShipping>;
    Province: ReturnType<typeof ExportProvince>;
    Role: ReturnType<typeof ExportRole>;
    RoleFunc: ReturnType<typeof ExportRoleFunc>;
    User: ReturnType<typeof ExportUser>;
  }
}
