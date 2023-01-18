package com.example.serverapp.Repository;

import com.example.serverapp.Model.Auction;
import com.example.serverapp.Model.Auction_bid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Repo_auction_bid  extends JpaRepository<Auction_bid,Integer> {

}
