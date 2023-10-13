import { CiPhone, CiMail } from "react-icons/ci";

const Contact = () => {
  const iconTextClass = "font-poppins text-base font-medium";
  const textClass = "font-poppins text-sm font-normal mb-4 last:mb-0";
  const inputClass =
    "grow rounded bg-searchInput p-4 outline-0 placeholder:font-poppins placeholder:text-xs placeholder:align-baseline placeholder:opacity-50";

  return (
    <div className="flex flex-col xl:flex-row gap-7 mt-20 mb-36">
      <div className="px-8 pt-10 pb-12 rounded shadow w-full xl:w-1/4">
        <div>
          <div className="flex gap-4 mb-6">
            <CiPhone className="w-6 h-6" />

            <p className={iconTextClass}>Call To Us</p>
          </div>

          <p className={textClass}>We are available 24/7, 7 days a week.</p>

          <p className={textClass}>Phone: +8801611112222</p>
        </div>

        <div className="bg-black w-full h-px my-8 opacity-50"></div>

        <div>
          <div className="flex gap-4 mb-6">
            <CiMail className="w-6 h-6" />

            <p className={iconTextClass}>Write To Us</p>
          </div>

          <p className={textClass}>
            Fill out our form and we will contact you within 24 hours.
          </p>

          <p className={textClass}>Emails: customer@exclusive.com</p>

          <p className={textClass}>Emails: support@exclusive.com</p>
        </div>
      </div>

      <div className="px-8 pt-10 pb-12 rounded shadow w-full xl:w-3/4">
        <form>
          <div className="flex flex-col 2xl:flex-row gap-4">
            <input type="text" className={inputClass} placeholder="Your Name" />

            <input
              type="email"
              className={inputClass}
              placeholder="Your Email"
            />

            <input type="tel" className={inputClass} placeholder="Your Phone" />
          </div>

          <textarea
            className="w-full resize-none my-8 rounded bg-searchInput p-4 outline-0 placeholder:font-poppins placeholder:text-xs placeholder:align-baseline placeholder:opacity-50"
            placeholder="Your Message"
          />

          <div className="relative">
            <button className="absolute right-0 px-12 py-4 bg-red-600 font-poppins text-base font-medium text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
