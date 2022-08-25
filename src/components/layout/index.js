import { HeadProvider, Title, Link, Meta } from "react-head";
import Styles from "./index.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <HeadProvider>
        <Title>Demo Streaming</Title>
        <Meta name='description' content='Maps' />
        <Link rel='icon' href='/favicon.ico' />
      </HeadProvider>
      <div className={Styles.root}>
        {/* <Navbar /> */}
        <div className={Styles.mainContainer}>
          <main className={Styles.main}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
