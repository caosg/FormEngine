package com.lockbur.trackr.typehandler;

import com.alibaba.fastjson.JSONObject;


/**
 * mybatis json转换
 * Created by wangkun23 on 2017/8/15.
 */
public class JSONTypeHandler extends BaseJSONTypeHandler<JSONObject> {

    public JSONTypeHandler(Class<JSONObject> type) {
        super(type);
    }

    /**
     * 默认子类去实现
     *
     * @param jsonString
     * @return
     */
    @Override
    protected JSONObject parseJSONString(String jsonString) {
        return JSONObject.parseObject(jsonString);
    }
}
