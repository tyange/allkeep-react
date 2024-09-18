import classNames from "classnames";

import { Size } from "../../constants/Size";

type SpinnerProps = {
  size: Size;
};

export default function Spinner({ size }: SpinnerProps): React.ReactNode {
  const className = classNames("loading", "loading-spinner", {
    "loading-xs": size === Size.EXTRA_SMALL,
    "loading-sm": size === Size.SMALL,
    "loading-md": size === Size.MEDIUM,
    "loading-lg": size === Size.LARGE,
  });

  return (
    <div className="flex w-full h-full justify-center items-center">
      <span className={className}></span>
    </div>
  );
}
