package com.lockbur.trackr.api.v1;

import com.lockbur.trackr.domain.Form;
import com.lockbur.trackr.model.Customer;
import com.lockbur.trackr.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * 角色管理
 * Created by wangkun23 on 2017/7/24.
 */
@RestController
@RequestMapping(value = "/api/v1/role")
public class RoleApiController {

    @Autowired
    private FormService formService;

    @RequestMapping(value = "/form", method = RequestMethod.GET)
    public Form getForm(@RequestParam(value = "onlyExtraFields", required = false) Boolean onlyExtraFields) {
        return formService.describe(Customer.class, onlyExtraFields);
    }
}
