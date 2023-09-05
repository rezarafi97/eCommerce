import {
  FooterExclusive,
  FooterSupport,
  FooterAccount,
  FooterLinks,
  FooterDownload,
} from "./";

const FooterContent = () => {
  return (
    <div className="after:block after:h-px after:w-full after:opacity-40 after:bg-white">
      <div className="flex justify-around">
        <FooterExclusive />
        <FooterSupport />
        <FooterAccount />
        <FooterLinks />
        <FooterDownload />
      </div>
    </div>
  );
};

export default FooterContent;
