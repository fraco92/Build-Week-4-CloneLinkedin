export const Footer = () => {
  return (
    <footer className="text-[#696969] bg-[#F3F2ED]">
      <div class="p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="m-auto justify-center grid gap-8 sm:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap">
            <div>
              <ul class="font-medium">
                <li class="mb-4">
                  <a class="hover:underline cursor-pointer">Informazioni</a>
                </li>
                <li className="mb-4">
                  <a class="hover:underline cursor-pointer">
                    Linee guida della community
                  </a>
                </li>
                <li className="mb-4">
                  <a class="hover:underline cursor-pointer">
                    Privacy e condizioni
                  </a>
                </li>
                <li className="mb-4">
                  <a class="hover:underline cursor-pointer">Sales Solutions</a>
                </li>
                <li className="mb-4">
                  <a class="hover:underline cursor-pointer">Centro sicurezza</a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="font-medium">
                <li class="mb-4">
                  <a class="hover:underline cursor-pointer ">Accessibilità</a>
                </li>
                <li className="mb-4">
                  <a class="hover:underline cursor-pointer">Carriera</a>
                </li>
                <li className="mb-4">
                  <a class="hover:underline cursor-pointer">
                    Opzioni per gli annunci pubblicitari
                  </a>
                </li>
                <li className="mb-4">
                  <a class="hover:underline cursor-pointer">Mobile</a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="font-medium">
                <li class="mb-4">
                  <a class="hover:underline cursor-pointer">Talent Solutions</a>
                </li>
                <li className="mb-4">
                  <a class="hover:underline cursor-pointer">
                    Soluzioni di marketing
                  </a>
                </li>
                <li className="mb-4">
                  <a class="hover:underline cursor-pointer">Pubblicità</a>
                </li>
                <li className="mb-4">
                  <a class="hover:underline cursor-pointer">Piccole imprese</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-[#696969] sm:mx-auto lg:my-8 w-2/4" />
        <div class="flex justify-center">
          <span class="text-sm text-[#696969] sm:text-center">
            <a class="hover:underline cursor-pointer">
              LinkedIn Corporation © 2024
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
