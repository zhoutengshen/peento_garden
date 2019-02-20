// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogedReqUrl = require('../../../app/middleware/loged_req_url');
import ExportRouteControll = require('../../../app/middleware/route_controll');

declare module 'egg' {
  interface IMiddleware {
    logedReqUrl: typeof ExportLogedReqUrl;
    routeControll: typeof ExportRouteControll;
  }
}
