package com.lockbur.trackr.model;

import com.alibaba.fastjson.JSONObject;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;


/**
 * Customer entity
 * Created by Michael DESIGAUD on 25/02/2016.
 */
@ToString
public class Customer extends FieldExtensible {


    @Setter
    @Getter
    private Long id;

    @Setter
    @Getter
    private String firstName;

    @Setter
    @Getter
    private String lastName;


    protected Customer() {
    }

    public Customer(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
