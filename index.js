import {
  NativeModules,
} from 'react-native';

export function getPixelRGBA(imageName, x, y) {
  return new Promise((resolve, reject) => {
      NativeModules.RNPixelColor.getPixelRGBAofImage(imageName, x, y, (err, color) => {
        if (err) {
          return reject(err);
        }
        resolve(color);
      });
  });
}

export function getPixelRGBAPolar(imageName, angle, radius) {
  return new Promise((resolve, reject) => {
      NativeModules.RNPixelColor.getPixelRGBAPolarOfImage(imageName, angle, radius, (err, color) => {
        if (err) {
          return reject(err);
        }
        resolve(color);
      });
  });
}

export function findAngleOfNearestColor(imageName, minAngle, maxAngle, radius, targetColor) {
  return new Promise((resolve, reject) => {
      NativeModules.RNPixelColor.findAngleOfNearestColor(imageName, minAngle, maxAngle, radius, targetColor, (err, angle) => {
        if (err) {
          return reject(err);
        }
        resolve(angle);
      });
  });
}

export function getPixelRank(imageName, x0, y0, x1, y1) {
  return new Promise((resolve, reject) => {
      NativeModules.RNPixelColor.getPixelRankofImage(imageName, x0, y0, x1, y1, (err, colorArr) => {
        if (err) {
          return reject(err);
        }
        resolve(colorArr);
      });
  });
}

export function getPixelRankHSV(imageName, x0, y0, x1, y1) {
  return new Promise((resolve, reject) => {
    NativeModules.RNPixelColor.getPixelRankHSVofImage(imageName, x0, y0, x1, y1, (err, colorArrHSV) => {
      if (err) {
        return reject(err);
      }
      resolve(colorArrHSV);
    });
  });
}

export function getPixelHSV(imageName, x, y) {
  return new Promise((resolve, reject) => {
    NativeModules.RNPixelColor.getPixelHSVofImage(imageName, x, y, (err, pixelHSV) => {
      if (err) {
        return reject(err);
      }
      resolve(pixelHSV);
    });
  });
}
