package com.example.serverapp.Controller;

import com.example.serverapp.Model.Auction;
import com.example.serverapp.Model.Token;
import com.example.serverapp.Model.User_account;
import com.example.serverapp.Repository.Repo_Token;
import com.example.serverapp.Repository.Repo_auction;
import com.example.serverapp.Repository.Repo_v_auction;
import com.example.serverapp.Util.ResponseData;
import com.example.serverapp.Util.ResponseError;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/auctions")
public class Controller_Auction {

    Repo_auction repo_auction;
    Repo_Token repo_token;

    Repo_v_auction repo_v_auction;

    public Repo_v_auction getRepo_v_auction() {
        return repo_v_auction;
    }

    public void setRepo_v_auction(Repo_v_auction repo_v_auction) {
        this.repo_v_auction = repo_v_auction;
    }

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

    public Controller_Auction(Repo_auction repo_auction,Repo_Token repo_token,Repo_v_auction repo_v_auction) {
        setRepo_auction(repo_auction);
        setRepo_token(repo_token);
        setRepo_v_auction(repo_v_auction);
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
    @GetMapping()
    public Object findAll(){
        try{
//            Token t=new Token().check_Expiration(token,getRepo_token());
//            if(t==null)
//                return new ResponseError("Access denied");

            return  new ResponseData(getRepo_v_auction().findAll());
        }catch (Throwable e){
            return new ResponseError(e.getMessage());
        }
    }

}
