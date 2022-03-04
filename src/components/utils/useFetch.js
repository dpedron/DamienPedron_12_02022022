import { useState, useEffect } from 'react';
import apiEndPoints from './apiEndPoints';

/**
 * @description Fetch data
 * @param {number} userID
 * @param {string} dataType
 * @returns {Object} userData
 * @returns {boolean} isDataLoading
 * @returns {boolean} error
 */

function useFetch(userId, dataType) {
  const [userData, setUserData] = useState({});
  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = apiEndPoints(userId, dataType);

  useEffect(() => {
    if (!url) return;
    setDataLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const userData = await response.json();
        setUserData(userData);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { userData, isDataLoading, error };
}

export default useFetch;
