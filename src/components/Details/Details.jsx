import axios from "axios";
import "./Details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Details = () => {
  let { id } = useParams();
  const [profile, setProfile] = useState({});
  const [experiences, setExperiences] = useState({});

  const getProfileData = async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL_GET + id, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
    });
    setProfile(response.data);
    return;
  };

  const getProfileExperiences = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL_GET + id + "/experiences",
      {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
      }
    );
    setExperiences(response.data);
    return;
  };

  useEffect(() => {
    getProfileData();
    getProfileExperiences();
  }, []);

  return (
    <div className="cont pt-5 bg-[#F3F2ED]">
      <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center md:items-start flex-wrap">
          <img
            className="w-full object-cover rounded-lg"
            src="https://picsum.photos/1280/300"
            alt="Background"
          />
          <div className="flex items-center ms-10 mt-5">
            <img
              className="rounded-full user-img w-[180px] h-[180px] md:w-[200px] md:h-[200px] border-4 border-white shadow-md"
              src={profile.image}
              alt="Profile"
            />
            <div className="ml-4">
              <h1 className="text-2xl font-bold">
                {profile.name} {profile.surname}
              </h1>
              <p className="text-gray-600">
                {profile.area} - {profile.title}
              </p>
              <div className="flex mt-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4">
                  Aggiungi contatto
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md">
                  Inviare un messaggio
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 ms-10">
          <h2 className="text-lg font-semibold">Informazioni</h2>
          <p className="text-gray-600 mt-2">{profile.bio}</p>
        </div>
        <div className="py-8 ms-10">
          <h2 className="text-lg font-semibold">Esperienze</h2>
          <p className="text-gray-600 mt-2">
            {experiences.length > 0 ? (
              <div>{experiences}</div>
            ) : (
              <div>
                <p>Nessuna esperienza lavorativa registrata</p>
              </div>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
