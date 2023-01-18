CREATE DATABASE auction1;

\c auction1

CREATE SEQUENCE seq_user_accountkey;

CREATE TABLE user_account (
  id SERIAL PRIMARY KEY,
  userkey VARCHAR(80) UNIQUE NOT NULL default('#u'||nextval('seq_user_accountkey')) ,
  username VARCHAR(80) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE account_recharge (
    id SERIAL PRIMARY KEY,
    user_account_id INTEGER REFERENCES user_account(id) not null,
    recharge_amount double precision not null check(recharge_amount>=0),
    recharge_date date not null default CURRENT_DATE check(recharge_date<=CURRENT_DATE)
);

CREATE TABLE token(
    id SERIAL PRIMARY KEY,
    user_account_id INTEGER REFERENCES user_account(id) not null,
    token text not null,
    expiration_date timestamp not null
);

CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(80) UNIQUE not null
);

CREATE TABLE status_ref(
  id SERIAL PRIMARY KEY,
  status_name VARCHAR(80) UNIQUE NOT NULL,
  status_value smallint UNIQUE not null
);

-- CREATE TABLE auction_duration(
--   id SERIAL PRIMARY KEY,
--   min_duration smallint not null check(min_duration>=0),
--   max_duration smallint check(max_duration>=min_duration),
--   modified_date date not null default CURRENT_DATE

-- );

-- CREATE TABLE auction_commission(
--   id SERIAL PRIMARY KEY,
--   commission_rate smallint not null check(commission_rate>=0),
--   modified_date date not null default CURRENT_DATE
-- );

-- duration: heure
CREATE TABLE auction(
  id SERIAL PRIMARY KEY,
  title VARCHAR(80) not null,
  description VARCHAR(255),
  min_price double precision not null check(min_price>=0),
  start_date TIMESTAMP not null default CURRENT_TIMESTAMP,
  duration decimal not null check(duration>0),
  category_id INTEGER REFERENCES category(id) not null,
  user_account_id INTEGER REFERENCES user_account(id) not null,
  status_ref_id INTEGER REFERENCES status_ref(id) not null

);

-- CREATE TABLE auction_image(
--     id SERIAL PRIMARY KEY,
--     image_url TEXT not null,
--     auction_id INTEGER REFERENCES auction(id) not null
-- );

CREATE TABLE auction_bid(
    id SERIAL PRIMARY KEY,
    user_account_id INTEGER REFERENCES user_account(id) not null,
    auction_id INTEGER REFERENCES auction(id) not null,
    bid_amount double precision check(bid_amount>0),
    bid_date TIMESTAMP default CURRENT_TIMESTAMP

);


CREATE SEQUENCE seq_adminkey;

CREATE TABLE admin (
  id SERIAL PRIMARY KEY,
  adminkey VARCHAR(80) UNIQUE NOT NULL default('#ad'||nextval('seq_adminkey')) ,
  firstname VARCHAR(80) ,
  lastname VARCHAR(80) ,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL

);
-- status
-- 5 valid
-- -5 canceled

CREATE TABLE account_recharge_validation(
  id SERIAL PRIMARY KEY,
  account_recharge_id INTEGER REFERENCES account_recharge(id) UNIQUE not null,
  admin_id INTEGER REFERENCES admin(id) UNIQUE not null,
  status smallint not null default 5
);

