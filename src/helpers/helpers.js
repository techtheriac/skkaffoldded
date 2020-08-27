const { compose } = require("sanctuary");

const getResolution = () => ({
  width: window.screen.width * window.devicePixelRatio,
  height: window.screen.height * window.devicePixelRatio,
});

const arrayToRGB = (array) => {
  return array.map(
    (arrayItem) => `rgb(${arrayItem[0]}, ${arrayItem[1]}, ${arrayItem[2]})`
  );
};

const saveToLocalStorage = (palette) => {
  localStorage.setItem("palette", JSON.stringify(palette));
};

const saveToLocalStorageClean = compose(saveToLocalStorage)(arrayToRGB);

export { getResolution, saveToLocalStorageClean, arrayToRGB };
