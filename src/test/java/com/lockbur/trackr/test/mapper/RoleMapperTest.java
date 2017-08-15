package com.lockbur.trackr.test.mapper;

import com.alibaba.fastjson.JSONObject;
import com.lockbur.trackr.domain.Role;
import com.lockbur.trackr.mapper.RoleMapper;
import com.lockbur.trackr.test.TestBase;
import org.junit.Test;

import javax.annotation.Resource;

/**
 * Created by wangkun23 on 2017/8/15.
 */
public class RoleMapperTest extends TestBase {

    @Resource
    RoleMapper roleMapper;

    @Test
    public void insert() {
        Role role = new Role();
        role.setName("d");
        role.setCreatorId(1);

        JSONObject jsonObject = new JSONObject();

        jsonObject.put("id", "123");
        jsonObject.put("name", "dd");
        role.setDescription(jsonObject);

        roleMapper.insert(role);

    }


    @Test
    public void findById() {
        Role role = roleMapper.findById(14);
        System.out.println("");
    }
}
