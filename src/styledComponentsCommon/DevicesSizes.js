
const sizes = {
    mobileS: 'bf',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '560px',
    tabletL: '650px',
    tablet: '768px',
    laptopS: "900px",
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  };

  export const devices = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    tabletS: `(max-width: ${sizes.tabletS})`,
    tabletL: `(max-width: ${sizes.tabletL})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopS: `(max-width: ${sizes.laptopS})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
  };