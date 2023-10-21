import { ContactInfo, ContactForm } from "../components/contact";

const Contact = () => {

  return (
    <div className="flex flex-col xl:flex-row gap-7 mt-20 mb-36">
      <ContactInfo />

      <ContactForm />
    </div>
  );
};

export default Contact;
