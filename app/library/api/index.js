import axios from 'axios';

export const fetchData = async (url = '', setValues = () => { }) => {
    console.log('url', url);
    try {
        const response = await axios.get(url);
        setValues(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};