package com.usercrud.usercrud;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "People")
public class User {
    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String first_name;
    private String last_name;
    private String email;
    private int age;
    private String hobbies;

//    // Constructor without id parameter
//    public User(String first_name, String last_name, String email, int age, String hobbies) {
//        this.first_name = first_name;
//        this.last_name = last_name;
//        this.email = email;
//        this.age = age;
//        this.hobbies = hobbies;
//    }

    @Override
    public String toString() {
        return String.format("id: %s, first_name: %s, last_name: %s, email: %s, age: %s, hobbies: %s",
                id, this.getFirst_name(), this.getLast_name(), this.getEmail(), this.getAge(), this.getHobbies());
    }
}
