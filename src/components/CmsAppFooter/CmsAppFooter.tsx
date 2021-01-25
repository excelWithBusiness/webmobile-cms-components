import React, {FC} from 'react'
import { AppFooter } from '@excelwithbusiness/webmobile-sc-components'

export const CmsAppFooter: FC<any> = ({id, links, logoUrl, description}) => {
  // use the ID from the Instance to query Footer
  return <AppFooter text={description} links={links} logoUrl={logoUrl} padding />
}

