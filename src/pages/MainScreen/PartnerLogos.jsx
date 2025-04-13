"use client";
import React from "react";
import styles from "./PartnerLogos.module.css";

const logos = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/93ade0ceb3843b5373f099713f20d601da84875652d5b92be1ff999458b9c39d",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/06de9380447671d17a2550ad0137faa045b3c5ceba6eebc12c9f08e4b918f9ff",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/4551ca21a05e5ee26a9e5cccab1ea80935f9b6078320cf7e7e6858b810b3d502",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/76ceee97658aee61db5875cb932e0f40374d5e1f03bd4f1edda7931b1cbfc04d",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/6910904158af73b62c3dfac40659ce7b3b4975928a539fd98e1014677c0b9176",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/cc0e95edf6ff8057c9a564838010ae360df15efe6a95f2ee6ec2d7c6cd869b03",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/058db625b74c025967e548084c8791bea7757acf3c2bbde424e3d248d8a8b6af",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/4b7b869ab2d8b2771bda90b95cbc3e4e4592761f0a1d32a506b4aab2420deb2a",
];

function PartnerLogos() {
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.logoTrack}>
        {/* Duplicating logos for infinite scrolling */}
        {[...logos, ...logos,...logos,...logos].map((logo, i) => (
          <div key={i} className={styles.logoWrapper}>
            <img src={logo} alt={`Logo ${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnerLogos;
