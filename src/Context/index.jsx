import { useContext, createContext, useState, useEffect } from "react";
import { getWeatherData } from '../Services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StateContext = createContext();

const notFound = () => toast.error("Address not found");

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Chandigarh');
    const [thisLocation, setLocation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // fetch api
    const fetchWeather = async () => {
        setIsLoading(true);
        try {
            const response = await getWeatherData(place);
            const thisData = Object.values(response.data.locations)[0];
            setLocation(thisData.address);
            setValues(thisData.values);
            setWeather(thisData.values[0]);
        } catch (e) {
            console.error(e);
            notFound();
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, [place]);

    useEffect(() => {
        console.log(values);
    }, [values]);

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place,
            isLoading
        }}>
            {children}
            <ToastContainer />
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);