import React from "react";

export const LogoIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} rx="18" fill="#0E73FC" />
      <path
        d="M17.1451 25H11.9888V10.4545H17.1877C18.6507 10.4545 19.9102 10.7457 20.9661 11.3281C22.022 11.9058 22.834 12.7367 23.4022 13.821C23.9751 14.9053 24.2615 16.2027 24.2615 17.7131C24.2615 19.2282 23.9751 20.5303 23.4022 21.6193C22.834 22.7083 22.0172 23.544 20.9519 24.1264C19.8913 24.7088 18.6223 25 17.1451 25ZM15.0641 22.3651H17.0172C17.9263 22.3651 18.691 22.2041 19.3113 21.8821C19.9363 21.5554 20.405 21.0511 20.7175 20.3693C21.0347 19.6828 21.1934 18.7973 21.1934 17.7131C21.1934 16.6383 21.0347 15.7599 20.7175 15.0781C20.405 14.3963 19.9386 13.8944 19.3184 13.5724C18.6981 13.2505 17.9334 13.0895 17.0243 13.0895H15.0641V22.3651Z"
        fill="white"
      />
    </svg>
  );
};
export const TrashIcon = ({ color, width, height }) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.666 13.3307C10.666 11.858 11.8599 10.6641 13.3327 10.6641H50.666C52.1388 10.6641 53.3327 11.858 53.3327 13.3307C53.3327 14.8035 52.1388 15.9974 50.666 15.9974H13.3327C11.8599 15.9974 10.666 14.8035 10.666 13.3307Z"
        fill="#0E73F6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.4061 8.88759C23.4061 6.9239 24.998 5.33203 26.9617 5.33203L37.0357 5.33203C38.9994 5.33203 40.5913 6.92391 40.5913 8.88759C40.5913 9.86943 41.3872 10.6654 42.3691 10.6654H42.6654V15.9987H42.3691C39.0556 15.9987 36.2714 13.7324 35.482 10.6654L28.5154 10.6654C27.726 13.7324 24.9418 15.9987 21.6283 15.9987H21.332V10.6654H21.6283C22.6102 10.6654 23.4061 9.86943 23.4061 8.88759Z"
        fill="#0E73F6"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7793 21.3414C17.247 21.2191 18.5359 22.3097 18.6583 23.7774L20.7136 48.4418C20.944 51.206 23.2547 53.3322 26.0285 53.3322H37.9731C40.7469 53.3322 43.0576 51.206 43.288 48.4418L45.3433 23.7774C45.4656 22.3097 46.7546 21.2191 48.2223 21.3414C49.6899 21.4637 50.7806 22.7526 50.6583 24.2203L48.6029 48.8847C48.1422 54.4131 43.5207 58.6655 37.9731 58.6655H26.0285C20.4809 58.6655 15.8594 54.4131 15.3987 48.8847L13.3433 24.2203C13.221 22.7526 14.3117 21.4637 15.7793 21.3414Z"
        fill="#0E73F6"
      />
    </svg>
  );
};
export const BarIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 20V10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20V4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 20V14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ShopIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ClientsIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="8" r="3.5" stroke={color} strokeLinecap="round" />
      <path
        d="M4.84913 16.9479C5.48883 14.6034 7.91473 13.5 10.345 13.5H13.655C16.0853 13.5 18.5112 14.6034 19.1509 16.9479C19.282 17.4287 19.3868 17.9489 19.4462 18.5015C19.5052 19.0507 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.49482 19.0507 4.55382 18.5015C4.6132 17.9489 4.71796 17.4287 4.84913 16.9479Z"
        stroke={color}
        strokeLinecap="round"
      />
    </svg>
  );
};
export const GroupsIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="8"
        r="3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15.2679 8C15.5332 7.54063 15.97 7.20543 16.4824 7.06815C16.9947 6.93086 17.5406 7.00273 18 7.26795C18.4594 7.53317 18.7946 7.97 18.9319 8.48236C19.0691 8.99472 18.9973 9.54063 18.7321 10C18.4668 10.4594 18.03 10.7946 17.5176 10.9319C17.0053 11.0691 16.4594 10.9973 16 10.7321C15.5406 10.4668 15.2054 10.03 15.0681 9.51764C14.9309 9.00528 15.0027 8.45937 15.2679 8L15.2679 8Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M5.26795 8C5.53317 7.54063 5.97 7.20543 6.48236 7.06815C6.99472 6.93086 7.54063 7.00273 8 7.26795C8.45937 7.53317 8.79457 7.97 8.93185 8.48236C9.06914 8.99472 8.99727 9.54063 8.73205 10C8.46683 10.4594 8.03 10.7946 7.51764 10.9319C7.00528 11.0691 6.45937 10.9973 6 10.7321C5.54063 10.4668 5.20543 10.03 5.06815 9.51764C4.93086 9.00528 5.00273 8.45937 5.26795 8L5.26795 8Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M16.8816 18L15.9013 18.1974L16.0629 19H16.8816V18ZM20.7202 16.9042L21.6627 16.5699L20.7202 16.9042ZM14.7808 14.7105L14.176 13.9142L13.0194 14.7927L14.2527 15.5597L14.7808 14.7105ZM19.8672 17H16.8816V19H19.8672V17ZM19.7777 17.2384C19.7707 17.2186 19.7642 17.181 19.7725 17.1354C19.7804 17.0921 19.7982 17.0593 19.8151 17.0383C19.8474 16.9982 19.874 17 19.8672 17V19C21.0132 19 22.1414 17.9194 21.6627 16.5699L19.7777 17.2384ZM17 15C18.6416 15 19.4027 16.1811 19.7777 17.2384L21.6627 16.5699C21.1976 15.2588 19.9485 13 17 13V15ZM15.3857 15.5069C15.7702 15.2148 16.282 15 17 15V13C15.8381 13 14.9028 13.3622 14.176 13.9142L15.3857 15.5069ZM14.2527 15.5597C15.2918 16.206 15.7271 17.3324 15.9013 18.1974L17.8619 17.8026C17.644 16.7204 17.0374 14.9364 15.309 13.8614L14.2527 15.5597Z"
        fill={color}
      />
      <path
        d="M9.21918 14.7105L9.7473 15.5597L10.9806 14.7927L9.82403 13.9142L9.21918 14.7105ZM3.2798 16.9041L4.22227 17.2384L4.22227 17.2384L3.2798 16.9041ZM7.11835 18V19H7.93703L8.09867 18.1974L7.11835 18ZM7.00001 15C7.71803 15 8.22986 15.2148 8.61433 15.5069L9.82403 13.9142C9.09723 13.3621 8.1619 13 7.00001 13V15ZM4.22227 17.2384C4.59732 16.1811 5.35842 15 7.00001 15V13C4.0515 13 2.80238 15.2587 2.33733 16.5699L4.22227 17.2384ZM4.13278 17C4.126 17 4.15264 16.9982 4.18486 17.0383C4.20176 17.0593 4.21961 17.0921 4.22748 17.1354C4.2358 17.181 4.22931 17.2186 4.22227 17.2384L2.33733 16.5699C1.85864 17.9194 2.98677 19 4.13278 19V17ZM7.11835 17H4.13278V19H7.11835V17ZM8.09867 18.1974C8.27289 17.3324 8.70814 16.206 9.7473 15.5597L8.69106 13.8614C6.96257 14.9363 6.356 16.7203 6.13804 17.8026L8.09867 18.1974Z"
        fill={color}
      />
      <path
        d="M12 14C15.5715 14 16.5919 16.5512 16.8834 18.0089C16.9917 18.5504 16.5523 19 16 19H8C7.44772 19 7.00829 18.5504 7.11659 18.0089C7.4081 16.5512 8.42846 14 12 14Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
export const LocationIcon = ({ color, width, height, style }) => {
  return (
    <svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12H18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12H2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6V2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const RestaurantIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_435_21429"
        style={{
          maskType: "alpha",
          maskUnits: "userSpaceOnUse",
          x: "8",
          y: "8",
          width: "24",
          height: "24",
        }}
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_435_21429)">
        <path
          d="M7 22V12.85C6.15 12.6167 5.4375 12.15 4.8625 11.45C4.2875 10.75 4 9.93333 4 9V2H6V9H7V2H9V9H10V2H12V9C12 9.93333 11.7125 10.75 11.1375 11.45C10.5625 12.15 9.85 12.6167 9 12.85V22H7ZM17 22V14H14V7C14 5.61667 14.4875 4.4375 15.4625 3.4625C16.4375 2.4875 17.6167 2 19 2V22H17Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
export const DateIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1092_3139)">
        <path
          d="M10.0007 6.66732C8.15898 6.66732 6.66732 8.15898 6.66732 10.0007C6.66732 11.8423 8.15898 13.334 10.0007 13.334C11.8423 13.334 13.334 11.8423 13.334 10.0007C13.334 8.15898 11.8423 6.66732 10.0007 6.66732ZM17.4506 9.16732C17.0673 5.69232 14.309 2.93398 10.834 2.55065V0.833984H9.16732V2.55065C5.69232 2.93398 2.93398 5.69232 2.55065 9.16732H0.833984V10.834H2.55065C2.93398 14.309 5.69232 17.0673 9.16732 17.4506V19.1673H10.834V17.4506C14.309 17.0673 17.0673 14.309 17.4506 10.834H19.1673V9.16732H17.4506ZM10.0007 15.834C6.77565 15.834 4.16732 13.2256 4.16732 10.0007C4.16732 6.77565 6.77565 4.16732 10.0007 4.16732C13.2256 4.16732 15.834 6.77565 15.834 10.0007C15.834 13.2256 13.2256 15.834 10.0007 15.834Z"
          fill="#6E8BB7"
        />
      </g>
      <defs>
        <clipPath id="clip0_1092_3139">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const SettingsIcon = ({ height, width }) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2001_2298)">
        <path
          d="M16.2009 10.8243L16.1926 10.841C16.2259 10.566 16.2592 10.2827 16.2592 9.99935C16.2592 9.71602 16.2342 9.44935 16.2009 9.17435L16.2092 9.19102L18.2426 7.59102L16.2176 4.07435L13.8259 5.04102L13.8342 5.04935C13.4009 4.71602 12.9259 4.43268 12.4092 4.21602H12.4176L12.0342 1.66602H7.97591L7.60924 4.22435H7.61758C7.10091 4.44102 6.62591 4.72435 6.19258 5.05768L6.20091 5.04935L3.80091 4.07435L1.76758 7.59102L3.80091 9.19102L3.80924 9.17435C3.77591 9.44935 3.75091 9.71602 3.75091 9.99935C3.75091 10.2827 3.77591 10.566 3.81758 10.841L3.80924 10.8243L2.05924 12.1993L1.78424 12.416L3.80924 15.916L6.20924 14.9577L6.19258 14.9243C6.63424 15.266 7.10924 15.5493 7.63424 15.766H7.60924L7.98424 18.3327H12.0259C12.0259 18.3327 12.0509 18.1827 12.0759 17.9827L12.3926 15.7744H12.3842C12.9009 15.5577 13.3842 15.2743 13.8259 14.9327L13.8092 14.966L16.2092 15.9243L18.2342 12.4243C18.2342 12.4243 18.1176 12.3243 17.9592 12.2077L16.2009 10.8243ZM10.0009 12.916C8.39258 12.916 7.08424 11.6077 7.08424 9.99935C7.08424 8.39102 8.39258 7.08268 10.0009 7.08268C11.6092 7.08268 12.9176 8.39102 12.9176 9.99935C12.9176 11.6077 11.6092 12.916 10.0009 12.916Z"
          fill="#6E8BB7"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_2298">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const UserIcon = ({ width, height, onclick }) => {
  return (
    <svg
      onClick={onclick}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 15.0141 20.6665 17.7167 18.5573 19.5501C18.0996 18.3251 17.306 17.2481 16.2613 16.4465C15.0388 15.5085 13.5409 15 12 15C10.4591 15 8.96118 15.5085 7.73867 16.4465C6.69405 17.2481 5.90038 18.3251 5.44269 19.5501C3.33349 17.7167 2 15.0141 2 12ZM16.8296 20.7059C16.8337 20.7212 16.8381 20.7363 16.8429 20.7512C15.4081 21.5469 13.757 22 12 22C10.243 22 8.59193 21.5469 7.15711 20.7512C7.16185 20.7363 7.16628 20.7212 7.17037 20.7059C7.45525 19.6427 8.08297 18.7033 8.95619 18.0332C9.82942 17.3632 10.8993 17 12 17C13.1007 17 14.1706 17.3632 15.0438 18.0332C15.917 18.7033 16.5448 19.6427 16.8296 20.7059ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z"
        fill="#222222"
      />
      <rect x="2.5" y="2.5" width="19" height="19" rx="9.5" stroke="#222222" />
    </svg>
  );
};
export const ChevronIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="26" rx="8" fill="#F5F6FA" />
      <path
        d="M13 18L8 13L13 8"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 18L15 13L20 8"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const PlusIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4.16797V15.8346"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16797 10H15.8346"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const SearchIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
        stroke="#0E73FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 17.5L13.875 13.875"
        stroke="#0E73FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ArroDownIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="#0E73FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const CalendarIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8333 3.33203H4.16667C3.24619 3.33203 2.5 4.07822 2.5 4.9987V16.6654C2.5 17.5858 3.24619 18.332 4.16667 18.332H15.8333C16.7538 18.332 17.5 17.5858 17.5 16.6654V4.9987C17.5 4.07822 16.7538 3.33203 15.8333 3.33203Z"
        stroke="#0E73FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.332 1.66797V5.0013"
        stroke="#0E73FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66797 1.66797V5.0013"
        stroke="#0E73FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 8.33203H17.5"
        stroke="#0E73FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ArrowUpIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15.8346V4.16797"
        stroke="#0E73FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16797 10.0013L10.0013 4.16797L15.8346 10.0013"
        stroke="#0E73FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ReloadIcon = () => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0501 0.499002C5.80844 0.382336 2.33344 3.79067 2.33344 7.999H0.841773C0.466773 7.999 0.28344 8.449 0.550107 8.70734L2.87511 11.0407C3.04177 11.2073 3.30011 11.2073 3.46677 11.0407L5.79177 8.70734C6.05011 8.449 5.86677 7.999 5.49177 7.999H4.00011C4.00011 4.749 6.65011 2.124 9.91677 2.16567C13.0168 2.20734 15.6251 4.81567 15.6668 7.91567C15.7084 11.174 13.0834 13.8323 9.83344 13.8323C8.49177 13.8323 7.25011 13.374 6.26677 12.599C5.93344 12.3407 5.46677 12.3657 5.16677 12.6657C4.81677 13.0157 4.84177 13.6073 5.23344 13.9073C6.50011 14.9073 8.09177 15.499 9.83344 15.499C14.0418 15.499 17.4501 12.024 17.3334 7.78234C17.2251 3.874 13.9584 0.607336 10.0501 0.499002ZM9.62511 4.66567C9.28344 4.66567 9.00011 4.949 9.00011 5.29067V8.35734C9.00011 8.649 9.15844 8.924 9.40844 9.074L12.0084 10.6157C12.3084 10.7907 12.6918 10.6907 12.8668 10.399C13.0418 10.099 12.9418 9.71567 12.6501 9.54067L10.2501 8.11567V5.28234C10.2501 4.949 9.96677 4.66567 9.62511 4.66567Z"
        fill="#0E73F6"
      />
    </svg>
  );
};
export const DownloadIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.16602 15.832C4.16602 15.611 4.25381 15.3991 4.41009 15.2428C4.56637 15.0865 4.77834 14.9987 4.99935 14.9987H14.9993C15.2204 14.9987 15.4323 15.0865 15.5886 15.2428C15.7449 15.3991 15.8327 15.611 15.8327 15.832C15.8327 16.053 15.7449 16.265 15.5886 16.4213C15.4323 16.5776 15.2204 16.6654 14.9993 16.6654H4.99935C4.77834 16.6654 4.56637 16.5776 4.41009 16.4213C4.25381 16.265 4.16602 16.053 4.16602 15.832ZM6.91018 9.40953C7.06646 9.25331 7.27838 9.16554 7.49935 9.16554C7.72032 9.16554 7.93224 9.25331 8.08852 9.40953L9.16602 10.487V4.16536C9.16602 3.94435 9.25381 3.73239 9.41009 3.57611C9.56637 3.41983 9.77834 3.33203 9.99935 3.33203C10.2204 3.33203 10.4323 3.41983 10.5886 3.57611C10.7449 3.73239 10.8327 3.94435 10.8327 4.16536V10.487L11.9102 9.40953C11.9871 9.32994 12.079 9.26645 12.1807 9.22278C12.2823 9.17911 12.3917 9.15612 12.5023 9.15516C12.613 9.15419 12.7227 9.17528 12.8251 9.21718C12.9276 9.25908 13.0206 9.32096 13.0988 9.3992C13.1771 9.47745 13.239 9.57049 13.2809 9.6729C13.3228 9.77532 13.3439 9.88505 13.3429 9.9957C13.3419 10.1063 13.3189 10.2157 13.2753 10.3174C13.2316 10.419 13.1681 10.511 13.0885 10.5879L10.5885 13.0879C10.4322 13.2441 10.2203 13.3319 9.99935 13.3319C9.77838 13.3319 9.56646 13.2441 9.41018 13.0879L6.91018 10.5879C6.75396 10.4316 6.66619 10.2197 6.66619 9.9987C6.66619 9.77773 6.75396 9.5658 6.91018 9.40953V9.40953Z"
        fill="#0E73F6"
      />
    </svg>
  );
};
export const FolderIcon = () => {
  return (
    <svg
      width="48"
      height="20"
      viewBox="0 0 48 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8327 10H4.16602"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99935 15.8346L4.16602 10.0013L9.99935 4.16797"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.3327 15.8333C46.3327 16.2754 46.1571 16.6993 45.8445 17.0118C45.532 17.3244 45.108 17.5 44.666 17.5H31.3327C30.8907 17.5 30.4667 17.3244 30.1542 17.0118C29.8416 16.6993 29.666 16.2754 29.666 15.8333V4.16667C29.666 3.72464 29.8416 3.30072 30.1542 2.98816C30.4667 2.67559 30.8907 2.5 31.3327 2.5H35.4993L37.166 5H44.666C45.108 5 45.532 5.17559 45.8445 5.48816C46.1571 5.80072 46.3327 6.22464 46.3327 6.66667V15.8333Z"
        fill="#D9D9D9"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const CreateIcon = () => {
  return (
    <svg
      width="48"
      height="20"
      viewBox="0 0 48 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8327 10H4.16602"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99935 15.8346L4.16602 10.0013L9.99935 4.16797"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.3327 15.8333C46.3327 16.2754 46.1571 16.6993 45.8445 17.0118C45.532 17.3244 45.108 17.5 44.666 17.5H31.3327C30.8907 17.5 30.4667 17.3244 30.1542 17.0118C29.8416 16.6993 29.666 16.2754 29.666 15.8333V4.16667C29.666 3.72464 29.8416 3.30072 30.1542 2.98816C30.4667 2.67559 30.8907 2.5 31.3327 2.5H35.4993L37.166 5H44.666C45.108 5 45.532 5.17559 45.8445 5.48816C46.1571 5.80072 46.3327 6.22464 46.3327 6.66667V15.8333Z"
        fill="#D9D9D9"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const CategoryFilterIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33333 8.35H12.5V17.5H8.33333V8.35ZM14.1667 17.5H16.6667C17.5833 17.5 18.3333 16.75 18.3333 15.8333V8.33333H14.1667V17.5ZM16.6667 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V6.66667H18.3333V4.16667C18.3333 3.25 17.5833 2.5 16.6667 2.5ZM2.5 15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H6.66667V8.33333H2.5V15.8333Z"
        fill="#0E73F6"
      />
    </svg>
  );
};
export const RussiaIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_113_4784)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M23.2536 16.172C23.736 14.872 24 13.466 24 11.9981C24 10.5303 23.736 9.1242 23.2536 7.82422H0.746391C0.264047 9.1242 0 10.5303 0 11.9981C0 13.466 0.264047 14.872 0.746391 16.172L12 17.2155L23.2536 16.172Z"
          fill="#0052B4"
        />
        <path
          d="M11.9997 24.0019C17.1593 24.0019 21.5578 20.7454 23.2533 16.1758H0.746094C2.44161 20.7454 6.84012 24.0019 11.9997 24.0019Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_113_4784">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const UzbIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_113_4787)">
        <path
          d="M0.566625 8.34598C0.199031 9.49761 -4.68667e-05 10.7245 8.276e-09 11.998C-4.68667e-05 13.2716 0.199078 14.4986 0.566672 15.6502L12 16.172L23.4333 15.6503C23.8009 14.4986 24 13.2716 24 11.9981C24 10.7245 23.8009 9.49761 23.4333 8.34594L12 7.82422L0.566625 8.34598Z"
          fill="#F0F0F0"
        />
        <path
          d="M23.4332 8.34594L11.9999 7.82422L0.5665 8.34594C0.457562 8.68738 0.363766 9.03552 0.285156 9.38942H23.7144C23.6359 9.03547 23.5421 8.68728 23.4332 8.34594Z"
          fill="#D80027"
        />
        <path
          d="M0.285156 14.6055C0.363672 14.9594 0.457469 15.3075 0.566406 15.6489L0.567531 15.649L11.9997 16.1707L23.433 15.649C23.542 15.3075 23.6357 14.9594 23.7143 14.6055H0.285156Z"
          fill="#D80027"
        />
        <path
          d="M11.9997 24.0002C17.3536 24.0002 21.8878 20.4938 23.433 15.6523H0.566406C2.11164 20.4937 6.64595 24.0002 11.9997 24.0002V24.0002Z"
          fill="#6DA544"
        />
        <path
          d="M11.9997 4.69973e-10C6.64595 4.68755e-05 2.11173 3.50644 0.566406 8.34783L23.433 8.34787C21.8879 3.50639 17.3536 -4.68745e-05 11.9997 4.69973e-10V4.69973e-10Z"
          fill="#338AF3"
        />
        <path
          d="M5.48278 4.95716C5.48278 3.83323 6.27267 2.89433 7.3275 2.66398C7.16541 2.62855 6.99717 2.60938 6.82439 2.60938C5.52773 2.60938 4.47656 3.6605 4.47656 4.9572C4.47656 6.25391 5.52764 7.30503 6.82439 7.30503C6.99717 7.30503 7.16536 7.28581 7.3275 7.25042C6.27272 7.01998 5.48278 6.08108 5.48278 4.95716V4.95716Z"
          fill="#F0F0F0"
        />
        <path
          d="M8.71433 6.02344L8.87323 6.51258H9.38755L8.97148 6.81492L9.13039 7.30406L8.71433 7.00177L8.29817 7.30406L8.45712 6.81492L8.04102 6.51258H8.55533L8.71433 6.02344Z"
          fill="#F0F0F0"
        />
        <path
          d="M10.3568 6.02344L10.5158 6.51258H11.0301L10.614 6.81492L10.7729 7.30406L10.3568 7.00177L9.9407 7.30406L10.0997 6.81492L9.68359 6.51258H10.1979L10.3568 6.02344Z"
          fill="#F0F0F0"
        />
        <path
          d="M11.9975 6.02344L12.1564 6.51258H12.6708L12.2547 6.81492L12.4136 7.30406L11.9975 7.00177L11.5814 7.30406L11.7404 6.81492L11.3242 6.51258H11.8386L11.9975 6.02344Z"
          fill="#F0F0F0"
        />
        <path
          d="M13.6401 6.02344L13.7991 6.51258H14.3133L13.8973 6.81492L14.0562 7.30406L13.6401 7.00177L13.224 7.30406L13.383 6.81492L12.9668 6.51258H13.4811L13.6401 6.02344Z"
          fill="#F0F0F0"
        />
        <path
          d="M15.2806 6.02344L15.4396 6.51258H15.9539L15.5378 6.81492L15.6968 7.30406L15.2806 7.00177L14.8645 7.30406L15.0235 6.81492L14.6074 6.51258H15.1217L15.2806 6.02344Z"
          fill="#F0F0F0"
        />
        <path
          d="M10.3568 4.31641L10.5158 4.8055H11.0301L10.614 5.10789L10.7729 5.59698L10.3568 5.29469L9.9407 5.59698L10.0997 5.10789L9.68359 4.8055H10.1979L10.3568 4.31641Z"
          fill="#F0F0F0"
        />
        <path
          d="M11.9975 4.31641L12.1564 4.8055H12.6708L12.2547 5.10789L12.4136 5.59698L11.9975 5.29469L11.5814 5.59698L11.7404 5.10789L11.3242 4.8055H11.8386L11.9975 4.31641Z"
          fill="#F0F0F0"
        />
        <path
          d="M13.6401 4.31641L13.7991 4.8055H14.3133L13.8973 5.10789L14.0562 5.59698L13.6401 5.29469L13.224 5.59698L13.383 5.10789L12.9668 4.8055H13.4811L13.6401 4.31641Z"
          fill="#F0F0F0"
        />
        <path
          d="M15.2806 4.31641L15.4396 4.8055H15.9539L15.5378 5.10789L15.6968 5.59698L15.2806 5.29469L14.8645 5.59698L15.0235 5.10789L14.6074 4.8055H15.1217L15.2806 4.31641Z"
          fill="#F0F0F0"
        />
        <path
          d="M11.9975 2.60938L12.1564 3.09856H12.6708L12.2547 3.40086L12.4136 3.89005L11.9975 3.58775L11.5814 3.89005L11.7404 3.40086L11.3242 3.09856H11.8386L11.9975 2.60938Z"
          fill="#F0F0F0"
        />
        <path
          d="M13.6401 2.60938L13.7991 3.09856H14.3133L13.8973 3.40086L14.0562 3.89005L13.6401 3.58775L13.224 3.89005L13.383 3.40086L12.9668 3.09856H13.4811L13.6401 2.60938Z"
          fill="#F0F0F0"
        />
        <path
          d="M15.2806 2.60938L15.4396 3.09856H15.9539L15.5378 3.40086L15.6968 3.89005L15.2806 3.58775L14.8645 3.89005L15.0235 3.40086L14.6074 3.09856H15.1217L15.2806 2.60938Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_113_4787">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const EngIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_113_4790)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M2.4813 4.69531C1.53869 5.9217 0.827922 7.33522 0.414062 8.8708H6.65678L2.4813 4.69531Z"
          fill="#0052B4"
        />
        <path
          d="M23.5864 8.87075C23.1725 7.33522 22.4617 5.9217 21.5191 4.69531L17.3438 8.87075H23.5864Z"
          fill="#0052B4"
        />
        <path
          d="M0.414062 15.1328C0.827969 16.6683 1.53873 18.0819 2.4813 19.3082L6.65664 15.1328H0.414062Z"
          fill="#0052B4"
        />
        <path
          d="M19.3063 2.48134C18.0799 1.53873 16.6664 0.827969 15.1309 0.414062V6.65673L19.3063 2.48134Z"
          fill="#0052B4"
        />
        <path
          d="M4.69531 21.5191C5.9217 22.4617 7.33522 23.1725 8.87075 23.5864V17.3438L4.69531 21.5191Z"
          fill="#0052B4"
        />
        <path
          d="M8.8707 0.414062C7.33517 0.827969 5.92166 1.53873 4.69531 2.4813L8.8707 6.65669V0.414062Z"
          fill="#0052B4"
        />
        <path
          d="M15.1309 23.5864C16.6664 23.1725 18.0799 22.4617 19.3062 21.5191L15.1309 17.3438V23.5864Z"
          fill="#0052B4"
        />
        <path
          d="M17.3438 15.1328L21.5191 19.3082C22.4617 18.0819 23.1725 16.6683 23.5864 15.1328H17.3438Z"
          fill="#0052B4"
        />
        <path
          d="M23.8984 10.4348H13.5653H13.5652V0.101578C13.0529 0.034875 12.5305 0 12 0C11.4694 0 10.9471 0.034875 10.4348 0.101578V10.4347V10.4348H0.101578C0.034875 10.9471 0 11.4695 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4347H10.4348V23.8984C10.9471 23.9651 11.4694 24 12 24C12.5305 24 13.0529 23.9652 13.5652 23.8984V13.5653V13.5652H23.8984C23.9651 13.0529 24 12.5306 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348V10.4348Z"
          fill="#D80027"
        />
        <path
          d="M15.1309 15.129L20.4857 20.4838C20.732 20.2376 20.9669 19.9802 21.191 19.7134L16.6066 15.1289H15.1309V15.129Z"
          fill="#D80027"
        />
        <path
          d="M8.87048 15.1289H8.87039L3.51562 20.4837C3.76181 20.73 4.0192 20.9649 4.28602 21.189L8.87048 16.6045V15.1289Z"
          fill="#D80027"
        />
        <path
          d="M8.86878 8.87058V8.87048L3.51397 3.51562C3.26769 3.76181 3.03275 4.0192 2.80859 4.28602L7.39311 8.87053H8.86878V8.87058Z"
          fill="#D80027"
        />
        <path
          d="M15.1309 8.86883L20.4857 3.51392C20.2395 3.26764 19.9821 3.0327 19.7153 2.80859L15.1309 7.39311V8.86883Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_113_4790">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const PlusIconDown = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
        stroke="#666464"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 8V16"
        stroke="#666464"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12H16.5"
        stroke="#666464"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const FilterIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.16602 4.16536C4.16602 3.94435 4.25381 3.73239 4.41009 3.57611C4.56637 3.41983 4.77834 3.33203 4.99935 3.33203H14.9993C15.2204 3.33203 15.4323 3.41983 15.5886 3.57611C15.7449 3.73239 15.8327 3.94435 15.8327 4.16536V6.66536C15.8326 6.88636 15.7448 7.09829 15.5885 7.25453L11.666 11.177V14.1654C11.666 14.3864 11.5781 14.5983 11.4218 14.7545L9.75518 16.4212C9.63864 16.5377 9.49017 16.617 9.32854 16.6492C9.16691 16.6813 8.99939 16.6648 8.84714 16.6018C8.69489 16.5387 8.56475 16.4319 8.47318 16.2949C8.38161 16.1579 8.33272 15.9968 8.33268 15.832V11.177L4.41018 7.25453C4.25389 7.09829 4.16606 6.88636 4.16602 6.66536V4.16536Z"
        fill="#0E73F6"
      />
    </svg>
  );
};
export const ArrowLeftIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2001_1500)">
        <path
          d="M19.0005 10.9988H7.83047L12.7105 6.11875C13.1005 5.72875 13.1005 5.08875 12.7105 4.69875C12.3205 4.30875 11.6905 4.30875 11.3005 4.69875L4.71047 11.2888C4.32047 11.6788 4.32047 12.3087 4.71047 12.6987L11.3005 19.2888C11.6905 19.6788 12.3205 19.6788 12.7105 19.2888C13.1005 18.8988 13.1005 18.2687 12.7105 17.8787L7.83047 12.9987H19.0005C19.5505 12.9987 20.0005 12.5487 20.0005 11.9988C20.0005 11.4488 19.5505 10.9988 19.0005 10.9988Z"
          fill="#1A2024"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_1500">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const PLusCIrcleIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9993 27.3346C17.5356 27.3346 20.927 25.9299 23.4274 23.4294C25.9279 20.9289 27.3327 17.5375 27.3327 14.0013C27.3327 10.4651 25.9279 7.0737 23.4274 4.57321C20.927 2.07273 17.5356 0.667969 13.9993 0.667969C10.4631 0.667969 7.07174 2.07273 4.57126 4.57321C2.07077 7.0737 0.666016 10.4651 0.666016 14.0013C0.666016 17.5375 2.07077 20.9289 4.57126 23.4294C7.07174 25.9299 10.4631 27.3346 13.9993 27.3346ZM15.666 9.0013C15.666 8.55927 15.4904 8.13535 15.1779 7.82279C14.8653 7.51023 14.4414 7.33464 13.9993 7.33464C13.5573 7.33464 13.1334 7.51023 12.8208 7.82279C12.5083 8.13535 12.3327 8.55927 12.3327 9.0013V12.3346H8.99935C8.55732 12.3346 8.1334 12.5102 7.82084 12.8228C7.50828 13.1354 7.33268 13.5593 7.33268 14.0013C7.33268 14.4433 7.50828 14.8673 7.82084 15.1798C8.1334 15.4924 8.55732 15.668 8.99935 15.668H12.3327V19.0013C12.3327 19.4433 12.5083 19.8673 12.8208 20.1798C13.1334 20.4924 13.5573 20.668 13.9993 20.668C14.4414 20.668 14.8653 20.4924 15.1779 20.1798C15.4904 19.8673 15.666 19.4433 15.666 19.0013V15.668H18.9993C19.4414 15.668 19.8653 15.4924 20.1779 15.1798C20.4904 14.8673 20.666 14.4433 20.666 14.0013C20.666 13.5593 20.4904 13.1354 20.1779 12.8228C19.8653 12.5102 19.4414 12.3346 18.9993 12.3346H15.666V9.0013Z"
        fill="#84919A"
      />
    </svg>
  );
};
export const LogOutIcon = ({ onCLick }) => {
  return (
    <div onClick={onCLick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
          stroke="#7384A2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17L21 12L16 7"
          stroke="#7384A2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12H9"
          stroke="#7384A2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export const ChevronLeftIcon = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7068 7.29279C14.8943 7.48031 14.9996 7.73462 14.9996 7.99979C14.9996 8.26495 14.8943 8.51926 14.7068 8.70679L11.4138 11.9998L14.7068 15.2928C14.8889 15.4814 14.9897 15.734 14.9875 15.9962C14.9852 16.2584 14.88 16.5092 14.6946 16.6946C14.5092 16.88 14.2584 16.9852 13.9962 16.9875C13.734 16.9897 13.4814 16.8889 13.2928 16.7068L9.29279 12.7068C9.10532 12.5193 9 12.265 9 11.9998C9 11.7346 9.10532 11.4803 9.29279 11.2928L13.2928 7.29279C13.4803 7.10532 13.7346 7 13.9998 7C14.265 7 14.5193 7.10532 14.7068 7.29279Z"
        fill={fill}
      />
    </svg>
  );
};
export const ChevronRightIcon = ({ fill }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.29279 16.7064C9.10532 16.5189 9 16.2646 9 15.9994C9 15.7343 9.10532 15.48 9.29279 15.2924L12.5858 11.9994L9.29279 8.70643C9.11063 8.51783 9.00983 8.26523 9.01211 8.00303C9.01439 7.74083 9.11956 7.49002 9.30497 7.30461C9.49038 7.1192 9.74119 7.01403 10.0034 7.01176C10.2656 7.00948 10.5182 7.11027 10.7068 7.29243L14.7068 11.2924C14.8943 11.48 14.9996 11.7343 14.9996 11.9994C14.9996 12.2646 14.8943 12.5189 14.7068 12.7064L10.7068 16.7064C10.5193 16.8939 10.265 16.9992 9.99979 16.9992C9.73462 16.9992 9.48031 16.8939 9.29279 16.7064Z"
        fill={fill}
      />
    </svg>
  );
};
