// use auction1

db.auction.insertOne({
  id: 1,
  title: "Laptop",
  description: "Used laptop in good condition",
  min_price: 250,
  start_date: "2023-01-13 15:20:37.945443",
  duration: 24,
  category: {
    id: 1,
    category_name: "Electronics",
  },
  user_account: {
    id: 1,
    userkey: "#u1",
    username: "John Doe",
    email: "johndoe@example.com",
    passwd: "password123",
  },
  images: [
    {
      image_url: "https://example.com/laptop.jpg",
    },
    {
      image_url: "https://example.com/laptop1.jpg",
    },
    {
      image_url: "https://example.com/laptop2.jpg",
    },
  ],
});

db.auction_duration.insertOne({
  min_duration: 12,
  max_duration: 72,
  modified_date: "2022-01-01",
});

db.auction_commission.insertMany([
  {
    commission_rate: 12,
    modified_date: ISODate("2022-10-10T00:00:00.000Z"),
  },
  {
    commission_rate: 12,
    modified_date: ISODate("2023-01-01T00:00:00.000Z"),
  },
]);

db.auction.find();
db.auction.find({ id: 1 });

db.auction.updateOne(
  { id: 1 },
  { $push: { images: { image_url: "https://example.com/laptop3.jpg" } } }
);

db.auction_commission.aggregate([
  { $sort: { modified_date: -1 } },
  { $limit: 1 },
]);
