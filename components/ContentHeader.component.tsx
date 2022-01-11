import { Header, Underline } from "../styles/shared";

const ContentHeader = ({ children }: { children: React.ReactNode }) => (
  <Header>
    <h1>{children}</h1>
    <Underline width={"100%"} />
    <Underline width={"40%"} />
    <div />
  </Header>
);

export default ContentHeader;
