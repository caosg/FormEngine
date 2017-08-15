package com.lockbur.trackr.domain;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * 基础实体类 每个对象都需要包含ID和时间
 * Created by wangkun23 on 2017/8/15.
 */
@Data
public class Entity implements Serializable {
    private Integer id;

    private Integer creatorId;//创建人
    //时间
    private Date createTime;
    private Date updateTime;
}
