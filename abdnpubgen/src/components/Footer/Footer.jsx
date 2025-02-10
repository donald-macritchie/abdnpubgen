import mail from "/images/mail.svg";
import instagram from "/images/instagram.svg";
import linkedin from "/images/linkedin.svg";

const Footer = () => {
  // Get the current year dynamically using JavaScript
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="text-center border-2 border-black rounded-lg w-full max-w-[300px] mx-auto p-6 my-20">
        <p className="text-sm md:text-lg font-fd-karla mb-10">
          This site was created as a bit of fun to help you discover new places
          and enjoy good times.
        </p>
        <p className="text-sm md:text-lg font-fd-karla">
          However, we kindly remind all users to{" "}
          <strong>always drink responsibly</strong>.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-[400px] w-full mx-auto text-sm mt-4 pb-4">
        {/* Contact Section */}
        <div className="flex flex-col justify-center items-center hover:bg-[#FFFCC5] hover:border-2 hover:border-black p-2 rounded-lg">
          <a
            href="https://fineday.studio/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center h-full"
          >
            <img src={mail} alt="Contact" />
            <p>Contact</p>
          </a>
        </div>

        {/* Instagram Section */}
        <div className="flex flex-col justify-center items-center hover:bg-[#FFFCC5] hover:border-2 hover:border-black p-2 rounded-lg">
          <a
            href="https://www.instagram.com/fine.day.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center h-full"
          >
            <img src={instagram} alt="Instagram" />
            <p>Instagram</p>
          </a>
        </div>

        {/* LinkedIn Section */}
        <div className="flex flex-col justify-center items-center hover:bg-[#FFFCC5] hover:border-2 hover:border-black p-2 rounded-lg">
          <a
            href="https://www.linkedin.com/company/fine-day-studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-center items-center h-full"
          >
            <img src={linkedin} alt="LinkedIn" />
            <p>LinkedIn</p>
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
