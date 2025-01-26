import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className?: any;
}) => {
  const stringValue = value.toFixed(2);
  const [intValue, FloatValue] = stringValue.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">{FloatValue}</span>
    </p>
  );
};

export default ProductPrice;
