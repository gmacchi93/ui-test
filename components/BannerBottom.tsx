import Image from "next/image";
import React from "react";

type Props = {};

const BannerBottom = (props: Props) => {
  return (
    <aside
      className="banner banner-bottom"
      role="doc-tip"
      aria-label="Submit a name"
    >
      <div className="banner__background">
        <Image
          src="/assets/img/bg-people.png"
          width={1047}
          height={589}
          alt=""
          role="none"
        />
      </div>
      <div className="banner__left">
        <h2 className="banner__heading">
          Is there anyone else you would want us to add?
        </h2>
      </div>
      <div className="banner__right">
        <button className="banner__cta">Submit a name</button>
      </div>
    </aside>
  );
};

export default BannerBottom;
