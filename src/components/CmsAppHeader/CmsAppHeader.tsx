import React, { FC } from 'react'
import {
  AppHeaderComponent as Header,
  HeaderContent,
} from '@excelwithbusiness/webmobile-sc-components'

export interface CmsAppHeaderProps {
  socialSharing: JSX.Element
  headerContent: HeaderContent
  button: { actionLabel: string; href: string }
  logoUrl: string
  onLogoClick: () => void
}

export const CmsAppHeader: FC<CmsAppHeaderProps> = ({
  headerContent,
  socialSharing,
  logoUrl,
  button,
  onLogoClick,
}) => {
  // use the ID from the Instance to query Header
  return (
    <Header
      headerContent={headerContent}
      renderSocialSharing={socialSharing}
      logoUrl={logoUrl}
      button={button}
      onLogoClick={() => onLogoClick?.()}
      onButtonClick={() => null}
      onLanguageChoice={() => null}
      setFilter={() => null}
      clearFilter={() => null}
    />
  )
}
