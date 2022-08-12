import { Header, Underline } from "../styles/shared";

const ContentHeader = ({ children }: { children: React.ReactNode }) => (
  <Header>
    <h1>{children}</h1>
  </Header>
);

export default ContentHeader;
