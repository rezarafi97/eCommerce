import { Link } from "react-router-dom";
import { CiFacebook, CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";

const FooterDownload = () => {
  return (
    <div>
      <ul>
        <li className="text-white text-xl font-poppins font-medium mb-6">
          Download App
        </li>
        <li className="text-white font-poppins font-normal text-xs text-opacity-70 mb-2">
          Save $3 with App New User Only
        </li>
        <li className="mb-6">
          <Link to="/">
            <img
              src="data:image/png;base64,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"
              alt="QRcode"
              className="w-20 h-20"
            />
          </Link>
        </li>
        <li>
          <div className="flex gap-6">
            <Link to="/">
              <CiFacebook className="text-white text-2xl" />
            </Link>
            <Link to="/">
              <CiTwitter className="text-white text-2xl" />
            </Link>
            <Link to="/">
              <CiInstagram className="text-white text-2xl" />
            </Link>
            <Link to="/">
              <CiLinkedin className="text-white text-2xl" />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FooterDownload;
