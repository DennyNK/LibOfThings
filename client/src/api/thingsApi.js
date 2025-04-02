import { useEffect, useState } from "react";
import request from "../utils/request.js";
import useAuth from "../hooks/useAuth.js";

const baseUrl = 'http://localhost:3030/data/things';

export const useFetchThings = () => {

    const [things, setThings] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchThings = async () => {
            try {
                const response = await request.get(baseUrl);

                if (response.code === 404) {
                    setThings([]); 
                } else {
                    setThings(Array.isArray(response) ? response : []); 
                }
            } catch (err) {
                console.log(err);
                setError("Failed to fetch things. Please try again later."); 
                setThings([]); 
            }
        };

        fetchThings(); 

    }, []);

    return {
        things,
        error
    }

};

export const useCreateThing = () => {

    const { request } = useAuth();  
    const [error, setError] = useState(null);  

    const create = async (thingData) => {
        try {
            const result = await request.post(baseUrl, thingData); 
            return result; 
        } catch (err) {
            console.log(err); 
            setError("Failed to create the item. Please try again later."); 
   
        }
    };

    return {
        create,
        error,  
    };

};

export const useOneThing = (thingId) => {
    const [thing, setThing] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchThing = async () => {
            try {
                const response = await request.get(`${baseUrl}/${thingId}`);
                setThing(response);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setError("Failed to fetch the item. Please try again later.");
                setIsLoading(false);
            }
        };

        fetchThing();
    },[thingId]);

    return{
        thing, isLoading, error
    }

};

export const useThingsByFilter = (category, purpose) => {

    const [filteredThings, setFilteredThings] = useState([]);
    const [error, setError] = useState(null);

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
          } catch (err) {
            console.log(err);
            setError("Failed to fetch things. Please try again later.")
          }
        };
    
        fetchThings(); 
      }, [category, purpose]); 
    
      return { 
        filteredThings,
        error
    };
};

export const useDeleteThing = () => {

    const { request } = useAuth()

    const remove = (thingId) => {
       return request.delete(`${baseUrl}/${thingId}`);
    }

    return {
        remove
    }

};

export const useEditThing = () => {
    const { request } = useAuth();
    const [error, setError] = useState(null);

    
        const edit = async (thingId, thingData) => {
            
            try {
                const result = await request.put(`${baseUrl}/${thingId}`, { ...thingData, _id: thingId })
                return result }
            catch(err){
                console.log(err);
                setError('Failed to edit. Please try again');
            }
         } 
    
    return {
        edit,
        error
    }

}

export const useSearchThing = (searchTerm) => {
    const { request } = useAuth(); 
    const [foundThings, setFoundThings] = useState([]);
    const [error, setError] = useState(null);

    const searchThings = async () => {
        if (!searchTerm) {
            setFoundThings([]);
            return;
        }

        try {
            const response = await request.get(baseUrl); 
            const filteredThings = response.filter(thing =>
                thing.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFoundThings(filteredThings);
        } catch (error) {
            console.log(error);
            setError('Failed to search. Please try again');
        }
    };

    return {
        foundThings,
        searchThings,
        error
    };
};

