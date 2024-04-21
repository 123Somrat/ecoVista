const locationData = [
  { name: "Berlin", longitude: 13.405, latitude: 52.52 },
  { name: "Munich", longitude: 11.582, latitude: 48.1351 },
  { name: "Hamburg", longitude: 9.9937, latitude: 53.5511 },
  { name: "Cologne", longitude: 6.9603, latitude: 50.9375 },
  { name: "Frankfurt", longitude: 8.6821, latitude: 50.1109 },
  { name: "Stuttgart", longitude: 9.1815, latitude: 48.7758 },
  { name: "Düsseldorf", longitude: 6.7735, latitude: 51.2277 },
  { name: "Dresden", longitude: 13.7373, latitude: 51.0504 },
  { name: "Leipzig", longitude: 12.3731, latitude: 51.3397 },
  { name: "Hannover", longitude: 9.732, latitude: 52.3705 },
  { name: "Nuremberg", longitude: 11.0775, latitude: 49.4521 },
  { name: "Bremen", longitude: 8.8017, latitude: 53.0793 },
  { name: "Bonn", longitude: 7.0982, latitude: 50.7374 },
  { name: "Dortmund", longitude: 7.4653, latitude: 51.5139 },
  { name: "Essen", longitude: 7.0166, latitude: 51.4566 },
];

// Define location DataType
type location = {
  name: string;
  longitude: number;
  latitude: number;
};

// Get All Locations
const getLocations = () => {
  return locationData;
};

// Get single location

const getLocationByName = (location: string) => {
  // Return null if location not found
  if (!location) return null;

  // Return Location
  const foundLocation: location | undefined = locationData.find(
    (locationData: location) =>
      locationData.name.toLocaleLowerCase() === location.toLocaleLowerCase()
  );

  return foundLocation || {}

};


export { getLocations , getLocationByName}