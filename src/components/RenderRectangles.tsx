import { useState } from "react";

export default function RenderRectangle({
  width,
  height,
  negateWidth,
  negateHeight,
  count,
}: {
  width: number;
  height: number;
  negateWidth: number;
  negateHeight: number;
  count: number;
  children?: React.ReactElement;
}) {
  const [backgroundColor, setBackgroundColor] = useState("");

  if (count === 0) return;

  const finalWidth = width - negateWidth;
  const finalHeight = height - negateHeight;

  return (
    <div
      className="rectangle"
      style={{
        width: finalWidth + "px",
        height: finalHeight + "px",
        backgroundColor: backgroundColor,
      }}
    >
      <input
        type="text"
        id="color-input"
        onChange={(e) => setBackgroundColor(e.target.value)}
        value={backgroundColor}
      />
      <RenderRectangle
        height={finalHeight}
        width={finalWidth}
        count={count - 1}
        negateHeight={count * 50}
        negateWidth={count * 50}
      />
    </div>
  );
}
