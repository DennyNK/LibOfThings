import request from "../utils/request.js";


const baseUrl = 'http://localhost:3030/jsonstore/things';

export default {

    addThing(thingData){
        return request.post(baseUrl, thingData)
    },

}