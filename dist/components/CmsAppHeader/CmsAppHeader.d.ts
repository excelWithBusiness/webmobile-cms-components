import { FC } from 'react';
import { HeaderContent } from '@excelwithbusiness/webmobile-sc-components';
export interface CmsAppHeaderProps {
    socialSharing: JSX.Element;
    headerContent: HeaderContent;
    button: {
        actionLabel: string;
        href: string;
    };
    logoUrl: string;
    onLogoClick: () => void;
}
export declare const CmsAppHeader: FC<CmsAppHeaderProps>;
//# sourceMappingURL=CmsAppHeader.d.ts.map