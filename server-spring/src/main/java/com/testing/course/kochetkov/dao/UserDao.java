package com.testing.course.kochetkov.dao;

import com.testing.course.kochetkov.model.User;

import java.util.List;

public interface UserDao {
    void addUser(User user);
    List<User> getUser(String login);
}
