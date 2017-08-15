package com.lockbur.trackr.service.impl;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.exc.PropertyBindingException;
import com.lockbur.trackr.domain.Form;
import com.lockbur.trackr.domain.FormField;
import com.lockbur.trackr.service.FormService;
import com.lockbur.trackr.utils.FormUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

/**
 * Created by wangkun23 on 2017/8/15.
 */
@Service
public class FormServiceImpl implements FormService {


    final Logger logger = LoggerFactory.getLogger(getClass());

    /**
     * Describe entity
     *
     * @param type            dto type
     * @param onlyExtraFields include only extra fields or no
     * @return ExtraFieldEntity
     */
    @Override
    public Form describe(Class<?> type, Boolean onlyExtraFields) {
        if (type != null) {
            Form form = new Form();
            form.setEntityName(type.getSimpleName());

            List<FormField> formFields = new LinkedList<>();

            //获取该对象本身的字段信息
            formFields.addAll(FormUtils.getFields(type, onlyExtraFields));

            //从数据中 获取动态字段信息
            ClassPathResource classPathResource = new ClassPathResource("/forms/customer.json");
            ObjectMapper objectMapper = new ObjectMapper();

            String fileName = classPathResource.getFilename();
            try {
                logger.info("Reading file: {}", fileName);
                Form formJson = objectMapper.readValue(classPathResource.getInputStream(), Form.class);
                if (formJson != null) {
                    formFields.addAll(formJson.getFields());
                }
                logger.info("File name: {}", formJson);
            } catch (PropertyBindingException ex) {
                logger.error("Error while reading file '{}': wrong json format", fileName, ex);
            } catch (JsonParseException e) {
                e.printStackTrace();
            } catch (JsonMappingException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }

            form.setFields(new ArrayList<>(formFields));
            return form;
        }
        return null;
    }
}
