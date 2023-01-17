package com.example.serverapp.Model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "token")
public class Token {
    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
     @JoinColumn(name = "user_account_id")
    User_account user_account;

    String token;

    Date expiration_date;

    public User_account getUser_account() {
        return user_account;
    }

    public void setUser_account(User_account user_account) {
        this.user_account = user_account;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Date getExpiration_date() {
        return expiration_date;
    }

    public void setExpiration_date(Date expiration_date) {
        this.expiration_date = expiration_date;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }
}
