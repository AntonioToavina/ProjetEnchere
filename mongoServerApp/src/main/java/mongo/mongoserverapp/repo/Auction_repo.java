package mongo.mongoserverapp.repo;

import mongo.mongoserverapp.model.Auction;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Auction_repo extends MongoRepository<Auction,Integer> {
}
