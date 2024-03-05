import { useEffect, useState } from "react";
import axios from "axios";

export const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(process.env.REACT_APP_API_URL_GET, {
          headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
        });
        const data = await response.data;
        console.log(data);
        setData(data);
      };
      getData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div data-theme="light">
      {data.map((profile) => {
        return (
          <div className="border">
            <p>
              <b>Id:</b> {profile._id}
            </p>
            <p>
              <b>Nome:</b> {profile.name}
            </p>
            <p>
              <b>Cognome:</b> {profile.surname}
            </p>
          </div>
        );
      })}
    </div>
  );
};
