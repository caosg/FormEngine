package com.lockbur.trackr.api.v1;

import com.lockbur.trackr.domain.Form;
import com.lockbur.trackr.model.Customer;
import com.lockbur.trackr.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

/**
 * Created by wangkun23 on 2017/8/15.
 */
@RestController
@RequestMapping(value = "/api/customers")
public class CustomerController {


    @Autowired
    private FormService formService;

    @RequestMapping
    public List<Customer> query() {
        return Collections.emptyList();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Customer get(@PathVariable Long id) {
        return new Customer("wang", "kun");
    }

    @RequestMapping(method = RequestMethod.POST)
    public Customer save(@RequestBody Customer customer) {

        return new Customer("wang", "kun");
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Customer update(@RequestBody Customer customer) {

        return new Customer("wang", "kun");
    }

    @RequestMapping(value = "/form", method = RequestMethod.GET)
    public Form getForm(@RequestParam(value = "onlyExtraFields", required = false) Boolean onlyExtraFields) {
        return formService.describe(Customer.class, onlyExtraFields);
    }

}
