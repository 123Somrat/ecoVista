export const getLocationInfoData = async (lat:string,lon:string)=>{
    try{
       const response = await fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`)
       const location = await response.json()
       return location
    }catch(error){
        console.log(error)
    }
}