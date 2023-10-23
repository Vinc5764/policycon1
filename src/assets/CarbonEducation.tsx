export default function CarbonEducation(props: CarbonEducationProps) {
  return <div className="w-10 h-10"  >
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"  >
        <path d="M 32.5 37.5 H 30 V 33.75 C 29.998 32.093 29.339 30.504 28.167 29.333 C 26.996 28.161 25.407 27.502 23.75 27.5 H 16.25 C 14.593 27.502 13.004 28.161 11.833 29.333 C 10.661 30.504 10.002 32.093 10 33.75 V 37.5 H 7.5 V 33.75 C 7.503 31.43 8.425 29.206 10.066 27.566 C 11.706 25.925 13.93 25.003 16.25 25 H 23.75 C 26.07 25.003 28.294 25.925 29.934 27.566 C 31.575 29.206 32.497 31.43 32.5 33.75 V 37.5 Z M 6.25 7.5 C 5.918 7.5 5.601 7.632 5.366 7.866 C 5.132 8.101 5 8.418 5 8.75 V 20 H 7.5 V 8.75 C 7.5 8.418 7.368 8.101 7.134 7.866 C 6.899 7.632 6.582 7.5 6.25 7.5 Z" fill="#FFB800" />
        <path d="M 5 2.5 V 5 H 11.25 V 13.75 C 11.25 16.071 12.172 18.296 13.813 19.937 C 15.454 21.578 17.679 22.5 20 22.5 C 22.321 22.5 24.546 21.578 26.187 19.937 C 27.828 18.296 28.75 16.071 28.75 13.75 V 5 H 35 V 2.5 H 5 Z M 13.75 5 H 26.25 V 8.75 H 13.75 V 5 Z M 20 20 C 18.342 20 16.753 19.342 15.581 18.169 C 14.409 16.997 13.75 15.408 13.75 13.75 V 11.25 H 26.25 V 13.75 C 26.25 15.408 25.592 16.997 24.419 18.169 C 23.247 19.342 21.658 20 20 20 Z" fill="#FFB800" />
      </svg>
    </div>;
}
CarbonEducation.defaultProps = {
  className: ""
};
interface CarbonEducationProps {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */