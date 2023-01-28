package mongo.mongoserverapp.controller;

import mongo.mongoserverapp.Util.ResponseData;
import mongo.mongoserverapp.Util.ResponseError;
import mongo.mongoserverapp.model.Auction;
import org.springframework.web.bind.annotation.*;
import mongo.mongoserverapp.repo.Auction_repo;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/auctions")
public class Auction_controller {
    Auction_repo auction_repo;
    public Auction_controller(Auction_repo auction_repo) {
        this.auction_repo = auction_repo;
    }

    @PostMapping()
    public Object create( @RequestBody Auction auction){
        auction_repo.save(auction);
        return new ResponseData("auction inserted sucessfully");
    }

    @GetMapping()
    public Object findAll(){

        return new ResponseData(auction_repo.findAll());
    }

    @PostMapping("/{id}/addimage")
    public Object addImage(@PathVariable Integer id,@RequestParam String url){
        Optional<Auction> auction = auction_repo.findById(id);
        if(auction.isPresent()){
           // auction.get().getImages().add(url);
            auction_repo.save(auction.get());
            return new ResponseData("image added successfully");
        }

        return new ResponseError("failed updated image");
    }
}
