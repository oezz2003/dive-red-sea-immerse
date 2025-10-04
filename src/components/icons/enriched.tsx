
import * as React from "react";

const Enriched = (props: React.SVGProps<SVGSVGElement> & { fill?: string }) => {
  const fillColor = props.fill || "#000";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={props.width || 32} height={props.height || 32} x="0" y="0" viewBox="0 0 682.667 682.667" xmlSpace="preserve" {...props}>
      <g>
        <defs>
          <clipPath id="a" clipPathUnits="userSpaceOnUse">
            <path d="M0 512h512V0H0Z" fill={fillColor} opacity="1" />
          </clipPath>
        </defs>
        <path d="M0 0h-40" transform="matrix(1.33333 0 0 -1.33333 346.667 549.333)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
        <path d="M0 0v50" transform="matrix(1.33333 0 0 -1.33333 373.333 248)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
        <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
          <path d="M0 0v21" transform="translate(280 471)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
          <path d="M0 0c0-22.092-17.908-40-40-40S-80-22.092-80 0s17.908 40 40 40S0 22.092 0 0Z" transform="translate(320 422)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
          <path d="M0 0h59.24c16.779 0 30.38 13.602 30.38 30.38V244c0 33.137-26.863 60-60 60s-60-26.863-60-60V30.38C-30.38 13.602-16.778 0 0 0Z" transform="translate(250.38 20)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
          <path d="M0 0h-40" transform="translate(60 100)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
          <path d="M0 0v50" transform="translate(80 326)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
          <path d="M0 0v21" transform="translate(80 471)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
          <path d="M0 0c0-22.092-17.908-40-40-40S-80-22.092-80 0s17.908 40 40 40S0 22.092 0 0Z" transform="translate(120 422)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
          <path d="M0 0h59.24c16.779 0 30.38 13.602 30.38 30.38V244c0 33.137-26.863 60-60 60s-60-26.863-60-60V30.38C-30.38 13.602-16.778 0 0 0Z" transform="translate(50.38 20)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
          <path d="M0 0h-112" transform="translate(240 422)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
          <path d="M0 0v151c0 43.631-35.369 79-79 79" transform="translate(467 192)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
          <path d="M0 0h-50" transform="translate(492 187)" fill="none" stroke={fillColor} strokeWidth="40px" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeDasharray="none" strokeOpacity="1" />
        </g>
      </g>
    </svg>
  );
};

export default Enriched;
