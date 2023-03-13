package com.usercrud.usercrud;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE (:first_name IS NULL OR u.first_name = :first_name) AND (:last_name IS NULL OR u.last_name = :last_name)")
    List<User> findByLastnameOrFirstname(String last_name, String first_name);

//    List<User> findByLastName(String last_name);
//    List<User> findByAge(int age);
//    List<User> findByHobbies(String hobbies);
    @Query("SELECT COALESCE(MAX(id), 0) FROM User")
    long getMaxId();
}
