// Fetching location
export const getLocationInfoData = async (lat: string, lon: string) => {
  try {
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
    );
    const location = await response.json();
    return location;
  } catch (error) {
    console.log(error);
  }
};

// Fetching location list
export const getLocationLanList = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/location");
    const location = await response.json();
    return location;
  } catch (error) {
    console.log(error);
  }
};

// Fetching single location
export const getLocationName = async (locationName: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    const locationNam = await response.json();
    return locationNam;
  } catch (error) {
    console.log(error);
  }
};
