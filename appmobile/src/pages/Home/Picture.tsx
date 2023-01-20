import { IonImg, IonFab, IonButton } from "@ionic/react";
import React, { useEffect } from "react";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { Camera, CameraResultType } from "@capacitor/camera";

interface Container {
  setPictures: any;
  pictures: any;
}

const Picture: React.FC<Container> = ({ setPictures, pictures }) => {
  defineCustomElements(window);

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });

    const newPicture: any = image.base64String ? image.base64String : "tsity";
    setPictures([...pictures, newPicture]);
  };

  return (
    <>
      <IonButton color="primary" onClick={() => takePicture()}>
        Importer
      </IonButton>
    </>
  );
};

export default Picture;
