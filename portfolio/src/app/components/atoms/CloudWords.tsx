import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const container: any = ".content";
const texts = [
  "Regular",
  "Stand-alone",
  "Attentive",
  "Respectful",
  "Team",
  "Happy",
  "Calm",
  "Self-control",
  "Determined",
  "Stubborn",
];
const options: {
  radius: number;
  maxSpeed: "fast" | "slow" | undefined;
  initSpeed: "fast" | "slow" | undefined;
  direction: number;
  keep: boolean;
} = {
  radius: 400,
  maxSpeed: "fast",
  initSpeed: "fast",
  direction: 135,
  keep: false,
};

const WordCloud = () => {
  const tagCloudRendered = useRef(false);

  useEffect(() => {
    // Check if the tagCloud has not been rendered yet
    if (!tagCloudRendered.current) {
      TagCloud(container, texts, options);
      // Set the flag to indicate that the tagCloud has been rendered
      tagCloudRendered.current = true;
    }
  }, []);

  return (
    <div>
      <span className="content"></span>
    </div>
  );
};

export default WordCloud;
