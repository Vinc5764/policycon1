export default function Chat(props: ChatProps) {
  return <div className="w-5 h-5"  >
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"  >
        <path fillRule="evenodd" clipRule="evenodd" d="M 10.002 0 C 12.675 0 15.187 1.039 17.075 2.927 C 20.975 6.828 20.975 13.174 17.075 17.075 C 15.162 18.988 12.588 20 9.979 20 C 8.557 20 7.126 19.7 5.787 19.08 C 5.393 18.922 5.023 18.773 4.758 18.773 C 4.453 18.775 4.043 18.916 3.646 19.053 C 2.833 19.332 1.821 19.68 1.071 18.934 C 0.325 18.187 0.669 17.177 0.947 16.365 C 1.084 15.965 1.224 15.551 1.224 15.239 C 1.224 14.982 1.1 14.654 0.91 14.183 C-0.832 10.419 -0.027 5.883 2.93 2.928 C 4.817 1.04 7.328 0 10.002 0 Z M 10.003 1.396 C 7.701 1.396 5.54 2.291 3.916 3.916 C 1.372 6.458 0.68 10.361 2.192 13.63 C 2.41 14.169 2.62 14.693 2.62 15.239 C 2.62 15.783 2.433 16.331 2.268 16.815 C 2.132 17.213 1.927 17.814 2.059 17.946 C 2.188 18.08 2.793 17.869 3.192 17.732 C 3.671 17.569 4.215 17.381 4.753 17.377 C 5.293 17.377 5.802 17.582 6.341 17.799 C 9.641 19.325 13.545 18.63 16.088 16.088 C 19.444 12.731 19.444 7.27 16.088 3.915 C 14.463 2.29 12.303 1.396 10.003 1.396 Z M 13.675 9.456 C 14.189 9.456 14.606 9.872 14.606 10.387 C 14.606 10.901 14.189 11.317 13.675 11.317 C 13.162 11.317 12.741 10.901 12.741 10.387 C 12.741 9.872 13.153 9.456 13.667 9.456 H 13.675 Z M 9.945 9.456 C 10.459 9.456 10.875 9.872 10.875 10.387 C 10.875 10.901 10.459 11.317 9.945 11.317 C 9.431 11.317 9.011 10.901 9.011 10.387 C 9.011 9.872 9.422 9.456 9.937 9.456 H 9.945 Z M 6.214 9.456 C 6.728 9.456 7.145 9.872 7.145 10.387 C 7.145 10.901 6.728 11.317 6.214 11.317 C 5.701 11.317 5.28 10.901 5.28 10.387 C 5.28 9.872 5.692 9.456 6.206 9.456 H 6.214 Z" fill="#919EAB" />
      </svg>
    </div>;
}
Chat.defaultProps = {
  className: ""
};
interface ChatProps {
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