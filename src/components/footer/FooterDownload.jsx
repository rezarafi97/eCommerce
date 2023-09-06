import { Link } from "react-router-dom";

const FooterDownload = () => {
  return (
    <div>
      <ul>
        <li className="text-white text-xl font-poppins font-medium mb-6">
          Download App
        </li>
        <li className="text-white font-poppins font-normal text-xs text-opacity-70">
          Save $3 with App New User Only
        </li>
      </ul>
      <div className="flex">
        <div>
          <Link to="/" className="w-20 h-20">
            <img
              src="../../assets/images/Qrcode.png"
              className="w-20 h-20"
              alt="QRcode"
            />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src="../../assets/images/google.png" alt="Google Play" />
          </Link>
          <Link to="/">
            <img src="../../assets/images/apple.png" alt="App store" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterDownload;
