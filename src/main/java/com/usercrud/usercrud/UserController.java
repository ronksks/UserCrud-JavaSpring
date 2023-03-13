package com.usercrud.usercrud;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
@RestController
@RequestMapping("/api")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(@RequestParam(required = false) String id) {
        try {
            List<User> users = new ArrayList<User>();
            userRepository.findAll().forEach(users::add);
            if (users.isEmpty()) {
                logger.info("No users found.");
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            logger.info("Received all users.");
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Could not receive all users.", e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") long id) {
        Optional<User> userData = userRepository.findById(id);
        if (userData.isPresent()) {
            logger.info("User found: " + userData.toString());
            return new ResponseEntity<>(userData.get(), HttpStatus.OK);
        } else {
            logger.info("User was not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/users/")
    public ResponseEntity<User> findByLastnameOrFirstname(@RequestParam(value = "first_name", required = false) String firstName,
                                                          @RequestParam(value = "last_name", required = false) String lastName) {

        List<User> userData;
        if (firstName != null && lastName != null) {
            userData = userRepository.findByLastnameOrFirstname(lastName, firstName);
        } else if (firstName != null) {
            userData = userRepository.findByLastnameOrFirstname(null, firstName);
        } else if (lastName != null) {
            userData = userRepository.findByLastnameOrFirstname(lastName, null);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if (userData.isEmpty()) {
            logger.info("User was not found");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            logger.info("User found: " + userData.toString());
            return new ResponseEntity<>(userData.get(0), HttpStatus.OK);
        }
    }
//    @GetMapping("/users/")
//    public ResponseEntity<User> findByLastnameOrFirstname(@RequestBody User user) {
//
//        List<User> userData = userRepository.findByLastnameOrFirstname(user.getFirst_name(), user.getLast_name());
//        if (userData.isEmpty()) {
//            System.out.println("User was not found");
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        } else {
//            System.out.println("User found: "+ userData.toString());
//            return new ResponseEntity<>(userData.get(0), HttpStatus.OK);
//        }
//    }

//    @GetMapping("/users/")
//    public ResponseEntity<User> findByFirstName(@RequestBody User user) {
//
//        List<User> userData = userRepository.findByFirstName(user.getFirst_name());
//        if (userData.isEmpty()) {
//            System.out.println("User was not found");
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        } else {
//            System.out.println("User found: "+ userData.toString());
//            return new ResponseEntity<>(userData.get(0), HttpStatus.OK);
//        }
//    }


    @PostMapping("/users")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        try {
            long maxId = userRepository.getMaxId();
            User newUser = new User(maxId + 1, user.getFirst_name(), user.getLast_name(), user.getEmail(), user.getAge(), user.getHobbies());
            logger.info("New user added: " + newUser.toString());
            User savedUser = userRepository.save(newUser);
            return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Could not add user, Error: " + e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> editUser(@PathVariable("id") long id, @RequestBody User user) {
        try {
            Optional<User> userData = userRepository.findById(id);
            if (userData.isPresent()) {
                User _editedUser = userData.get();
                _editedUser.setFirst_name(user.getFirst_name());
                _editedUser.setLast_name(user.getLast_name());
                _editedUser.setAge(user.getAge());
                _editedUser.setEmail(user.getEmail());

                logger.info("User updated: {}", _editedUser.toString());
                return new ResponseEntity<>(userRepository.save(_editedUser), HttpStatus.OK);
            } else {
                logger.info("Could not update user with id={}. User not found.", id);
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            logger.error("Could not update user with id={}.", id, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id) {
        try {
            userRepository.deleteById(id);
            logger.info("User with id={} deleted.", id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            logger.error("Could not delete user with id={}.", id, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
