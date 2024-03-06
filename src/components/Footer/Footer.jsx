export const Footer = () => {
  return (
    <footer className="text-[#696969] bg-[#F3F2ED]">
      <div class="mx-[350px] w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="grid grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-3">
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
        <hr class="my-6 border-[#696969] sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-[#696969] sm:text-cente">
            <a class="hover:underline cursor-pointer">
              LinkedIn Corporation © 2024
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
