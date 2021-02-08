export const prepareEntries = ({pageComponents}) =>
  pageComponents.entries
    .map(({title, description}) => ({
      title,
      details: description,
    }))
    .map((e, i) =>
      i === 0
        ? {
            ...e,
            isOpenInitially: true,
            noBorderTop: true,
          }
        : e
    );

export const prepareHeroContentProps = (heroBanner, name) => {
  return {
    primary: heroBanner.primaryLabel,
    secondary: heroBanner.secondaryLabel,
    images: heroBanner.image
      ? {
        xl: heroBanner.image.url,
        lg: heroBanner.image.url,
        md: heroBanner.image.url,
        sm: heroBanner.image.url,
      }
      : undefined,
    heroImages: heroBanner.heroImages
      ? {
        xl: heroBanner.heroImages[0].url,
        lg: heroBanner.heroImages[0].url,
        md: heroBanner.heroImages[0].url,
        sm: heroBanner.heroImages[0].url,
      }
      : undefined,
    name,
  };
};
