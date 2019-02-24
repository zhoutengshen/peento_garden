/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 80013
Source Host           : localhost:3306
Source Database       : peento_garden

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2019-02-24 20:25:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for card
-- ----------------------------
DROP TABLE IF EXISTS `card`;
CREATE TABLE `card` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '购物车id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `fruit_id` int(10) NOT NULL COMMENT '水果的id',
  `num` int(10) NOT NULL COMMENT '库存',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态(0 失效，1有效）',
  `fruit_img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '水果图片的Url',
  `fruit_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '标题',
  `price` decimal(10,2) NOT NULL COMMENT '单价',
  `unit` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '计量单位',
  `discount` tinyint(2) NOT NULL DEFAULT '10' COMMENT '折扣',
  `created_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `tag` varchar(255) DEFAULT NULL,
  `del` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 没有删除 1 删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of card
-- ----------------------------
INSERT INTO `card` VALUES ('1', '1', '1', '5', '1', 'http://www.huaguoshan.com/Public/Images/29/11479_thumb.jpg', '山东黄元帅苹果', '7.00', '斤', '85', '2019-02-16 22:49:52', '2019-02-16 22:49:52', null, '0');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(10) NOT NULL COMMENT '评论id',
  `user_id` int(10) NOT NULL,
  `fruit_id` int(10) NOT NULL COMMENT '水果id',
  `start` tinyint(2) NOT NULL COMMENT '打分的星数（0-10）',
  `discrib` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '评论',
  `created_at` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `del` tinyint(1) DEFAULT '0' COMMENT '是否删除 （1 删除 0 没有删除）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '1', '1', '10', '物流好慢，味道还是不错', '2019-02-16 22:22:24', '2019-02-16 22:22:26', '0');

-- ----------------------------
-- Table structure for fruit
-- ----------------------------
DROP TABLE IF EXISTS `fruit`;
CREATE TABLE `fruit` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `fruit_img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '水果图片url',
  `fruit_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '水果标题',
  `price` decimal(10,2) NOT NULL COMMENT '单价',
  `unit` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '计量单位',
  `discount` tinyint(2) NOT NULL DEFAULT '10' COMMENT '折扣',
  `discrib` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '详细描述',
  `sell_point` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '卖点',
  `start_all` int(10) NOT NULL COMMENT '获取到的总星星数',
  `summary` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `num` int(10) NOT NULL COMMENT '库存',
  `status` tinyint(2) NOT NULL DEFAULT '1' COMMENT '商品状态(0 下架 1 可用）',
  `buyer_count` int(10) NOT NULL COMMENT '总购买人数',
  `origin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '产地',
  `tag` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `del` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除了 0 否 1 是',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of fruit
-- ----------------------------
INSERT INTO `fruit` VALUES ('1', 'http://www.huaguoshan.com/Public/Images/29/11479_thumb.jpg', '山东黄元帅苹果', '7.00', '斤', '85', '<div class=\"pro_introduce_img\">\r\n                    <p>配送范围：\r\n                        福建,广东,广西,北京,安徽,江苏,上海,浙江,河北,辽宁,山东,山西,天津,陕西,四川,云南,重庆,贵州,河南,湖北,湖南,江西                    </p>\r\n                    <img alt=\"\" src=\"/Upload/details/image/20180915/20180915160723_52415.jpg\"><img alt=\"\" src=\"/Upload/details/image/20180915/20180915160723_67921.jpg\"><img alt=\"\" src=\"/Upload/details/image/20180915/20180915160729_53774.jpg\"><img alt=\"\" src=\"/Upload/details/image/20180915/20180915160729_20729.jpg\"><img alt=\"\" src=\"/Upload/details/image/20180915/20180915160734_67921.jpg\"><img alt=\"\" src=\"/Upload/details/image/20180915/20180915160735_72066.jpg\"><img alt=\"\" src=\"/Upload/details/image/20180915/20180915160740_70949.jpg\"><img alt=\"\" src=\"/Upload/details/image/20180915/20180915160741_24644.jpg\"><img alt=\"\" src=\"/Upload/details/image/20180915/20180915160748_32112.jpg\"><img alt=\"\" src=\"/Upload/details/image/20180915/20180915160748_96882.jpg\"><img alt=\"\" src=\"/Upload/details/image/20180915/20180915160755_68852.jpg\">                </div>', '爽脆', '10', null, '10000', '1', '1', '山东', null, '2019-02-16 22:14:57', '2019-02-16 22:14:59', '0');

-- ----------------------------
-- Table structure for fruit_order
-- ----------------------------
DROP TABLE IF EXISTS `fruit_order`;
CREATE TABLE `fruit_order` (
  `id` int(10) NOT NULL COMMENT '订单-商品(一次交易记录)',
  `order_id` int(10) NOT NULL,
  `fruit_id` int(10) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '标题',
  `price` decimal(10,2) NOT NULL COMMENT '单价',
  `fruit_img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '水果图片url',
  `del` tinyint(1) NOT NULL COMMENT '是否删除 1 是 0 否',
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of fruit_order
-- ----------------------------

-- ----------------------------
-- Table structure for func
-- ----------------------------
DROP TABLE IF EXISTS `func`;
CREATE TABLE `func` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `func_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '资源的名称',
  `resource_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '资源的Url',
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of func
-- ----------------------------
INSERT INTO `func` VALUES ('1', '添加管理员', '/admin/user/add', '2019-02-17 12:04:09', '2019-02-17 12:04:09');
INSERT INTO `func` VALUES ('2', '删除管理员', '/admin/user/del', '2019-02-17 12:05:25', '2019-02-17 12:05:25');
INSERT INTO `func` VALUES ('3', '添加水果', '/admin/fruit/add', '2019-02-17 12:05:30', '2019-02-17 12:05:33');
INSERT INTO `func` VALUES ('4', '下架水果', '/admin/fruit/del', '2019-02-17 12:05:57', '2019-02-17 12:05:59');
INSERT INTO `func` VALUES ('5', '修改水果信息', '/admin/fruit/update', '2019-02-17 12:06:32', '2019-02-17 12:06:34');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `payment` decimal(10,3) NOT NULL COMMENT '支付金额',
  `payment_type` tinyint(2) NOT NULL COMMENT '支付类型（0 线上 1 到付）',
  `post_fee` decimal(10,3) NOT NULL COMMENT '邮费',
  `status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '状态（0 未付款 1 已付款 2 未发货 3 已发货）',
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `payment_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '支付时间',
  `consign_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '发货时间',
  `end_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '收货时间',
  `close_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '关闭交易时间',
  `shipping_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '物流公司名称',
  `shipping_code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '订单编号',
  `buyer_massege` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '买家留言',
  `byer_nickname` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '卖家昵称',
  `byer_rate` tinyint(2) DEFAULT NULL COMMENT '买家评价（0-10）',
  `del` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除 0 否 1  是',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '1', '17.850', '1', '0.000', '0', '2019-02-16 23:06:29', '2019-02-16 23:06:33', null, '2019-02-17 23:06:51', null, null, '顺丰快递', '10000000001', '麻烦物流快点', '周尼玛', null, '0');

-- ----------------------------
-- Table structure for order_shipping
-- ----------------------------
DROP TABLE IF EXISTS `order_shipping`;
CREATE TABLE `order_shipping` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `use_id` int(10) NOT NULL,
  `order_id` int(10) NOT NULL,
  `receive_phone` varchar(32) DEFAULT NULL,
  `receive_mobile` varchar(13) NOT NULL,
  `receive_state` varchar(32) NOT NULL,
  `receive_city` varchar(32) NOT NULL,
  `receive_district` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '地区',
  `receive_adress` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '详细地址',
  `receive_zip` varchar(12) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of order_shipping
-- ----------------------------
INSERT INTO `order_shipping` VALUES ('1', '1', '1', '', '13169141973', '广东', '中山', '石岐', '电子科技大学中山学院', null, '2019-02-16 23:33:06', '2019-02-16 23:33:08');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `role_decs` varchar(255) DEFAULT NULL COMMENT '角色的描述',
  `role_name` varchar(32) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '超级管理员', 'SUPER_ADMIN', '2019-02-17 11:58:14', '2019-02-17 11:58:14');
INSERT INTO `role` VALUES ('2', '管理员', 'ADMIN', '2019-02-17 11:58:19', '2019-02-17 11:58:19');
INSERT INTO `role` VALUES ('3', '用户', 'USER', '2019-02-17 11:58:21', '2019-02-17 11:58:21');

-- ----------------------------
-- Table structure for role_func
-- ----------------------------
DROP TABLE IF EXISTS `role_func`;
CREATE TABLE `role_func` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `role_id` int(3) NOT NULL,
  `func_id` int(3) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `role_func_role_id` (`role_id`),
  KEY `role_func_func_id` (`func_id`),
  CONSTRAINT `role_func_func_id` FOREIGN KEY (`func_id`) REFERENCES `func` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `role_func_role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of role_func
-- ----------------------------
INSERT INTO `role_func` VALUES ('1', '1', '1', null, null);
INSERT INTO `role_func` VALUES ('2', '1', '2', null, null);
INSERT INTO `role_func` VALUES ('3', '1', '3', null, null);
INSERT INTO `role_func` VALUES ('4', '1', '4', null, null);
INSERT INTO `role_func` VALUES ('5', '1', '5', null, null);
INSERT INTO `role_func` VALUES ('6', '2', '3', null, null);
INSERT INTO `role_func` VALUES ('7', '2', '4', null, null);
INSERT INTO `role_func` VALUES ('8', '2', '5', null, null);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `age` int(3) DEFAULT '0',
  `gender` tinyint(1) DEFAULT NULL COMMENT 'null 保密 1 男 0 女',
  `mobile` varchar(13) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `realname` varchar(32) DEFAULT NULL,
  `account` varchar(10) NOT NULL COMMENT '系统随机产生的账号',
  `username` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '状态 0 不可用 1 可用 2 冻结',
  `last_sign_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`) USING BTREE,
  UNIQUE KEY `mobile` (`mobile`) USING BTREE,
  UNIQUE KEY `account` (`account`) USING BTREE,
  UNIQUE KEY `email` (`email`) USING BTREE,
  UNIQUE KEY `username` (`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '0', null, '13169141973', '21232f297a57a5a743894a0e4a801fc3', '1724847624@qq.com', '周星星', '1000000000', 'zhouNiMa', '0', '2019-02-24 11:06:23', '2019-02-24 11:06:23', '2019-02-24 11:06:23', '::ffff:127.0.0.1');
INSERT INTO `user` VALUES ('2', '0', null, '13169141974', '83eebac535d14f791f6ee4dbefe689dc', '1724847625@qq.com', 'superAdmin', '1000000001', 'superAdmin', '0', '2019-02-24 11:06:22', '2019-02-24 11:06:22', '2019-02-24 11:06:22', '::ffff:127.0.0.1');
INSERT INTO `user` VALUES ('3', '0', null, '13169141975', '21232f297a57a5a743894a0e4a801fc3', '172484766@qq.com', 'admin', '1000000002', 'admin', '0', '2019-02-24 11:06:21', '2019-02-24 11:06:21', '2019-02-24 11:06:21', '::ffff:127.0.0.1');
INSERT INTO `user` VALUES ('4', '0', null, '13169141976', '602b6c5e69f981de99885e3ee9d6bebf', null, null, '1581954644', null, '1', '2019-02-24 11:06:20', '2019-02-24 11:06:20', '2019-02-24 11:06:20', '::ffff:127.0.0.1');
INSERT INTO `user` VALUES ('5', '0', null, '13169141977', 'a38d82652049dda41d6da5997f7cb2af', null, null, '0889475328', null, '1', '2019-02-24 11:06:24', '2019-02-24 11:06:24', '2019-02-24 11:06:24', '::ffff:127.0.0.1');
INSERT INTO `user` VALUES ('6', '0', null, '13169141978', 'a38d82652049dda41d6da5997f7cb2af', null, null, '3043672113', null, '1', null, '2019-02-24 11:22:19', '2019-02-24 11:22:19', '::ffff:127.0.0.1');
INSERT INTO `user` VALUES ('7', '0', null, '13169141979', '3d62c418f1859d741db1ae9edb5bc3d5', null, null, '3683570838', null, '1', null, '2019-02-24 11:41:51', '2019-02-24 11:41:51', '::ffff:127.0.0.1');

-- ----------------------------
-- Table structure for user_adress
-- ----------------------------
DROP TABLE IF EXISTS `user_adress`;
CREATE TABLE `user_adress` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `receive_name` varchar(32) NOT NULL,
  `receive_phone` varchar(32) DEFAULT NULL,
  `receive_mobile` varchar(13) NOT NULL,
  `receive_state` varchar(32) NOT NULL,
  `receive_city` varchar(32) NOT NULL,
  `receive_district` varchar(32) NOT NULL,
  `receive_adress` varchar(128) NOT NULL,
  `receive_zip` varchar(32) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_adress
-- ----------------------------

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `role_id` int(3) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_user_role_user_id` (`user_id`),
  KEY `fk_user_role_role_id` (`role_id`),
  CONSTRAINT `fk_user_role_role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_role_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES ('1', '2', '1', '2019-02-17 11:34:02', '2019-02-17 11:34:08');
INSERT INTO `user_role` VALUES ('2', '3', '2', '2019-02-17 11:34:21', '2019-02-17 11:34:24');
