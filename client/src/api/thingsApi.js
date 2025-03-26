import { useEffect, useState } from "react";
import request from "../utils/request.js";
import useAuth from "../hooks/useAuth.js";

const baseUrl = 'http://localhost:3030/data/things';

export const useFetchThings = () => {

    const [things, setThings] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
        .then(response => {
            if(response.code === 404){
                setThings([]);
            } else {
                setThings(Array.isArray(response) ? response : []);
              }
            })
            .catch(err => {
                console.log(err);
                setThings([])
            }

            )
    }, [])

    return {
        things
    }

};

export const useCreateThing = () => {

    const { request } = useAuth();

    const create = (thingData) => request.post(baseUrl, thingData);

    return {
        create
    }

};

export const useOneThing = (thingId) => {
    const [thing, setThing] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${thingId}`)
        .then(setThing)
    },[thingId]);

    return{
        thing
    }

};

export const useThingsByFilter = (category, purpose) => {

    const [filteredThings, setFilteredThings] = useState([]);

    useEffect(() => {
        const fetchThings = async () => {
          try {
            const result = await request.get(baseUrl); 
            const things = Object.values(result); 
    

            const filtered = things.filter((thing) => {
              const categoryMatch = category ? thing.category === category : true;
              const purposeMatch = purpose ? thing.purpose === purpose : true;
              return categoryMatch && purposeMatch; 
            });
    
            setFilteredThings(filtered);
          } catch (error) {
            console.error("Error fetching filtered things:", error);
          }
        };
    
        fetchThings(); 
      }, [category, purpose]); 
    
      return { 
        filteredThings 
    };
};

