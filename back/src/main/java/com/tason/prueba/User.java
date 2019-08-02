package com.tason.prueba;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class User {
    private @Id @GeneratedValue Long id;
    private String name;
    private String lastname;
    private String cedula;
    private String email;
    private String company;
    private String position;
    private String address;
    private String birthPlace;
    private String birthDate;
    private String phoneNumber;

    public User() {
    }

    public User(String name, String lastname, String cedula, String email, String company, String position, String address, String birthPlace, String birthDate, String phoneNumber) {
        this.name = name;
        this.lastname = lastname;
        this.cedula = cedula;
        this.email = email;
        this.company = company;
        this.position = position;
        this.address = address;
        this.birthPlace = birthPlace;
        this.birthDate = birthDate;
        this.phoneNumber = phoneNumber;
    }
}
