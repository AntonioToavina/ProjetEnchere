package mongo.mongoserverapp.controller;

import mongo.mongoserverapp.Util.ResponseData;
import mongo.mongoserverapp.model.Auction_commission;
import mongo.mongoserverapp.model.Auction_duration;
import mongo.mongoserverapp.repo.Auction_duration_repo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/auction_durations")
public class Auction_duration_controller {
    Auction_duration_repo auction_duration_repo;

    public Auction_duration_controller(Auction_duration_repo auction_duration_repo) {
        this.auction_duration_repo = auction_duration_repo;
    }


    @PostMapping()
    public Object create( @RequestBody Auction_duration auction_duration){
        auction_duration_repo.save(auction_duration);
        return new ResponseData("auction_duration updated sucessfully");
    }

    @GetMapping("/last")
    public Object findLast(){
        List<Auction_duration> auction_durations=auction_duration_repo.findByOrderByModifiedDateDesc();
        if(auction_durations.size()>0)
            return new ResponseData(auction_durations.get(0));
        return new ResponseData(null);
    }

}
