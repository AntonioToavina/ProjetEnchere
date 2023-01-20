import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { string } from "prop-types";
import { useEffect, useState } from "react";
import AnimateButton from "../../components/@extended/AnimateButton";
import { Auction } from "../../Model/Auction";
import Picture from "./Picture";

interface Container {
  listCategory: any[];
  listAuctionDuration: any;
}

const Field: React.FC<Container> = ({ listCategory, listAuctionDuration }) => {
  const auction = new Auction();
  const [title, setTitle] = useState<any>();
  const [description, setDescription] = useState<any>();
  const [min_price, setMin_price] = useState<any>();
  const [duration, setDuration] = useState<any>();
  const [categorie, setCategorie] = useState<any>();

  const [picture, setPicture] = useState<any[]>([]);
  let user = JSON.parse(sessionStorage.getItem("user") || "{}");

  useEffect(() => {
    if (picture.length != 0) alert("Votre image a ete pris en compte");
  }, [picture]);

  const sendEnchere_Postgresql = async () => {
    console.log(auction.duration);

    var content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "",
      },
      body: "",
    };
    auction.user_account = user;
    content.body = JSON.stringify({
      title: title,
      description: description,
      min_price: min_price,
      duration: duration,
      category: {
        id: categorie,
      },
      user_account: {
        id: user.user_account.id,
      },
    });
    content.headers.Authorization = "Bearer " + user.token;
    fetch(
      "http://localhost:8080/auctions?min_duration=" +
        listAuctionDuration.min_duration +
        "&&max_duration=" +
        listAuctionDuration.max_duration,
      content
    )
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) alert(json.error);
        else {
          alert(json.data);
        }
      });
  };

  const sendEnchere_MongoDB = () => {
    var content = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    };

    content.body = JSON.stringify({
      title: title,
      description: description,
      min_price: min_price,
      duration: duration,
      category: {
        id: categorie,
        category_name: listCategory.filter(
          (e) => e.id === parseInt(categorie)
        )[0].category_name,
      },
      user_account: {
        id: user.user_account.id,
        userkey: user.user_account.userkey,
        username: user.user_account.username,
        email: user.user_account.email,
        password: user.user_account.password,
      },
      images: picture,
    });
    console.log(content.body);

    fetch("http://localhost:8081/auctions", content)
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) alert(json.error);
        else {
          console.log(json.data);
        }
      });
  };

  const handleClick = async () => {
    sendEnchere_Postgresql();
    sendEnchere_MongoDB();
  };

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Creation enchere</Typography>
        </Grid>
        <Grid item />
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={6} lg={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="firstname-signup">Titre</InputLabel>
            <OutlinedInput
              id="firstname-login"
              type="textarea"
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
          </Stack>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="firstname-signup">Description</InputLabel>
            <OutlinedInput
              id="firstname-login"
              type="textarea"
              fullWidth
              onChange={(e) => setDescription(e.target.value)}
            />
          </Stack>
        </Grid>
        <Grid item xs={6} md={1}>
          <Stack spacing={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={(e) => setCategorie(e.target.value)}
              >
                {listCategory?.map((e, index) => (
                  <MenuItem key={index} value={e.id}>
                    {e.category_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={6} md={1}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Prix mise Enchere</InputLabel>
            <OutlinedInput
              fullWidth
              id="lastname-signup"
              type="number"
              onChange={(e) => setMin_price(e.target.value)}
            />
          </Stack>
        </Grid>
        <Grid item xs={6} md={1}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Duree</InputLabel>
            <OutlinedInput
              fullWidth
              id="lastname-signup"
              type="number"
              onChange={(e) => setDuration(e.target.value)}
            />
          </Stack>
        </Grid>

        <Grid item xs={6} md={1}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Importer photo</InputLabel>
            <Picture setPictures={setPicture} pictures={picture} />
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <AnimateButton type={undefined}>
            <Button
              fullWidth
              size="large"
              type="button"
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Search
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Field;
