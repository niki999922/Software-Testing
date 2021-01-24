package com.testing.course.kochetkov.dao;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.testcontainers.containers.MySQLContainer;
import com.testing.course.kochetkov.model.User;

import javax.sql.DataSource;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

//@RunWith(SpringJUnit4ClassRunner.class)
public class UserJdbcDaoTest{
    private final UserJdbcDao userDao = new UserJdbcDao(dataSource());

    public DataSource dataSource() {
        MySQLContainer<?> mysql = new MySQLContainer<>("mysql:5.6.42");
        mysql.start();
        System.out.println(mysql.getJdbcUrl());
        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setDriverClassName(mysql.getDriverClassName());
        hikariConfig.setJdbcUrl(mysql.getJdbcUrl());
        hikariConfig.setUsername(mysql.getUsername());
        hikariConfig.setPassword(mysql.getPassword());

        return new HikariDataSource(hikariConfig);
    }


//    @Test
    public void addUserTest() {
        String login = "test";
        User user = new User(login, login);
        userDao.addUser(user);

        List<User> result = userDao.getUser("test");

        assertEquals(1, result.size());
        assertEquals("test", result.get(0).getLogin());
        assertEquals("test", result.get(0).getPassword());
    }
}