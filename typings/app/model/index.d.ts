// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCart = require('../../../app/model/cart');
import ExportComment = require('../../../app/model/comment');
import ExportFruit = require('../../../app/model/fruit');
import ExportFruitOrder = require('../../../app/model/fruit_order');
import ExportFunc = require('../../../app/model/func');
import ExportOrder = require('../../../app/model/order');
import ExportOrderShipping = require('../../../app/model/order_shipping');
import ExportRole = require('../../../app/model/role');
import ExportRoleFunc = require('../../../app/model/role_func');
import ExportUser = require('../../../app/model/user');
import ExportUserAdress = require('../../../app/model/user_adress');
import ExportUserRole = require('../../../app/model/user_role');

declare module 'sequelize' {
  interface Sequelize {
    Cart: ReturnType<typeof ExportCart>;
    Comment: ReturnType<typeof ExportComment>;
    Fruit: ReturnType<typeof ExportFruit>;
    FruitOrder: ReturnType<typeof ExportFruitOrder>;
    Func: ReturnType<typeof ExportFunc>;
    Order: ReturnType<typeof ExportOrder>;
    OrderShipping: ReturnType<typeof ExportOrderShipping>;
    Role: ReturnType<typeof ExportRole>;
    RoleFunc: ReturnType<typeof ExportRoleFunc>;
    User: ReturnType<typeof ExportUser>;
    UserAdress: ReturnType<typeof ExportUserAdress>;
    UserRole: ReturnType<typeof ExportUserRole>;
  }
}
