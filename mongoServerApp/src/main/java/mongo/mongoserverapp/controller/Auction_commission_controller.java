package mongo.mongoserverapp.controller;

import mongo.mongoserverapp.Util.ResponseData;
import mongo.mongoserverapp.model.Auction;
import mongo.mongoserverapp.model.Auction_commission;
import mongo.mongoserverapp.model.Auction_duration;
import mongo.mongoserverapp.repo.Auction_commission_repo;
import mongo.mongoserverapp.repo.Auction_repo;
import org.bson.Document;
import org.bson.conversions.Bson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.mongodb.client.model.Indexes.descending;
import static java.util.Collections.sort;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.limit;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.project;


@RestController
@CrossOrigin
@RequestMapping("/auction_commissions")
public class Auction_commission_controller {

    Auction_commission_repo auction_commission_repo;

    public Auction_commission_controller(Auction_commission_repo auction_commission_repo) {
        this.auction_commission_repo = auction_commission_repo;
    }

    @PostMapping()
    public Object create( @RequestBody Auction_commission auction_commission){


        auction_commission_repo.save(auction_commission);
        return new ResponseData("auction_commission updated sucessfully");
    }


    @GetMapping("/last")
    public Object findLast(){

        List<Auction_commission> auction_commissions=auction_commission_repo.findByOrderByModifiedDateDesc();
        if(auction_commissions.size()>0)
            return new ResponseData(auction_commissions.get(0));
        return new ResponseData(null);

    }



}
