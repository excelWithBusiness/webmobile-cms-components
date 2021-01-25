import React, {FC} from 'react'
import { AppHeaderComponent as Header, AppHeaderProps } from '@excelwithbusiness/webmobile-sc-components'

export const CmsAppHeader: FC<Partial<AppHeaderProps>> = ({id, headerContent, socialSharing, logoUrl, onLogoClick}) => {
  // use the ID from the Instance to query Header
  return <Header headerContent={headerContent} socialSharing={socialSharing} logoUrl={logoUrl} onLogoClick={onLogoClick} navigationMenu={null}  languages={null} />
}

