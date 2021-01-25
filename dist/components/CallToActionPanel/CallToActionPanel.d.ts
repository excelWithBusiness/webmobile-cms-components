import { FC } from 'react';
import { ImageAndTextProps } from '@excelwithbusiness/webmobile-sc-components';
export declare type SelectableOrientation = 'left' | 'right';
declare type CmsButton = {
    id: string;
    text: string;
    link?: string | null;
    type: string | null;
};
declare type CmsImage = {
    id: string;
    url: string;
    fileName?: string;
    mimeType?: string;
    width?: number;
    height?: number;
    size?: number;
    type?: string | null;
};
declare type CallToActionPanel = {
    type: string;
    id: string;
    button: CmsButton;
    description: string;
    heading: string;
    image: CmsImage;
    rightOrientation: string;
    title: string;
};
export interface CmsCallToActionPanelProps extends ImageAndTextProps {
    content: CallToActionPanel;
}
export declare const CmsCallToActionPanel: FC<CmsCallToActionPanelProps>;
export {};
//# sourceMappingURL=CallToActionPanel.d.ts.map