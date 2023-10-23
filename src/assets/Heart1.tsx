export default function Heart1(props: Heart1Props) {
  return <div className="w-2.5 h-[9.53px]"  >
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"  >
        <mask id="mask0_1348_1701" maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="10">
          <path fillRule="evenodd" clipRule="evenodd" d="M 0 0.237 H 10 V 9.763 H 0 V 0.237 Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1348_1701)">
          <path fillRule="evenodd" clipRule="evenodd" d="M 0.891 4.694 C 1.575 6.824 4.281 8.547 5 8.973 C 5.722 8.543 8.447 6.801 9.109 4.696 C 9.545 3.335 9.141 1.611 7.536 1.094 C 6.758 0.844 5.851 0.996 5.225 1.481 C 5.094 1.581 4.912 1.583 4.78 1.483 C 4.117 0.985 3.25 0.839 2.461 1.094 C 0.858 1.61 0.455 3.334 0.891 4.694 Z M 5.001 9.763 C 4.94 9.763 4.88 9.748 4.825 9.718 C 4.672 9.635 1.071 7.65 0.193 4.917 C 0.193 4.917 0.193 4.917 0.193 4.917 C-0.358 3.196 0.255 1.035 2.236 0.396 C 3.166 0.095 4.179 0.228 4.999 0.745 C 5.793 0.243 6.848 0.104 7.76 0.396 C 9.743 1.036 10.358 3.197 9.808 4.917 C 8.958 7.618 5.33 9.633 5.176 9.717 C 5.122 9.748 5.061 9.763 5.001 9.763 Z" fill="#767676" />
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M 7.89 3.962 C 7.701 3.962 7.541 3.817 7.525 3.626 C 7.493 3.224 7.225 2.885 6.842 2.762 C 6.649 2.699 6.544 2.492 6.606 2.3 C 6.669 2.108 6.873 2.003 7.067 2.064 C 7.733 2.279 8.199 2.869 8.256 3.566 C 8.272 3.768 8.122 3.945 7.921 3.961 C 7.91 3.962 7.901 3.962 7.89 3.962 Z" fill="#767676" />
      </svg>
    </div>;
}
Heart1.defaultProps = {
  className: ""
};
interface Heart1Props {
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