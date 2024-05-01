import axios from 'axios';

export const fetchData = async (url = '', setValues = () => { }) => {
    try {
        const response = await axios.get(url);
        if (response.data) {
            setValues(response.data);
        } else {
            setValues(response);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};