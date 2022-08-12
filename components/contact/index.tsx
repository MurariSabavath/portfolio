import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { motion } from "framer-motion";
import { ContactContent, ContactLink } from "./styles";

const parent = {
  initial: {
    x: -200,
  },
  animate: {
    x: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
      staggerDirection: -1,
    },
  },
};

const childVariant = {
  initial: {
    y: -10,
  },
  animate: {
    y: 0,
  },
};

const Contact = () => {
  return (
    <>
      <ContactContent
        variants={parent}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
      >
        <ContactLink
          href="https://www.github.com/MurariSabavath"
          target="_blank"
          aria-label="contact"
        >
          <motion.div variants={childVariant} whileHover={{ scale: 1.4 }}>
            <AiFillGithub />
          </motion.div>
        </ContactLink>

        <ContactLink
          href="https://www.instagram.com/murari_sabavath"
          target="_blank"
          aria-label="contact"
        >
          <motion.div variants={childVariant} whileHover={{ scale: 1.4 }}>
            <FiInstagram />
          </motion.div>
        </ContactLink>

        <ContactLink
          href="https://www.linkedin.com/in/murarisabavath/"
          target="_blank"
          aria-label="contact"
        >
          <motion.div variants={childVariant} whileHover={{ scale: 1.4 }}>
            <BsLinkedin />
          </motion.div>
        </ContactLink>

        <ContactLink
          href="https://www.twitter.com/MurariSabavath_"
          target="_blank"
          aria-label="contact"
        >
          <motion.div variants={childVariant} whileHover={{ scale: 1.4 }}>
            <BsTwitter />
          </motion.div>
        </ContactLink>
        <ContactLink
          href="https://stackoverflow.com/users/12944024/murari-sabavath"
          target="_blank"
          aria-label="contact"
        >
          <motion.div variants={childVariant} whileHover={{ scale: 1.4 }}>
            <BsStackOverflow />
          </motion.div>
        </ContactLink>
      </ContactContent>
    </>
  );
};

export default Contact;
