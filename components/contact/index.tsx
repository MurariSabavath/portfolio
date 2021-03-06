import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { ContactContent, ContactLink } from "./styles";

const Contact = () => {
  return (
    <>
      <ContactContent>
        <ContactLink
          href="https://www.github.com/MurariSabavath"
          target="_blank"
          aria-label="contact"
        >
          <AiFillGithub />
        </ContactLink>
        <ContactLink
          href="https://www.instagram.com/murari_sabavath"
          target="_blank"
          aria-label="contact"
        >
          <FiInstagram />
        </ContactLink>
        <ContactLink
          href="https://www.linkedin.com/in/murarisabavath/"
          target="_blank"
          aria-label="contact"
        >
          <BsLinkedin />
        </ContactLink>
        <ContactLink
          href="https://www.twitter.com/MurariSabavath_"
          target="_blank"
          aria-label="contact"
        >
          <BsTwitter />
        </ContactLink>
        <ContactLink
          href="https://stackoverflow.com/users/12944024/murari-sabavath"
          target="_blank"
          aria-label="contact"
        >
          <BsStackOverflow />
        </ContactLink>
      </ContactContent>
    </>
  );
};

export default Contact;
