import request from "../utils/request.js";


const baseUrl = 'http://localhost:3030/jsonstore/things';

export default {

    async getAllThings(){
        const result = await request.get(baseUrl);

        const things = Object.values(result);

        return things;
    },

    addThing(thingData){
        return request.post(baseUrl, thingData)
    },

}