export default function UilShare(props: UilShareProps) {
  return <div className="w-2.5 h-2.5"  >
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"  >
        <path d="M 9.045 4.705 L 5.711 1.372 C 5.653 1.314 5.579 1.274 5.498 1.258 C 5.417 1.242 5.333 1.25 5.257 1.282 C 5.181 1.313 5.116 1.367 5.07 1.435 C 5.024 1.504 5 1.584 5 1.667 V 3.144 C 3.862 3.249 2.804 3.775 2.033 4.62 C 1.262 5.464 0.835 6.565 0.833 7.708 V 8.333 C 0.833 8.42 0.86 8.504 0.91 8.575 C 0.961 8.645 1.031 8.698 1.113 8.727 C 1.195 8.755 1.283 8.757 1.366 8.733 C 1.449 8.709 1.523 8.659 1.577 8.592 C 1.985 8.106 2.486 7.707 3.05 7.417 C 3.614 7.128 4.23 6.953 4.863 6.904 C 4.884 6.902 4.936 6.898 5 6.894 V 8.333 C 5 8.416 5.024 8.496 5.07 8.565 C 5.116 8.633 5.181 8.687 5.257 8.718 C 5.333 8.75 5.417 8.758 5.498 8.742 C 5.579 8.726 5.653 8.686 5.711 8.628 L 9.045 5.294 C 9.123 5.216 9.167 5.11 9.167 5 C 9.167 4.889 9.123 4.783 9.045 4.705 Z M 5.833 7.327 V 6.458 C 5.833 6.348 5.789 6.242 5.711 6.164 C 5.633 6.085 5.527 6.042 5.417 6.042 C 5.31 6.042 4.877 6.062 4.766 6.077 C 3.643 6.18 2.574 6.607 1.688 7.305 C 1.789 6.386 2.225 5.537 2.913 4.919 C 3.601 4.302 4.492 3.959 5.417 3.958 C 5.527 3.958 5.633 3.914 5.711 3.836 C 5.789 3.758 5.833 3.652 5.833 3.542 V 2.672 L 8.161 5 L 5.833 7.327 Z" fill="#767676" />
      </svg>
    </div>;
}
UilShare.defaultProps = {
  className: ""
};
interface UilShareProps {
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