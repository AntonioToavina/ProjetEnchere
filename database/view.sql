
-- Auction list with its status
CREATE OR REPLACE VIEW v_auction_tmp AS
select a.id auction_id,a.start_date + (a.duration * interval '1 hour') final_date ,
(SELECT id from auction_bid where auction_id=a.id and bid_amount>=a.min_price and bid_date<(a.start_date + (a.duration * interval '1 hour')) order by bid_amount limit 1) auction_bid_id
from auction a
;

CREATE OR REPLACE VIEW v_auction AS
SELECT a.id auction_id,
b.id auction_bid_id,
case 
  when (final_date>CURRENT_TIMESTAMP) then 'in progress'
  when (auction_bid_id is null and final_date<=CURRENT_TIMESTAMP) then 'not sold'
  else 'sold'
end status,v.final_date from 
auction a join v_auction_tmp v on a.id=v.auction_id
left join auction_bid b on v.auction_bid_id=b.id;

-- Amount account available for each users
CREATE OR REPLACE VIEW v_amountuseraccount AS
SELECT u.id user_account_id,sum(recharge_amount) amount from user_account u left join (SELECT * from account_recharge
where id in (SELECT account_recharge_id from account_recharge_validation where status=5)) AS a on u.id=a.user_account_id
group by u.id;

CREATE OR REPLACE VIEW v_blocked_accountamount AS
SELECT b.* from auction_bid b join v_auction a on b.id=a.auction_bid_id

CREATE OR REPLACE VIEW v_amountuseraccount_available AS
SELECT v.user_account_id,v.amount,v.amount-(SELECT sum(bid_amount) from v_blocked_accountamount where user_account_id=v.user_account_id) amount_available from v_amountuseraccount v


-- bid amount from auction sold group by category // calculer la marge depuis mongo
CREATE OR REPLACE VIEW v_statistique_categorie AS
SELECT au.category_id,sum(b.bid_amount) bid_amount from auction au join v_auction a on au.id=a.auction_id
join auction_bid b on a.auction_id=b.auction_id where status='sold' group by au.category_id ;


CREATE OR REPLACE VIEW v_statistique_user AS
SELECT au.user_account_id,sum(b.bid_amount) bid_amount from auction au join v_auction a on au.id=a.auction_id
join auction_bid b on a.auction_id=b.auction_id where status='sold' group by au.user_account_id ;

