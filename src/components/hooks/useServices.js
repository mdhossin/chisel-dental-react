import { useEffect, useState } from "react";
// here create the custom and useing anywhere
const useServices = () => {
  const [services, setServices] = useState([]);
  // here using async await
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://mdhossin.github.io/dentaldata/dentaldata.json"
      );
      response = await response.json();
      setServices(response);
    }

    fetchMyAPI();
  }, []);
  return [services];
};

export default useServices;
