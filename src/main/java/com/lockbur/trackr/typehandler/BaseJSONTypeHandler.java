package com.lockbur.trackr.typehandler;

import com.alibaba.fastjson.JSON;
import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by wangkun23 on 2017/8/15.
 */
public abstract class BaseJSONTypeHandler<E extends JSON> extends BaseTypeHandler<E> {

    public BaseJSONTypeHandler(Class<E> type) {
        if (type == null) {
            throw new IllegalArgumentException("Type argument cannot be null");
        }
    }

    @Override
    public void setNonNullParameter(PreparedStatement preparedStatement, int i, E parameter, JdbcType jdbcType) throws SQLException {
        preparedStatement.setString(i, parameter.toString());
    }

    @Override
    public E getNullableResult(ResultSet resultSet, String columnName) throws SQLException {
        String jsonStr = resultSet.getString(columnName);
        if (resultSet.wasNull()) {
            return null;
        } else {
            return parseJSONString(jsonStr);
        }
    }

    @Override
    public E getNullableResult(ResultSet resultSet, int columnIndex) throws SQLException {
        String jsonStr = resultSet.getString(columnIndex);
        if (resultSet.wasNull()) {
            return null;
        } else {
            return parseJSONString(jsonStr);
        }
    }

    @Override
    public E getNullableResult(CallableStatement callableStatement, int columnIndex) throws SQLException {
        String jsonStr = callableStatement.getString(columnIndex);
        if (callableStatement.wasNull()) {
            return null;
        } else {
            return parseJSONString(jsonStr);
        }
    }

    /**
     * 默认子类去实现
     *
     * @param jsonString
     * @return
     */
    protected abstract E parseJSONString(String jsonString);
}
