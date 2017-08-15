package com.lockbur.trackr.typehandler;

import com.alibaba.fastjson.JSONArray;

/**
 * mybatis json数组转换
 * Created by wangkun23 on 2017/8/15.
 */
public class JSONArrayTypeHandler extends BaseJSONTypeHandler<JSONArray> {

    public JSONArrayTypeHandler(Class<JSONArray> type) {
        super(type);
    }

    @Override
    protected JSONArray parseJSONString(String jsonString) {
        return JSONArray.parseArray(jsonString);
    }
}
