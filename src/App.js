import React, { useEffect, useState } from "react";
import Button from "./components/legos/Buttons";
import { saveToLocalStorageClean, arrayToRGB } from "./helpers/";

const App = () => {
  const [colorPalette, setColorPalette] = useState([]);

  useEffect(() => {
    console.log(arrayToRGB(colorPalette));
  });

  async function getColorPalette() {
    var url = "http://colormind.io/api/";
    var data = {
      model: "default",
      input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"],
    };

    var http = new XMLHttpRequest();

    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
        saveToLocalStorageClean(JSON.parse(http.responseText).result);
        setColorPalette(JSON.parse(http.responseText).result);
      }
    };

    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  }

  return (
    <>
      <Button onClick={getColorPalette}>Fetch</Button>
      <p>{}</p>
    </>
  );
};

export default App;
