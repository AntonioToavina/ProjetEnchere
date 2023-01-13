INSERT INTO user_account (username, email, password) VALUES ('John Doe', 'johndoe@example.com', 'password123');
INSERT INTO user_account (username, email, password) VALUES ('Jane Smith', 'janesmith@example.com', 'password456');
INSERT INTO user_account (username, email, password) VALUES ('Bob Johnson', 'bobjohnson@example.com', 'password789');

INSERT INTO account_recharge (user_account_id, recharge_amount) VALUES (1, 100000.00);
INSERT INTO account_recharge (user_account_id, recharge_amount) VALUES (2, 50000.00);
INSERT INTO account_recharge (user_account_id, recharge_amount) VALUES (3, 75000.00);

INSERT INTO category (category_name) VALUES ('Electronics');
INSERT INTO category (category_name) VALUES ('Furniture');
INSERT INTO category (category_name) VALUES ('Clothes');

INSERT INTO status_ref (status_name,status_value) VALUES ('Canceled',-5);
INSERT INTO status_ref (status_name,status_value) VALUES ('Open',0);
INSERT INTO status_ref (status_name,status_value) VALUES ('Closed',15);

INSERT INTO auction_duration (min_price, max_price,modified_date) VALUES (40000.00, 100000.00,'2022-10-10');
INSERT INTO auction_duration (min_price, max_price,modified_date) VALUES (43000.00, 100000.00,'2022-10-12');

INSERT INTO auction_commission (commission_rate,modified_date) VALUES (5,'2022-10-10');
INSERT INTO auction_commission (commission_rate,modified_date) VALUES (10)'2022-10-12';
INSERT INTO auction_commission (commission_rate,modified_date) VALUES (15,'2023-01-01');

INSERT INTO auction (title, description, min_price, start_date, duration, category_id, user_account_id, status_ref_id) VALUES ('Laptop', 'Used laptop in good condition', 250.00, NOW(), 24, 1, 1, 1);
INSERT INTO auction (title, description, min_price, start_date, duration, category_id, user_account_id, status_ref_id) VALUES ('Sofa', 'Brand new sofa with warranty', 500.00, NOW(), 48, 2, 2, 1);
INSERT INTO auction (title, description, min_price, start_date, duration, category_id, user_account_id, status_ref_id) VALUES ('Shirt', 'Designer shirt', 50.00, NOW(), 12, 3, 3, 1);

INSERT INTO auction_image (image_url, auction_id) VALUES ('https://example.com/laptop.jpg', 1);
INSERT INTO auction_image (image_url, auction_id) VALUES ('https://example.com/sofa.jpg', 2);
INSERT INTO auction_image (image_url, auction_id) VALUES ('https://example.com/shirt.jpg', 3);

INSERT INTO auction_bid (user_account_id, auction_id, bid_amount) VALUES (1, 1, 300.00);
INSERT INTO auction_bid (user_account_id, auction_id, bid_amount) VALUES (2, 2, 550.00);
INSERT INTO auction_bid (user_account_id, auction_id, bid_amount) VALUES (3, 3, 75.00);