/*
 Navicat MySQL Data Transfer

 Source Server         : 10.240.1.1
 Source Server Type    : MySQL
 Source Server Version : 50715
 Source Host           : 10.240.1.1
 Source Database       : wangkun

 Target Server Type    : MySQL
 Target Server Version : 50715
 File Encoding         : utf-8

 Date: 08/15/2017 11:22:15 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tb_role`
-- ----------------------------
DROP TABLE IF EXISTS `tb_role`;
CREATE TABLE `tb_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `name` varchar(20) NOT NULL COMMENT '角色名称',
  `creator_id` bigint(32) NOT NULL COMMENT '通过后台，添加本角色的操作者的账号',
  `description` json DEFAULT NULL COMMENT '描述信息',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '本记录最后修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COMMENT='角色表';

-- ----------------------------
--  Records of `tb_role`
-- ----------------------------
BEGIN;
INSERT INTO `tb_role` VALUES ('1', '超级管理员', '1', null, '2016-12-02 16:15:54', '2017-08-15 11:13:28'), ('14', 'd', '1', '{\"id\": \"123\", \"name\": \"dd\"}', '2017-08-15 11:20:13', '2017-08-15 11:20:13');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
