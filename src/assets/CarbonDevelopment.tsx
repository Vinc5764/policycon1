export default function CarbonDevelopment(props: CarbonDevelopmentProps) {
  return <div className="w-10 h-10"  >
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"  >
        <path d="M 10 5 V 10 H 5 V 5 H 10 Z M 2.5 2.5 V 12.5 H 12.5 V 2.5 H 2.5 Z M 22.5 8.75 V 13.75 H 17.5 V 8.75 H 22.5 Z M 15 6.25 V 16.25 H 25 V 6.25 H 15 Z M 10 20 V 25 H 5 V 20 H 10 Z M 2.5 17.5 V 27.5 H 12.5 V 17.5 H 2.5 Z" fill="#00B2FF" />
        <path d="M 27.5 12.5 V 20 H 20 V 27.5 H 12.5 V 37.5 H 37.5 V 12.5 H 27.5 Z M 22.5 22.5 H 27.5 V 27.5 H 22.5 V 22.5 Z M 20 35 H 15 V 30 H 20 V 35 Z M 27.5 35 H 22.5 V 30 H 27.5 V 35 Z M 35 35 H 30 V 30 H 35 V 35 Z M 35 27.5 H 30 V 22.5 H 35 V 27.5 Z M 30 20 V 15 H 35 V 20 H 30 Z" fill="#00B2FF" />
      </svg>
    </div>;
}
CarbonDevelopment.defaultProps = {
  className: ""
};
interface CarbonDevelopmentProps {
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