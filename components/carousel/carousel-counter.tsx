export interface CarouselCounterProps
  extends React.HTMLAttributes<HTMLElement> {
  readonly current: number;
  readonly total: number;
}

export const CarouselCounter = ({
  current,
  total,
  ...props
}: CarouselCounterProps) => {
  return (
    <div {...props}>
      {current} / {total}
    </div>
  );
};
