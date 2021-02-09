export const prepareEntries = ({ pageComponents }) =>
  pageComponents.entries
    .map(({ title, description }) => ({
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
    )

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
  }
}

const renderTextRows = (text: string) => {
  return text.split('\n').reduce((children: any, textSegment: any, index: number) => {
    return [...children, index > 0 && <br key={index} />, textSegment]
  }, [])
}

export const formatToStaticAsset = assets.map(({ id, title, providerLabel, image, locked }) => {
  return {
    id,
    title,
    niceName: `${id}-${title.toLowerCase().split(' ').join('-')}`,
    type: {
      id: 0,
      name: providerLabel,
    },
    image: image.url,
    locked,
  }
})
