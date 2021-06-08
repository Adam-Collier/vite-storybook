declare module "utils/decode-html-entities" {
    export function decodeHtmlEntities(html: any): string;
}
declare module "components/Blogpost/index" {
    export const Wrapper: any;
    export function Blogpost({ data, className }: {
        data: any;
        className: any;
    }): JSX.Element;
    export namespace Blogpost {
        namespace propTypes {
            const data: PropTypes.Validator<object>;
            const className: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "utils/fetcher" {
    export function fetcher(url: any): Promise<any>;
}
declare module "components/Blogposts/index" {
    export function Blogposts(props: any): JSX.Element;
    export namespace Blogposts {
        namespace propTypes {
            const postIds: PropTypes.Validator<any[]>;
            const isCarousel: PropTypes.Requireable<boolean>;
            const slidesPerView: PropTypes.Requireable<number>;
            const slidesPerViewMob: PropTypes.Requireable<number>;
            const spacing: PropTypes.Requireable<number>;
            const offsetStart: PropTypes.Requireable<number>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Button/index" {
    export function Button({ text, link, type, variant, className, onClick, icon, isFullWidth, size, }: {
        text: any;
        link: any;
        type?: string;
        variant: any;
        className: any;
        onClick: any;
        icon: any;
        isFullWidth: any;
        size?: string;
    }): JSX.Element;
    export namespace Button {
        namespace defaultProps {
            const size: string;
            const variant: string;
            const onClick: any;
        }
        namespace propTypes {
            export const link: PropTypes.Requireable<string>;
            export const text: PropTypes.Requireable<string>;
            const variant_1: PropTypes.Requireable<string>;
            export { variant_1 as variant };
            export const type: PropTypes.Requireable<string>;
            export const className: PropTypes.Requireable<string>;
            const onClick_1: PropTypes.Requireable<(...args: any[]) => any>;
            export { onClick_1 as onClick };
            export const icon: PropTypes.Requireable<PropTypes.ReactComponentLike>;
            export const isFullWidth: PropTypes.Requireable<boolean>;
            const size_1: PropTypes.Requireable<string>;
            export { size_1 as size };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Carousel/index" {
    export namespace keenConfig {
        const loop: boolean;
        const duration: number;
    }
    export function Carousel({ children, slidesPerView, slidesPerViewMob, spacing, offsetStart, arrowsPosition, }: {
        children: any;
        slidesPerView?: number;
        slidesPerViewMob?: number;
        spacing?: number;
        offsetStart: any;
        arrowsPosition?: string[];
    }): JSX.Element;
    export namespace Carousel {
        namespace propTypes {
            const slidesPerView: PropTypes.Requireable<number>;
            const slidesPerViewMob: PropTypes.Requireable<number>;
            const spacing: PropTypes.Requireable<number>;
            const offsetStart: PropTypes.Requireable<number>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Flex/index" {
    export function Flex(props: any): JSX.Element;
    export namespace Flex {
        namespace propTypes {
            const gap: PropTypes.Requireable<number>;
            const align: PropTypes.Requireable<string>;
            const justify: PropTypes.Requireable<string>;
            const direction: PropTypes.Requireable<string>;
            const itemFlex: PropTypes.Requireable<string | any[]>;
            const padding: PropTypes.Requireable<boolean>;
            const maxWidth: PropTypes.Requireable<string>;
            const customMaxWidth: PropTypes.Requireable<number>;
        }
        namespace defaultProps {
            const gap_1: number;
            export { gap_1 as gap };
            const direction_1: string;
            export { direction_1 as direction };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Grid/index" {
    export function Grid(props: any): JSX.Element;
    export namespace Grid {
        namespace propTypes {
            const gap: PropTypes.Requireable<number>;
            const wrapWidth: PropTypes.Requireable<number>;
            const padding: PropTypes.Requireable<boolean>;
            const maxWidth: PropTypes.Requireable<string>;
            const customMaxWidth: PropTypes.Requireable<number>;
        }
        namespace defaultProps {
            const gap_1: number;
            export { gap_1 as gap };
            const wrapWidth_1: number;
            export { wrapWidth_1 as wrapWidth };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/HeroBanner/index" {
    export function HeroBanner(props: any): JSX.Element;
    export namespace HeroBanner {
        namespace propTypes {
            const className: PropTypes.Requireable<string>;
            const buttonText: PropTypes.Requireable<string>;
            const buttonVariant: PropTypes.Requireable<string>;
            const buttonType: PropTypes.Requireable<string>;
            const link: PropTypes.Validator<string>;
            const logo: PropTypes.Requireable<string>;
            const subcopy: PropTypes.Requireable<string>;
            const contentBackground: PropTypes.Requireable<string>;
            const contentColor: PropTypes.Requireable<string>;
            const alt: PropTypes.Validator<string>;
            const src: PropTypes.Validator<any[]>;
            const width: PropTypes.Requireable<number>;
            const height: PropTypes.Requireable<number>;
            const sizes: PropTypes.Requireable<string>;
            const noLogoBackground: PropTypes.Requireable<boolean>;
            const noContentBackground: PropTypes.Requireable<boolean>;
        }
        namespace defaultProps {
            const width_1: number;
            export { width_1 as width };
            const height_1: number;
            export { height_1 as height };
            const sizes_1: string;
            export { sizes_1 as sizes };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Image/index" {
    export function Image(props: any): JSX.Element;
    export namespace Image {
        namespace propTypes {
            const width: PropTypes.Requireable<number>;
            const alt: PropTypes.Validator<string>;
            const src: PropTypes.Validator<string | any[]>;
            const quality: PropTypes.Requireable<number>;
            const sizes: PropTypes.Requireable<string>;
            const height: PropTypes.Requireable<number>;
            const backgroundColor: PropTypes.Requireable<string>;
        }
        namespace defaultProps {
            const backgroundColor_1: string;
            export { backgroundColor_1 as backgroundColor };
            const quality_1: number;
            export { quality_1 as quality };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/ImageRow/index" {
    export function ImageRow({ layout, reverse, images }: {
        layout: any;
        reverse: any;
        images: any;
    }): JSX.Element;
    export namespace ImageRow {
        namespace defaultProps {
            const layout: string;
        }
        namespace propTypes {
            const layout_1: PropTypes.Requireable<string>;
            export { layout_1 as layout };
            export const reverse: PropTypes.Requireable<boolean>;
            export const images: PropTypes.Requireable<any[]>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Row/index" {
    export const Row: any;
}
declare module "components/ShoppableImage/index" {
    export function ShoppableImage(props: any): JSX.Element;
    export namespace ShoppableImage {
        namespace propTypes {
            const link: PropTypes.Requireable<string>;
            const text: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Stack/index" {
    export function Stack(props: any): JSX.Element;
    export namespace Stack {
        namespace propTypes {
            const as: PropTypes.Requireable<string>;
            const className: PropTypes.Requireable<string>;
            const style: PropTypes.Requireable<string>;
            const gap: PropTypes.Requireable<number>;
            const align: PropTypes.Requireable<string>;
            const justify: PropTypes.Requireable<string>;
            const direction: PropTypes.Requireable<string>;
            const itemFlex: PropTypes.Requireable<string | any[]>;
            const padding: PropTypes.Requireable<boolean>;
            const maxWidth: PropTypes.Requireable<string>;
            const customMaxWidth: PropTypes.Requireable<number>;
        }
        namespace defaultProps {
            const as_1: string;
            export { as_1 as as };
            const direction_1: string;
            export { direction_1 as direction };
            const gap_1: number;
            export { gap_1 as gap };
            const align_1: string;
            export { align_1 as align };
            const justify_1: string;
            export { justify_1 as justify };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Text/index" {
    export function Text(props: any): JSX.Element;
    export namespace Text {
        namespace propTypes {
            const heading: PropTypes.Requireable<boolean>;
            const titling: PropTypes.Requireable<boolean>;
            const align: PropTypes.Requireable<string>;
            const size: PropTypes.Requireable<string>;
            const element: PropTypes.Requireable<string>;
            const weight: PropTypes.Requireable<number>;
            const lineHeight: PropTypes.Requireable<number>;
            const truncate: PropTypes.Requireable<number>;
            const color: PropTypes.Requireable<string>;
        }
        namespace defaultProps {
            const heading_1: boolean;
            export { heading_1 as heading };
            const element_1: string;
            export { element_1 as element };
            const size_1: string;
            export { size_1 as size };
            const align_1: string;
            export { align_1 as align };
            const weight_1: number;
            export { weight_1 as weight };
            const lineHeight_1: number;
            export { lineHeight_1 as lineHeight };
        }
    }
    import PropTypes from "prop-types";
}
