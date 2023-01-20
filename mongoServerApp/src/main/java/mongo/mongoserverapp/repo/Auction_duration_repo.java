package mongo.mongoserverapp.repo;

import mongo.mongoserverapp.model.Auction_duration;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface Auction_duration_repo extends MongoRepository<mongo.mongoserverapp.model.Auction_duration,Integer> {

    @Query(value = "{}", sort = "{ modified_date : -1 }")
    public List<Auction_duration> findByOrderByModifiedDateDesc();
}
