import { FC } from 'react';
import { HeaderContent, AppHeaderProps } from '@excelwithbusiness/webmobile-sc-components';
export interface CmsAppHeaderProps extends AppHeaderProps {
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