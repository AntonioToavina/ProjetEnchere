package com.example.serverapp.Controller;

import com.example.serverapp.Model.Auction;
import com.example.serverapp.Model.Token;
import com.example.serverapp.Model.User_account;
import com.example.serverapp.Repository.Repo_Token;
import com.example.serverapp.Repository.Repo_auction;
import com.example.serverapp.Util.ResponseData;
import com.example.serverapp.Util.ResponseError;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/auction")
public class Controller_Auction {

    Repo_auction repo_auction;
    Repo_Token repo_token;

    public Repo_Token getRepo_token() {
        return repo_token;
    }

    public void setRepo_token(Repo_Token repo_token) {
        this.repo_token = repo_token;
    }

    public Repo_auction getRepo_auction() {
        return repo_auction;
    }

    public void setRepo_auction(Repo_auction repo_auction) {
        this.repo_auction = repo_auction;
    }

    public Controller_Auction(Repo_auction repo_auction,Repo_Token repo_token) {
        setRepo_auction(repo_auction);
        setRepo_token(repo_token);
    }

    @PostMapping()
    public Object create(@RequestHeader("Authorization") String token,@RequestBody Auction auction){
        try{
            Token t=new Token().check_Expiration(token,getRepo_token());
            if(t==null)
                return new ResponseError("Access denied");
            
            getRepo_auction().save(auction);
        }catch (Throwable e){
            return new ResponseError(e.getMessage());
        }
        return new ResponseData("Success");
    }

}
