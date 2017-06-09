export default function (location) {
  return {
    cityName: location.cityName,
    imageUrl: location.imageUrl[0],
    price: `${location.price}$`,
    duration: `${location.travelMode} - ${location.duration}`,
    travelmode: location.travelMode,
    deeplink: '',
    content: location.content,
  };
}
