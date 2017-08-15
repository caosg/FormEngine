package com.lockbur.trackr.domain;

import com.alibaba.fastjson.JSONObject;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;
import java.util.Date;

/**
 * 角色管理
 * Created by wangkun23 on 2016/12/2.
 */
@Data
@ToString
public class Role extends Entity {
    private String name;//名称
    private JSONObject description;// 描述
}
