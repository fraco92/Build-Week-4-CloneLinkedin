import "./Card.css";

export const Card = ({ props }) => {
  const { name, surname, title, image } = props;
  return (
    <div class="hover:scale-[1.02] transition-transform duration-500 mt-16 bg-white shadow-xl rounded-lg text-gray-900 cursor-pointer card">
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
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
          Collegati
        </button>
      </div>
    </div>
  );
};
