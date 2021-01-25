import React, { FC } from 'react'
import {
  AppHeaderComponent as Header,
  HeaderContent,
} from '@excelwithbusiness/webmobile-sc-components'

export interface CmsAppHeaderProps {
  socialSharing: JSX.Element
  headerContent: HeaderContent
  logoUrl: string
  onLogoClick: () => void
}

export const CmsAppHeader: FC<CmsAppHeaderProps> = ({
  headerContent,
  socialSharing,
  logoUrl,
  onLogoClick,
}) => {
  // use the ID from the Instance to query Header
  return (
    <Header
      headerContent={headerContent}
      renderSocialSharing={socialSharing}
      logoUrl={logoUrl}
      onLogoClick={() => onLogoClick?.()}
    />
  )
}
