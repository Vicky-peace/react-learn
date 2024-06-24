import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type UseFetchReturnType = [
  User[],
  boolean,
  Error | null
];

const useFetch = (): UseFetchReturnType => {
  const [fetchData, setFetchedData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Initially true until data is fetched
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setError(null);
      setLoading(true);

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
          signal: abortController.signal
        });
        setFetchedData(response.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err as Error); // Casting the error to Error type
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      abortController.abort();
    };
  }, []);
 return [fetchData, loading, error];
}
export default useFetch;
