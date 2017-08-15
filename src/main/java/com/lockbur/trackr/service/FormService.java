package com.lockbur.trackr.service;

import com.lockbur.trackr.domain.Form;

/**
 * Created by wangkun23 on 2017/8/15.
 */
public interface FormService {

    public Form describe(Class<?> type, Boolean onlyExtraFields);
}
