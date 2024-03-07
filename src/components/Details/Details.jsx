import axios from "axios";
import "./Details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Details = () => {
  let { id } = useParams();
  const [profile, setProfile] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [isMe, setIsMe] = useState(false);
  const [putId, setPutId] = useState();

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

  const getProfileData = async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL_GET + id, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
    });
    setProfile(response.data);

    if (id === "me") {
      id = response.data._id;
      setIsMe(true);
      setPutId(id);
    }
    getProfileExperiences();
    console.log(experiences);
    return;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const givenExperience = {
      role: "CTO",
      company: "OnMyOwn",
      startDate: "2019-06-16",
      endDate: "2019-09-16",
      description: "doing stuff",
      area: "Napoli",
      username: "ang",
    };

    console.log(id);

    try {
      await axios.post(
        `https://striveschool-api.herokuapp.com/api/profile/${putId}/experiences`,
        givenExperience,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      getProfileData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfileData();
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
          {experiences.length > 0 ? (
            experiences.map((experience, i) => {
              return (
                <div key={i} className="border text-gray-600 rounded p-2 w-1/2">
                  <ul>
                    <li>
                      <b>Id:</b> {experience._id}
                    </li>
                    <li>
                      <b>Ruolo:</b> {experience.role}
                    </li>
                    <li>
                      <b>Azienda:</b> {experience.company}
                    </li>
                    <li>
                      <b>Inizio:</b> {experience.startDate}
                    </li>
                    <li>
                      <b>Fine:</b> {experience.endDate}
                    </li>
                  </ul>
                </div>
              );
            })
          ) : (
            <div className="text-gray-600">
              <p>Nessuna esperienza lavorativa registrata</p>
            </div>
          )}
          {isMe && (
            <div className="text-gray-600 mt-5">
              <button
                onClick={(e) => handleSave(e)}
                className="btn bg-slate-400 text-white border-none"
              >
                Aggiungi un'esperienza lavorativa
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
