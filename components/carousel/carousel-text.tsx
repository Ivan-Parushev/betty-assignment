export interface CarouselTextProps extends React.HTMLAttributes<HTMLElement> {
  readonly text: string;
}
export const CarouselText = ({ text, ...props }: CarouselTextProps) => {
  return <div {...props}>{text}</div>;
};
