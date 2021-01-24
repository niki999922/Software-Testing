package com.testing.course.kochetkov.dao;

import com.testing.course.kochetkov.model.User;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import javax.sql.DataSource;
import java.text.MessageFormat;
import java.util.List;

public class UserJdbcDao extends JdbcDaoSupport implements UserDao {
    public UserJdbcDao(DataSource dataSource) {
        super();
        setDataSource(dataSource);
        String createUsersTableSql = "create table if not exists Users (login varchar(100) not null primary key, password varchar(100) not null);";
        getJdbcTemplate().update(createUsersTableSql);
    }

    @Override
    public void addUser(User user) {
        System.out.println(user.getLogin());
        System.out.println(user.getPassword());
        String sql = MessageFormat.format("insert into users (login, password) values (''{0}'', ''{1}'');", user.getLogin(), user.getPassword());
        getJdbcTemplate().update(sql);
    }

    @Override
    public List<User> getUser(String login) {
        System.out.println(login);
        String sql = MessageFormat.format("select * from users where users.login = ''{0}'';", login);
        return getJdbcTemplate().query(sql, new BeanPropertyRowMapper(User.class));
    }
}
