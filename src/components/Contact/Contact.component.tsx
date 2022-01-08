import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { ContactContent, ContactLink } from "./styles";

const Contact = () => {
  return (
    <>
      <ContactContent>
        <ContactLink
          href="https://www.github.com/MurariSabavath"
          target="_blank"
        >
          <AiFillGithub />
        </ContactLink>
        <ContactLink
          href="https://www.instagram.com/murari_sabavath"
          target="_blank"
        >
          <FiInstagram />
        </ContactLink>
        <ContactLink
          href="https://www.twitter.com/MurariSabavath_"
          target="_blank"
        >
          <BsTwitter />
        </ContactLink>
        <ContactLink
          href="https://www.linkedin.com/in/murarisabavath/"
          target="_blank"
        >
          <BsLinkedin />
        </ContactLink>
      </ContactContent>
    </>
  );
};

export default Contact;
