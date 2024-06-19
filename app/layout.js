import "./global.scss";
import "../styles/core.scss";
import "../styles/home.scss";
import "../styles/about.scss";
import "../styles/typography.scss";
import "../styles/work.scss";
import "../styles/flickity.scss";
import "../styles/mixing.scss";

import Layout from "@/components/Layout";

export const metadata = {
  title: "Amber Dev.",
  description:
    "Welcome to E.J Amber's Web Developer Portfolio - Your Gateway to Exceptional Digital Solutions! Dive into a showcase of bespoke websites, dynamic web applications, and innovative digital experiences meticulously crafted by a seasoned web developer. With expertise in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and more, I specialize in delivering tailored solutions that captivate audiences and drive results. Explore my portfolio to witness a diverse range of projects, each demonstrating a commitment to excellence, creativity, and functionality. From responsive designs to seamless user interfaces, let's collaborate to elevate your online presence and achieve your digital objectives. Discover the power of transformative web development with E.J Amber. Get in touch today!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Layout>
        <div>{children}</div>
      </Layout>
    </html>
  );
};

export default RootLayout;
