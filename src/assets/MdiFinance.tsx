export default function MdiFinance(props: MdiFinanceProps) {
  return <div className="w-10 h-10"  >
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"  >
        <path d="M 10 27.5 L 5 32.4 V 18.333 H 10 M 18.333 24.433 L 15.717 22.2 L 13.333 24.4 V 11.667 H 18.333 M 26.667 21.667 L 21.667 26.667 V 5 H 26.667 M 31.35 21.35 L 28.333 18.333 H 36.667 V 26.667 L 33.683 23.683 L 21.667 35.6 L 15.883 30.567 L 9.583 36.667 H 5 L 15.783 26.1 L 21.667 31.067" fill="#CC00FF" />
      </svg>
    </div>;
}
MdiFinance.defaultProps = {
  className: ""
};
interface MdiFinanceProps {
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