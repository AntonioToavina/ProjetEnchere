package com.example.serverapp.Controller;

import com.example.serverapp.Model.Token;
import com.example.serverapp.Model.User_account;
import com.example.serverapp.Repository.Repo_Token;
import com.example.serverapp.Repository.Repo_User;
import com.example.serverapp.Util.ResponseData;
import com.example.serverapp.Util.ResponseError;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class Controller_User {
    Repo_User repo_user;
    Repo_Token repo_token;

    public Controller_User(Repo_User repo_user,Repo_Token repo_token){
        this.repo_user=repo_user;
        this.repo_token=repo_token;
    }

    public Object inscription(@RequestBody User_account user){
        try{
            this.repo_user.save(user);
        }catch (Throwable e){
            e.printStackTrace();
            return new ResponseError("Erreur lors de l'inscription");
        }
        return new ResponseData("Success");
    }


    public Object login (@RequestBody User_account user){
        Token token =new Token();
        try{
            user=this.repo_user.userLogin(user.getEmail(),user.getPassword());
            token.generateToken(user);
            this.repo_token.save(token);
        }catch(Throwable e){
            e.printStackTrace();
            return new ResponseError("Mot de passe/email incorrect");
        }
        return new ResponseData(token);
    }

    public Object deconnexion(@RequestHeader("Authorization") String token){
        try{
            Token token_user=new Token();
            token_user=token_user.check_Expiration(token,this.repo_token);

            if(token_user!=null)
                this.repo_token.deleteToken(token_user.getUser_account().getId());
        }catch(Throwable e){
            e.printStackTrace();
            return new ResponseError("Error");
        }
        return new ResponseData("Success");
    }

}
