export default function MaskGroup(props: MaskGroupProps) {
  return <div className="inset-0 absolute w-[1021px] h-[463px]"  >
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1021 463" fill="none" xmlns="http://www.w3.org/2000/svg"  >
        <mask id="mask0_1348_1949" maskUnits="userSpaceOnUse" x="0" y="0" width="1021" height="463">
          <rect x="0.827148" width="1019.49" height="463" fill="#E0FF22" />
        </mask>
        <g mask="url(#mask0_1348_1949)">
          <ellipse cx="382.649" cy="232.158" rx="298.051" ry="296.14" transform="rotate(90 382.649 232.158)" fill="url(#paint0_linear_1348_1949)" />
          <ellipse cx="697.105" cy="232.158" rx="298.051" ry="296.14" transform="rotate(90 697.105 232.158)" fill="url(#paint1_linear_1348_1949)" />
          <ellipse cx="100.147" cy="232.158" rx="298.051" ry="296.14" transform="rotate(90 100.147 232.158)" fill="url(#paint2_linear_1348_1949)" />
          <ellipse cx="-182.356" cy="232.158" rx="298.051" ry="296.14" transform="rotate(90 -182.356 232.158)" fill="url(#paint3_linear_1348_1949)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_1348_1949" x1="385.427" y1="-11.8678" x2="412.854" y2="565.051" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3434" />
            <stop offset="1" stopColor="#E98383" />
          </linearGradient>
          <linearGradient id="paint1_linear_1348_1949" x1="699.883" y1="-11.8678" x2="727.31" y2="565.051" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3434" />
            <stop offset="1" stopColor="#E98383" />
          </linearGradient>
          <linearGradient id="paint2_linear_1348_1949" x1="102.925" y1="-11.8678" x2="130.352" y2="565.051" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3434" />
            <stop offset="1" stopColor="#E98383" />
          </linearGradient>
          <linearGradient id="paint3_linear_1348_1949" x1="-179.578" y1="-11.8678" x2="-152.151" y2="565.051" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3434" />
            <stop offset="1" stopColor="#E98383" />
          </linearGradient>
        </defs>
      </svg>
    </div>;
}
MaskGroup.defaultProps = {
  className: ""
};
interface MaskGroupProps {
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