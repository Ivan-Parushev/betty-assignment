import Image from "next/image";

export interface CarouselItemProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  readonly imgSrc: string;
  readonly alt: string;
}

export const CarouselItem = ({ imgSrc, alt, className }: CarouselItemProps) => {
  return <Image className={className} src={imgSrc} alt={alt} fill priority />;
};
