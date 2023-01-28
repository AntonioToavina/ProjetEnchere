INSERT INTO user_account (username, email, password) VALUES ('John Doe', 'johndoe@example.com', 'password123');
INSERT INTO user_account (username, email, password) VALUES ('Jane Smith', 'janesmith@example.com', 'password456');
INSERT INTO user_account (username, email, password) VALUES ('Bob Johnson', 'bobjohnson@example.com', 'password789');

INSERT INTO account_recharge (user_account_id, recharge_amount) VALUES (1, 100000.00);
INSERT INTO account_recharge (user_account_id, recharge_amount) VALUES (2, 50000.00);
INSERT INTO account_recharge (user_account_id, recharge_amount) VALUES (3, 75000.00);

INSERT INTO category (id,category_name) VALUES (1,'Electronics');
INSERT INTO category (id,category_name) VALUES (2,'Furniture');
INSERT INTO category (id,category_name) VALUES (3,'Clothes');

INSERT INTO auction (title, description, min_price, start_date, duration, category_id, user_account_id) VALUES ('Laptop', 'Used laptop in good condition', 250.00, NOW(), 24, 1, 1);
INSERT INTO auction (title, description, min_price, start_date, duration, category_id, user_account_id) VALUES ('Sofa', 'Brand new sofa with warranty', 500.00, NOW(), 48, 2, 2);
INSERT INTO auction (title, description, min_price, start_date, duration, category_id, user_account_id) VALUES ('Shirt', 'Designer shirt', 50.00, NOW(), 12, 3, 3);

INSERT INTO auction_bid (user_account_id, auction_id, bid_amount) VALUES (1, 1, 300.00);
INSERT INTO auction_bid (user_account_id, auction_id, bid_amount) VALUES (2, 2, 550.00);
INSERT INTO auction_bid (user_account_id, auction_id, bid_amount) VALUES (3, 3, 75.00);

INSERT INTO admin (adminkey, firstname, lastname, email, password) VALUES ('#ad1', 'John', 'Doe', 'johndoe@example.com', 'password123');
INSERT INTO admin (adminkey, firstname, lastname, email, password) VALUES ('#ad2', 'Jane', 'Smith', 'janesmith@example.com', 'password456');
INSERT INTO admin (adminkey, firstname, lastname, email, password) VALUES ('#ad3', 'Bob', 'Johnson', 'bobjohnson@example.com', 'password789');

INSERT INTO account_recharge_validation (account_recharge_id, admin_id, status) VALUES (1, 1, 5);
INSERT INTO account_recharge_validation (account_recharge_id, admin_id, status) VALUES (2, 2, 5);
INSERT INTO account_recharge_validation (account_recharge_id, admin_id, status) VALUES (3, 3, -5);

