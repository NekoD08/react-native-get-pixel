# React Native Get Pixel

Returns the pixel color from an image at a given coordinate. Heavily inspired by https://github.com/spacesuitdiver/react-native-pixel-color

## Setup

```
yarn add react-native-get-pixel
react-native link react-native-get-pixel
```

### Android

Note: on latest versions of React Native, you may have an error during the Gradle build on Android (`com.android.dex.DexException: Multiple dex files define Landroid/support/v7/appcompat/R$anim`). Run `cd android && ./gradlew clean` to fix this.

## Usage example

```javascript
import { getPixelRGBA } from 'react-native-get-pixel';

getPixelRGBA('sample.png', x, y)
   .then(color => console.log(color)) // [243, 123, 0]
   .catch(err => {});
```

**NOTE:** You have to add sample.png to the Xcode project as a resource and to `src/main/assets/drawable` on Android.

## getPixelRank Example (Android only)

```javascript
import { getPixelRank } from 'react-native-get-pixel';

getPixelRank(url, x0, y0, x1, y1)
    .then(colorArr => {
      //Do soomethign with colorArray
    }).catch(err => {console.log(err);});
```

**NOTE** url can be any saved image, send path like this: "/rootFolder/otherFolder/image.jpg" the image could be ".jpg" or ".png"
