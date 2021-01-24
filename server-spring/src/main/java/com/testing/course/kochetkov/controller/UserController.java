package com.testing.course.kochetkov.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.testing.course.kochetkov.dao.UserDao;
import com.testing.course.kochetkov.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


@Controller
public class UserController {
    private final UserDao userDao;
    private final ObjectMapper mapper = new ObjectMapper();
    private User currentUser = null;

    @Autowired
    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @GetMapping("/trends/trends")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String getTrends() throws JsonProcessingException {
        HashMap<String, Object> trend1 = new HashMap<>();
        HashMap<String, Object> trend2 = new HashMap<>();
        HashMap<String, Object> trend3 = new HashMap<>();
        HashMap<String, Object> trend4 = new HashMap<>();

        trend1.put("name", "Три полоски");
        trend1.put("description", "Песня из 2007 о полосках? просто девушка в парке Победы");

        trend2.put("name", "Чувства");
        trend2.put("description", "Очень чувственная песня, из 2018");

        trend3.put("name", "Дыши");
        trend3.put("description", "Ночь, фонарик, конечно аптека");

        trend4.put("name", "Этажи");
        trend4.put("description", "Как порой сложно подниматься наверх");

        List<Object> trends = new ArrayList<>();
        trends.add(trend1);
        trends.add(trend2);
        trends.add(trend3);
        trends.add(trend4);

        HashMap<String, Object> map = new HashMap<>();
        map.put("trends", trends);
        map.put("body", "OK");

        return mapper.writeValueAsString(map);
    }

    @PostMapping("/login-register/register")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String register(@RequestBody User user) throws JsonProcessingException {
        List<User> users = userDao.getUser(user.getLogin());
        HashMap<String, String> map = new HashMap<>();

        if (!users.isEmpty()) {
            map.put("body", "This user does not exits");
            return mapper.writeValueAsString(map);
        }

        userDao.addUser(user);
        map.put("body", "OK");

        return mapper.writeValueAsString(map);
    }

    @PostMapping("/login-register/login")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String login(@RequestBody User user) throws JsonProcessingException {
        List<User> users = userDao.getUser(user.getLogin());
        HashMap<String, String> map = new HashMap<>();

        if (!users.isEmpty()) {
            currentUser = user;
            map.put("body", "OK");
        } else {
            map.put("body", "Incorrect login, try again");
        }

        return mapper.writeValueAsString(map);
    }

    @PostMapping("/login-register/logout")
    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseBody
    public String logout() throws JsonProcessingException {
        currentUser = null;

        HashMap<String, String> map = new HashMap<>();
        map.put("body", "OK");

        return mapper.writeValueAsString(map);
    }
}
