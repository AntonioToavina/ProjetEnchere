import { useIonViewWillEnter } from "@ionic/react";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Field from "./Field";

const FieldNewEnchere = () => {
  const [listCategory, setListCategory] = useState<any[]>([]);
  const [auctionDuration, setAuctionDuration] = useState<any>();

  const getData = () => {
    var content = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:8080/categories", content)
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) alert(json.error);
        else {
          console.log(json.data);

          setListCategory(json.data);
        }
      });
  };

  const getData_AuctionDuration = () => {
    var content = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:8081/auction_durations/last", content)
      .then((response) => response.json())
      .then((json) => {
        if ("error" in json) alert(json.error);
        else {
          console.log(json.data);
          setAuctionDuration(json.data);
        }
      });
  };

  useEffect(() => {
    getData();
    getData_AuctionDuration();
  }, []);

  return (
    <>
      <Grid container>
        <Grid xs={12}>
          <Field
            listCategory={listCategory}
            listAuctionDuration={auctionDuration}
          />
          <br />
        </Grid>
      </Grid>
    </>
  );
};

export default FieldNewEnchere;
