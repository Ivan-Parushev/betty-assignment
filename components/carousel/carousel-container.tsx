export interface CarouselContainerProps
  extends React.HTMLAttributes<HTMLElement> {}

export const CarouselContainer = ({
  children,
  ...props
}: CarouselContainerProps) => {
  return <div {...props}>{children}</div>;
};
