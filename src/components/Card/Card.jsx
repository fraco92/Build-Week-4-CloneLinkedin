export const Card = ({ props }) => {
  const { name, surname, title, image } = props;
  return (
    <div class="hover:scale-[1.04] transition-transform duration-500 mt-16 bg-white shadow-xl rounded-lg text-gray-900 cursor-pointer card">
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
        <button class="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
          Collegati
        </button>
      </div>
    </div>
  );
};
