import { useEffect, useState, createContext } from 'react';
import clientAxios from '../config/axios';

const Context = createContext();

const Provider = ({ children }) => {
	const [data, setData] = useState();

	useEffect(() => {
        clientAxios.get('/community')
          .then(response => {
            setData(response.data); 
          })
          .catch(error => {
            console.log(error);
          });

      }, []);

	return (
		<Context.Provider value={{ 
                data, 
                setData 
        }}>
			{children}
		</Context.Provider>
	);
};

export { Provider };

export default Context;