package com.lockbur.trackr.model;

import com.alibaba.fastjson.JSONObject;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.MappedSuperclass;
import java.io.Serializable;

/**
 * Created by wangkun23 on 2017/8/15.
 */
@MappedSuperclass
public class FieldExtensible implements Serializable {


    @Setter
    @Getter
    private JSONObject extraFields;
}
