import { Header, Underline } from "../styles/shared";

const ContentHeader = ({ children }: { children: React.ReactNode }) => (
  <Header>
    <h3>{children}</h3>
    <Underline width={"90%"} />
    <Underline width={"40%"} />
    <div />
  </Header>
);

export default ContentHeader;
