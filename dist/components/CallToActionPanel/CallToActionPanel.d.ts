import { FC } from 'react';
import { Image, ImageAndTextProps } from '@excelwithbusiness/webmobile-sc-components';
export declare type SelectableOrientation = 'left' | 'right';
declare type CmsButton = {
    id: string;
    text: string;
    link?: string | undefined;
    type: string | undefined;
};
export interface CmsImage {
    id: string;
    url: string;
    alt?: string;
    fileName?: string;
    mimeType?: string;
    width?: number;
    height?: number;
    size?: number;
    type?: string | undefined;
}
declare type CallToActionPanel = {
    type: string;
    id: string;
    button: CmsButton;
    description: string;
    heading: string;
    image: Image | undefined;
    rightOrientation: string;
    title: string;
};
export interface CmsCallToActionPanelProps extends ImageAndTextProps {
    content: CallToActionPanel;
}
export declare const CmsCallToActionPanel: FC<CmsCallToActionPanelProps>;
export {};
//# sourceMappingURL=CallToActionPanel.d.ts.map