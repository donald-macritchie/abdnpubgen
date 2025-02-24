import mail from "/images/mail.svg";
import instagram from "/images/instagram.svg";
import linkedin from "/images/linkedin.svg";
import beerMug from "/images/beer.png";
import wineGlass from "/images/wine-glass.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="relative bg-[#FFFCC5] text-center border-2 border-black rounded-lg w-full max-w-[300px] mx-auto p-6 mt-20 mb-50 text-sm md:text-lg lg:text-2xl ">
        <p className="font-fd-karla mb-10">
          This site was created as a bit of fun to help you discover new places
          and enjoy good times.
        </p>
        <p className="font-fd-karla">
          However, we kindly remind all users to{" "}
          <strong>always drink responsibly</strong>.
        </p>
        <img src={beerMug} alt="" className="absolute w-20 -left-12 -top-10" />
        <img
          src={wineGlass}
          alt=""
          className="absolute w-20 -right-12 -bottom-10"
        />
      </div>

      <div className="grid grid-cols-3 gap-10 max-w-[400px] w-full mx-auto text-sm mt-4 pb-4">
        {/* Contact Section */}
        <div className="flex flex-col justify-center items-center hover:bg-[#FFFCC5] hover:border-2 hover:border-black p-20 rounded-lg">
          <a
            href="https://fineday.studio/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center h-full"
          >
            <img src={mail} className="lg:w-15" alt="contact" />
            <p className="text-2xl">Contact</p>
          </a>
        </div>

        {/* Instagram Section */}
        <div className="flex flex-col justify-center items-center hover:bg-[#FFFCC5] hover:border-2 hover:border-black p-20 rounded-lg">
          <a
            href="https://www.instagram.com/fine.day.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center h-full"
          >
            <img src={instagram} className="lg:w-15" alt="Instagram" />
            <p className="text-2xl">Instagram</p>
          </a>
        </div>

        {/* LinkedIn Section */}
        <div className="flex flex-col justify-center items-center hover:bg-[#FFFCC5] hover:border-2 hover:border-black p-20 rounded-lg">
          <a
            href="https://www.linkedin.com/company/fine-day-studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center h-full"
          >
            <img src={linkedin} className="lg:w-15" alt="Instagram" />
            <p className="text-2xl">LinkedIn</p>
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <hr />
      <div className="text-center py-3">
        <p className="text-sm font-fd-karla">
          &copy; {currentYear} Fine Day Studio. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
