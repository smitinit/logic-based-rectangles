import { useState } from "react";

export default function RenderRectangle({
  width,
  height,
  count,
  bgColor,
}: {
  width: number;
  height: number;
  count: number;
  bgColor?: string;
}) {
  // store the initial state of color (self state)
  const [selfBgColor, setSelfBgColor] = useState<string | null>(null);

  // return if it reaches the maximum count
  if (count === 0) return null;

  // create final props for the next component
  const finalColor = selfBgColor ?? bgColor;
  const finalWidth = width - 100;
  const finalHeight = height - 100;

  return (
    <div
      className="rectangle"
      style={{
        width: finalWidth,
        height: finalHeight,
        backgroundColor: finalColor,
      }}
    >
      <input
        type="text"
        id={"color" + count}
        value={selfBgColor ?? ""}
        onChange={(e) => setSelfBgColor(e.target.value.trim())}
        placeholder="Enter color"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <RenderRectangle
          bgColor={finalColor}
          height={finalHeight}
          width={finalWidth}
          count={count - 1}
        />
      </div>
    </div>
  );
}
