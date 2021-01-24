package com.testing.course.kochetkov.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import com.testing.course.kochetkov.dao.UserDao;
import com.testing.course.kochetkov.dao.UserJdbcDao;

import javax.sql.DataSource;

@Configuration
public class JdbcDaoContextConfiguration {
    @Bean
    public UserDao userDao(DataSource dS) {
        return new UserJdbcDao(dS);
    }

    @Bean
    public DataSource dataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.sqlite.JDBC");
        dataSource.setUrl("jdbc:sqlite:jazz.db");
        dataSource.setUsername("");
        dataSource.setPassword("");
        return dataSource;
    }
}
