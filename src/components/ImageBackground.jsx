import React from "react";
import "../assets/styles/components/ImageBackground.styl";
const ImageBackground = () => (
  <div className="ImageBackground">
    <picture>
      <source
        media="(min-width:1300px)"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/399d6794-b770-4b21-992d-a3326710a170/8caa599d-d0ca-43d8-9bdd-423603356fa9/CO-en-20210215-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />
      <source
        media="(min-width:1000px)"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/399d6794-b770-4b21-992d-a3326710a170/8caa599d-d0ca-43d8-9bdd-423603356fa9/CO-en-20210215-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/399d6794-b770-4b21-992d-a3326710a170/8caa599d-d0ca-43d8-9bdd-423603356fa9/CO-en-20210215-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="space picture"
      />
    </picture>
  </div>
);

export default ImageBackground;
