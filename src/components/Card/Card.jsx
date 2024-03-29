import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ props, cover_img }) => {
  const { name, surname, title, image, _id } = props;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/details/${_id}`)}
      class="min-w-[190px] transform hover:scale-[1.02] hover:shadow-md transition-transform duration-500 bg-white border rounded-lg text-gray-900 cursor-pointer card"
    >
      <div class="rounded-t-lg h-32 overflow-hidden">
        <img
          class="object-cover object-top w-full"
          src={cover_img}
          alt="Mountain"
        />
      </div>
      <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          class="object-cover object-center h-32"
          src={image}
          alt="user profile"
        />
      </div>
      <div class="text-center mt-2">
        <h2 class="font-semibold">{name + " " + surname}</h2>
        <p class="text-gray-500">{title}</p>
      </div>
      <div class="p-4 border-t mx-8 mt-2 flex justify-center items-center">
        <button class="flex align-middle justify-center items-center rounded-full bg-white font-light px-6 py-1 border-btn">
          <ion-icon name="person-add"></ion-icon>
          Collegati
        </button>
      </div>
    </div>
  );
};
