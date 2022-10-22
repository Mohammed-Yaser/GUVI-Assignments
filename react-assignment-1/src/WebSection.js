import React from "react";
import Webcard from "./WebCard";

const myData = [
  {
    version: "Free",
    price: "$0",
    user: "Single User",
    storage: "5GB Storage",
    publicProject: "Unlimited Public Projects",
    access: "Community Access",
    privateProject: "Unlimited Private Projects",
    privateProjectText: "text-muted",
    privateProjectIndex: "fas fa-times",
    support: "Dedicated Phone Support",
    supportText: "text-muted",
    supportIndex: "fas fa-times",
    domain: "Free Subdomain",
    domainText: "text-muted",
    domainIndex: "fas fa-times",
    report: "Monthly Status Reports",
    reportText: "text-muted",
    reportIndex: "fas fa-times",
  },
  {
    version: "Plus",
    price: "$9",
    user: "5 users",
    storage: "50GB Storage",
    publicProject: "Unlimited Public Projects",
    access: "Community Access",
    privateProject: "Unlimited Private Projects",
    privateProjectText: "",
    privateProjectIndex: "fas fa-check",
    support: "Dedicated Phone Support",
    supportText: "",
    supportIndex: "fas fa-check",
    domain: "Free Subdomain",
    domainText: "",
    domainIndex: "fas fa-check",
    report: "Monthly Status Reports",
    reportText: "text-muted",
    reportIndex: "fas fa-times",
  },
  {
    version: "Pro",
    price: "$49",
    user: "Unlimited Users",
    storage: "150GB Storage",
    publicProject: "Unlimited Public Projects",
    access: "Community Access",
    privateProject: "Unlimited Private Projects",
    privateProjectText: "",
    privateProjectIndex: "fas fa-check",
    support: "Dedicated Phone Support",
    supportText: "",
    supportIndex: "fas fa-check",
    domain: "Unlimited Free Subdomains",
    domainText: "",
    domainIndex: "fas fa-check",
    report: "Monthly Status Reports",
    reportText: "",
    reportIndex: "fas fa-check",
  },
];

export default function Websection() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {myData.map((item) => {
            return (
              <Webcard
                version={item.version}
                price={item.price}
                user={item.user}
                storage={item.storage}
                publicProject={item.publicProject}
                access={item.access}
                privateProject={item.privateProject}
                privateProjectText={item.privateProjectText}
                privateProjectIndex={item.privateProjectIndex}
                support={item.support}
                supportText={item.supportText}
                supportIndex={item.supportIndex}
                domain={item.domain}
                domainIndex={item.domainIndex}
                domainText={item.domainText}
                report={item.report}
                reportText={item.reportText}
                reportIndex={item.reportIndex}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
