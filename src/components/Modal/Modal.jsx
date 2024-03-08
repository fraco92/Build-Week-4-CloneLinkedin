import "./Modal.css";
import axios from "axios";
import { useState, useEffect } from "react";

export const Modal = ({
  show,
  setShow,
  id,
  getProfileData,
  username,
  experienceData,
}) => {
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    username: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (experienceData) {
      setFormData({
        role: experienceData.role || "",
        company: experienceData.company || "",
        startDate: experienceData.startDate || "",
        endDate: experienceData.endDate || "",
        description: experienceData.description || "",
        area: experienceData.area || "",
        username: experienceData.username || "",
      });
    }
  }, [experienceData]);

  const handleSave = async (e) => {
    e.preventDefault();
    const givenExperience = {
      ...formData,
      username: username,
    };

    if (e.target.innerText.includes("Aggiorna")) {
      console.log(formData);
      try {
        await axios.put(
          `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${experienceData._id}`,
          givenExperience,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        setShow(false);
        getProfileData();
        document.getElementById("role").value = "";
        document.getElementById("company").value = "";
        document.getElementById("startDate").value = "";
        document.getElementById("endDate").value = "";
        document.getElementById("description").value = "";
        document.getElementById("area").value = "";
      } catch (error) {
        console.error(error);
      }
      window.location.reload();
    } else {
      try {
        await axios.post(
          `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
          givenExperience,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        setShow(false);
        getProfileData();
        document.getElementById("role").value = "";
        document.getElementById("company").value = "";
        document.getElementById("startDate").value = "";
        document.getElementById("endDate").value = "";
        document.getElementById("description").value = "";
        document.getElementById("area").value = "";
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div
      id="crud-modal"
      tabindex="-1"
      aria-hidden="true"
      className={
        show
          ? "overlay overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          : "hidden"
      }
    >
      <div className="relative p-4 w-full max-w-md max-h-full m-auto">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <h3 className="text-lg font-semibold text-gray-900">
              Aggiungi una nuova esperienza lavorativa
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
              data-modal-toggle="crud-modal"
              onClick={() => setShow(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Ruolo
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="role"
                  id="role"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Ruolo"
                  required
                  defaultValue={experienceData.role}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="area"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Area
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="area"
                  id="area"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Area"
                  required
                  defaultValue={experienceData.area}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Azienda
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="company"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Azienda"
                  required
                  defaultValue={experienceData.company}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Descrizione
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="description"
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Descrizione"
                  required
                  defaultValue={experienceData.description}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="startDate"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Data d'inizio
                </label>
                <div className="relative max-w-sm">
                  <div className="absolute inset-y-0 start-0 flex items-center py-10 ps-3.5 pointer-events-none"></div>
                  <input
                    defaultValue={experienceData.startDate}
                    name="startDate"
                    id="startDate"
                    onChange={handleInputChange}
                    datepicker
                    type="date"
                    className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="endDate"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Data di fine
                </label>
                <div className="relative max-w-sm">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
                  <input
                    defaultValue={experienceData.endDate}
                    name="endDate"
                    id="endDate"
                    onChange={handleInputChange}
                    datepicker
                    type="date"
                    className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>
              </div>
            </div>
            <button
              onClick={(e) => handleSave(e)}
              type="button"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {experienceData.role === undefined
                ? "Aggiungi esperienza lavorativa"
                : "Aggiorna esperienza lavorativa"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
