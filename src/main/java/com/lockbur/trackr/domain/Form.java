package com.lockbur.trackr.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;
import java.util.List;

/**
 * Form description
 * Created by wangkun23 on 2017/8/15.
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@ToString
public class Form implements Serializable {

    @Setter
    @Getter
    private String entityName;


    @Setter
    @Getter
    private Integer version;


    @Setter
    @Getter
    private List<FormField> fields;

}
