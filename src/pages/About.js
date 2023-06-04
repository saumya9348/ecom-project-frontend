import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - SamKart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={require("../images/contact.avif")}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          The SamKart Site Project aims to create an innovative online platform that revolutionizes the way people shop. With the growing popularity of online shopping, this project intends to deliver a seamless, user-friendly, and secure shopping experience to customers worldwide. By leveraging cutting-edge technology and intuitive design, the project aims to cater to diverse consumer needs and preferences while ensuring utmost convenience and satisfaction.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
