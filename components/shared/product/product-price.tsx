import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: Number;
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
