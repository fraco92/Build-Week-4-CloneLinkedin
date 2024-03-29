import axios from "axios";
import "./Details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import { Sidebar } from "../Sidebar/Sidebar";
import { Circles } from "react-loader-spinner";

export const Details = () => {
  let { id } = useParams();
  const [profile, setProfile] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [isMe, setIsMe] = useState(false);
  const [postId, setPostId] = useState();
  const [show, setShow] = useState(false);
  const [showCircle, setShowCircle] = useState(true);
  const [editData, setEditData] = useState({});

  const getProfileExperiences = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL_GET + id + "/experiences",
        {
          headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
        }
      );
      setExperiences(response.data);
      return;
    } catch (error) {
      console.error(error);
    }
  };

  const getProfileData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL_GET + id, {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
      });
      setProfile(response.data);

      if (id === "me") {
        id = response.data._id;
        setIsMe(true);
        setPostId(id);
      }
      getProfileExperiences();
      return;
    } catch (error) {
      console.error(error);
    }
  };

  const showModalFn = (e) => {
    e.preventDefault();
    setEditData({});
    setShow(!show);
  };

  const formatDateIntoHuman = (date) => {
    const formattedDate = new Date(date);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const result = new Intl.DateTimeFormat("it-IT", options).format(
      formattedDate
    );
    return result;
  };

  const handleEditExperience = async (expId) => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/api/profile/${postId}/experiences/${expId}`,
        {
          headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
        }
      );
      if (response.status === 200) {
        setShow(!show);
        setEditData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteExperience = async (expId) => {
    const response = window.confirm(
      "Sei sicuro di voler eliminare quest'esperienza lavorativa?"
    );

    if (response) {
      try {
        const response = await axios.delete(
          `https://striveschool-api.herokuapp.com/api/profile/${postId}/experiences/${expId}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
          }
        );
        if (response.status === 200) {
          alert("Eliminato correttamente");
        } else {
          alert("Errore, riprova più tardi");
        }
      } catch (err) {
        console.error(err);
      }

      getProfileData();
    } else {
      return;
    }
    window.location.reload();
  };

  useEffect(() => {
    getProfileData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowCircle(false);
    }, 500);

    return clearTimeout();
  }, []);

  return (
    <>
      <div className="cont pt-5 bg-[#F3F2ED] flex justify-center mx-auto">
        <div
          className={
            showCircle
              ? "circle-container w-[100%] my-5 flex justify-center"
              : "hidden"
          }
        >
          <Circles
            height="80"
            width="80"
            color="#000"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
        <div
          className={
            showCircle
              ? "hidden"
              : `max-w-[828px] bg-white rounded-lg shadow-md m-0 md:me-5`
          }
        >
          <div className="relative flex flex-col md:flex-row items-center md:items-start flex-wrap">
            <div className="banner-container h-[300px]">
              <img
                className="w-full object-cover rounded-lg"
                src="https://picsum.photos/1280/300"
                alt="Background"
              />
            </div>
            <div className="flex items-center ms-10 mt-5">
              <img
                className="absolute top-[150px] object-cover rounded-full user-img w-[180px] h-[180px] md:w-[200px] md:h-[200px] border-4 border-white shadow-md"
                src={profile.image}
                alt="Profile"
              />
              <div className="pt-[50px] text-gray-600">
                <h1 className="text-2xl font-bold">
                  {profile.name} {profile.surname}
                </h1>
                <p className="text-gray-600">
                  {profile.area} - {profile.title}
                </p>
                <div className="flex mt-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4 ">
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
            <h2 className="text-gray-600 text-lg font-semibold">
              Informazioni
            </h2>
            <p className="text-gray-600 mt-2">{profile.bio}</p>
          </div>
          <div className="py-8 ms-10 text-gray-600">
            <h2 className="text-lg font-semibold">Esperienze</h2>
            {experiences.length > 0 ? (
              experiences.map((experience, i) => {
                return (
                  <div
                    key={i}
                    className="border text-gray-600 rounded p-2 my-2 flex align-center justify-between w-full"
                  >
                    <ul>
                      <li>
                        <b>Ruolo:</b> {experience.role}
                      </li>
                      <li>
                        <b>Area:</b> {experience.area}
                      </li>
                      <li>
                        <b>Azienda:</b> {experience.company}
                      </li>
                      <li>
                        <b>Descrizione:</b> {experience.description}
                      </li>
                      <li>
                        <b>Inizio:</b>{" "}
                        {formatDateIntoHuman(experience.startDate)}
                      </li>
                      <li>
                        <b>Fine:</b> {formatDateIntoHuman(experience.endDate)}
                      </li>
                    </ul>
                    <div
                      className={
                        isMe
                          ? "btn-container flex flex-wrap justify-end gap-2"
                          : "hidden"
                      }
                    >
                      <button
                        onClick={() => handleEditExperience(experience._id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4 w-[120px] md:w-1/2"
                      >
                        Modifica esperienza
                      </button>
                      <button
                        onClick={() => handleDeleteExperience(experience._id)}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mr-4 w-[120px] md:w-1/2"
                      >
                        Rimuovi esperienza
                      </button>
                    </div>
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
                  data-modal-target="crud-modal"
                  data-modal-toggle="crud-modal"
                  onClick={(e) => showModalFn(e)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4"
                >
                  Aggiungi un'esperienza lavorativa
                </button>
                <Modal
                  show={show}
                  setShow={setShow}
                  id={postId}
                  getProfileData={getProfileData}
                  username={profile.username}
                  experienceData={editData}
                  setEditData={setEditData}
                />
              </div>
            )}
          </div>
        </div>
        <Sidebar showCircle={showCircle} />
      </div>
    </>
  );
};
