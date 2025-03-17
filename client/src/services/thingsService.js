import request from "../utils/request.js";


let baseUrl = 'http://localhost:3030/jsonstore/things';

export default {

    async getAllThings(){
        const result = await request.get(baseUrl);

        const things = Object.values(result);

        return things;
    },

    addThing(thingData){
        return request.post(baseUrl, thingData)
    },

    async thingsByFilter(category, purpose){

        const result = await request.get(baseUrl)  

        const things = Object.values(result);

        

        return things.filter((thing) => {
            const categoryMatch = category ? thing.category === category : true;
            const purposeMatch = purpose ? thing.purpose === purpose : true;
            return categoryMatch && purposeMatch
          });
        }
    
}

