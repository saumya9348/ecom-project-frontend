import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={require("../images/contact.avif")}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Last Updated: [2023-06-04]</p>
          <p>Thank you for visiting [SamKart], an e-commerce website operated by [Sam]. At [Sam Solution], we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us through our website.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
