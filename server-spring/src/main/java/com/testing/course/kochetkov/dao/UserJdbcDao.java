package com.testing.course.kochetkov.dao;

import com.testing.course.kochetkov.model.User;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import javax.sql.DataSource;
import java.text.MessageFormat;
import java.util.List;

public class UserJdbcDao extends JdbcDaoSupport implements UserDao {
    public UserJdbcDao(DataSource dataSource) {
        super();
        setDataSource(dataSource);
        String createUsersTableSql = "CREATE TABLE IF NOT EXISTS Users (login VARCHAR(100) not null primary key, password VARCHAR(100) not null);";
        getJdbcTemplate().update(createUsersTableSql);
    }

    @Override
    public void addUser(User user) {
        String sql = MessageFormat.format("INSERT INTO Users (login, password) VALUES (''{0}'', ''{1}'');", user.getLogin(), user.getPassword());
        getJdbcTemplate().update(sql);
    }

    @Override
    public List<User> getUser(String login) {
        String sql = MessageFormat.format("SELECT * FROM Users WHERE Users.login = ''{0}'';", login);
        return getJdbcTemplate().query(sql, new BeanPropertyRowMapper(User.class));
    }
}
