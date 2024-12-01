package com.SesoverApp.Sesover.Services;

import com.SesoverApp.Sesover.Repositories.UserRepository;
import com.SesoverApp.Sesover.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public void saveUser(User user) {
        userRepository.save(user);
    }
}
