import React from "react";
import Image from "next/image";

function Socials() {
  return (
    <div className="social-container mobile:mx-4 desktop:mx-0">
      {/* <div className="bordered-heading">
        <p className="primary-text">Socials</p>
      </div> */}
      <p className="text-heading-big my-10 mobile:text-center desktop:text-left mobile:text-3xl desktop:text-4xl">
        Join the community
      </p>
      <div className="flex justify-between desktop:w-3/12 mobile:w-full px-2">
        <Image
          alt="discord"
          src="/Socials/Discord.svg"
          width={48}
          height={48}
        />
        <Image
          alt="twitter"
          src="/Socials/Twitter.svg"
          width={48}
          height={48}
        />
        <Image
          alt="instagram"
          src="/Socials/Instagram.svg"
          width={48}
          height={48}
        />
        <Image
          alt="telegram"
          src="/Socials/Telegram.svg"
          width={48}
          height={48}
        />
        <Image
          alt="facebook"
          src="/Socials/Facebook.svg"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}

export default Socials;
