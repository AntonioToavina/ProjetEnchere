
CREATE OR REPLACE VIEW v_auction_tmp AS
select a.id auction_id,a.start_date + (a.duration * interval '1 hour') final_date ,
(SELECT id from auction_bid where auction_id=a.id and bid_amount>=a.min_price and bid_date<(a.start_date + (a.duration * interval '1 hour')) order by bid_amount limit 1) auction_bid_id
from auction a
;

-- -15 : non vendue
-- 0 : en cours
-- 15 : vendue
CREATE OR REPLACE VIEW v_auction AS
SELECT a.id auction_id,a.title,a.description,a.min_price,a.start_date,v.final_date,a.duration,a.category_id,a.user_account_id user_auction_id,
b.id auction_bid_id,b.user_account_id user_bid_id,b.bid_amount,b.bid_date,
case 
  when (final_date>CURRENT_TIMESTAMP) then 'in progress'
  when (auction_bid_id is null and final_date<=CURRENT_TIMESTAMP) then 'not sold'
  else 'sold'
end status from 
auction a join v_auction_tmp v on a.id=v.auction_id
left join auction_bid b on v.auction_bid_id=b.id