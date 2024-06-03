// Define CustomMapMarker functional component with props for title, windowWidth, and dietary flags
const CustomMapMarker = ({
  title,
  windowWidth,
  VEGAN,
  HALAL,
  GLUTEN_FREE,
  LOCTO_FREE,
}) => {
  // Function to conditionally render an image container based on a condition
  const renderImageContainer = (condition, imageUrl) => {
    if (condition) {
      return `<div style="display: flex; align-items: center; justify-content: center; width: 2.8rem; height: 2.8rem; margin-right: 0px;">
        <div style="width: 92%; display: flex; flex-direction: row; height: 92%; background-image: url(${imageUrl}); background-size: contain; background-position: center; background-repeat: no-repeat;"></div>
      </div>`;
    }
    return "";
  };
  // Array to hold HTML content for mobile view
  const mobileContentArray = [
    '<div style="margin: 0; display: flex; align-items: center; padding: 0.5rem; border-radius: 2.3rem; border: 0.2rem solid var(--color--darkgreen); background: #D9F2EF; cursor: pointer; position: relative; z-index: 2">',
    '<div style="flex-grow: 1; display: flex; align-items: center; overflow: hidden;">',

    // Text container
    `<div style="flex-grow: 1; max-width: calc(100% - 2.5rem); padding-left: 0.5rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 1.05rem; letter-spacing: -0.028rem; font-weight: 600; line-height: 2.5rem;">${title}</div>`,

    // Conditional rendering of image containers based on dietary flags
    renderImageContainer(VEGAN, "./assets/flag_vegan.svg"),
    renderImageContainer(HALAL, "./assets/flag_halal.svg"),
    renderImageContainer(GLUTEN_FREE, "./assets/flag_glutenfree.svg"),
    renderImageContainer(LOCTO_FREE, "./assets/flag_loctosfree.svg"),
    "</div>",
    "</div>",
  ];

  // Array to hold HTML content for PC view
  const PCContentArray = [
    // Outer container allowing for table-cell alignment of inner elements
    '<div style="margin: 0; display: table; padding: 0.35rem; table-layout: auto; border-radius: 18.468px; border: 0.14rem solid var(--color--darkgreen); background: #D9F2EF; cursor: pointer; position: relative; z-index: 2; box-shadow:0px 24px 48px 0 rgba(0,0,0,0.16);">',
    // Flex container to align text container and icon container
    '<div style="display: flex; align-items: center;">',
    // Text container
    '<div style="max-width: 16.1rem; height: 2.8rem; padding: 0 0.56rem 0 0.56rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: table-cell; vertical-align: middle; cursor: pointer; font-size: 1.05rem; letter-spacing: -0.028rem; font-weight: 600; line-height: 2.8rem;">',
    title,
    "</div>",
    // Conditional rendering of image containers based on dietary flags
    renderImageContainer(VEGAN, "./assets/flag_vegan.svg"),
    renderImageContainer(HALAL, "./assets/flag_halal.svg"),
    renderImageContainer(GLUTEN_FREE, "./assets/flag_glutenfree.svg"),
    renderImageContainer(LOCTO_FREE, "./assets/flag_loctosfree.svg"),
    "</div>", // Close flex container
    // Style adjustments to create an inverted triangle
    '<span style="position: absolute; border-style: solid; border-width: 1.08rem 0.9rem 0 0.9rem; border-color: #D9F2EF transparent; display: block; width: 0; z-index: 0; top: 3.35rem; left: 1.8rem; box-shadow:0px 24px 48px 0 rgba(0,0,0,0.16);"></span>',
    "</div>",
  ];

  // Return mobileContentArray as a string for window widths less than 768px, else return PCContentArray as a string
  if (windowWidth < 768) return mobileContentArray.join("");

  return PCContentArray.join("");
};

// Export CustomMapMarker as the default export of this module
export default CustomMapMarker;
