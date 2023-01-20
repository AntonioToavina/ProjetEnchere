package mongo.mongoserverapp.repo;

import mongo.mongoserverapp.model.Auction_commission;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface Auction_commission_repo extends MongoRepository<Auction_commission,Integer> {

    @Query(value = "{}", sort = "{ modified_date : -1 }")
    public List<Auction_commission> findByOrderByModifiedDateDesc();

}
