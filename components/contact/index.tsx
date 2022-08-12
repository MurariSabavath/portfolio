import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { motion } from "framer-motion";
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
          <motion.div whileHover={{ y: -5, scale: 1.2 }}>
            <AiFillGithub />
          </motion.div>
        </ContactLink>

        <ContactLink
          href="https://www.instagram.com/murari_sabavath"
          target="_blank"
          aria-label="contact"
        >
          <motion.div whileHover={{ y: -5, scale: 1.2 }}>
            <FiInstagram />
          </motion.div>
        </ContactLink>

        <ContactLink
          href="https://www.linkedin.com/in/murarisabavath/"
          target="_blank"
          aria-label="contact"
        >
          <motion.div whileHover={{ y: -5, scale: 1.2 }}>
            <BsLinkedin />
          </motion.div>
        </ContactLink>

        <ContactLink
          href="https://www.twitter.com/MurariSabavath_"
          target="_blank"
          aria-label="contact"
        >
          <motion.div whileHover={{ y: -5, scale: 1.2 }}>
            <BsTwitter />
          </motion.div>
        </ContactLink>
        <ContactLink
          href="https://stackoverflow.com/users/12944024/murari-sabavath"
          target="_blank"
          aria-label="contact"
        >
          <motion.div whileHover={{ y: -5, scale: 1.4 }}>
            <BsStackOverflow />
          </motion.div>
        </ContactLink>
      </ContactContent>
    </>
  );
};

export default Contact;
