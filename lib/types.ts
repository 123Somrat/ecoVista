
export interface SearchParamsDetails {
    longitude: string;
    latitude: string;
  }
  
  // Define an interface for the searchParams prop which includes the nested searchParams
  export interface SearchParams {
    params: string;
    searchParams: SearchParamsDetails;
  }

  // Define latitude and longitude types
  export type propTypes = {
    lat: string;
    lon: string;
  };

