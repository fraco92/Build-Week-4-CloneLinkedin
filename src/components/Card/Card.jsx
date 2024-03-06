import "./Card.css";

export const Card = ({ props }) => {
  const { name, surname, title, image } = props;
  return (
    <div class="min-w-[200px] hover:scale-[1.02] transition-transform duration-500 mt-16 bg-white shadow-xl rounded-lg text-gray-900 cursor-pointer card">
      <div class="rounded-t-lg h-32 overflow-hidden">
        <img
          class="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img
          class="object-cover object-center h-32"
          src={image}
          alt="Woman looking front"
        />
      </div>
      <div class="text-center mt-2">
        <h2 class="font-semibold">{name + " " + surname}</h2>
        <p class="text-gray-500">{title}</p>
      </div>
      <div class="p-4 border-t mx-8 mt-2">
        <button class="flex items-center mx-auto rounded-full bg-white font-semibold px-6 py-2 border-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
          </svg>
          Collegati
        </button>
      </div>
    </div>
  );
};
