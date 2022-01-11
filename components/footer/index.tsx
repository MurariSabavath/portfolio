import { InlineLink } from "../about/styles";
import { FooterContent } from "./styles";

const Footer = () => (
  <>
    <footer>
      <FooterContent>© 2022 Murari Sabavath. All rights reserved</FooterContent>
      <FooterContent>
        Built with
        <InlineLink href="https://nextjs.org/" target="_blank">
          Next Js
        </InlineLink>
      </FooterContent>
    </footer>
  </>
);

export default Footer;
