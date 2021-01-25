import { ZONES } from '../../types';
interface SerializerCustomProps {
    bold?: boolean;
    color?: string;
    fontSize?: string;
    withMargins?: boolean;
    inline?: boolean;
    content?: {};
}
export declare const ConfigurableCmsHtmlSerializer: (customProps?: SerializerCustomProps) => (render: unknown) => {
    CallToActionPanel: (node: any, children: any) => JSX.Element;
    Header: (node: any, children: any) => JSX.Element;
    Footer: (node: any, children: any) => JSX.Element;
    GenericSection: (node: any, children: any) => null;
    StaticPlaylist: (node: any, children: any) => null;
    StaticPageConnection: (node: any, children: any) => null;
    MultiColumnSection: (node: any, children: any) => null;
};
export {};
//# sourceMappingURL=ConfigurableCmsHtmlSerializer.d.ts.map