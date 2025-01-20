import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BorderSpinner,
  ChaseSpinner,
  BounceSpinner,
  WaveSpinner,
  PulseSpinner,
  Progress,
  Spinner,
  RotatingSpinner,
  ClockSpinner,
  HeartbeatSpinner,
  TextSpinner,
  RippleSpinner,
  GridSpinner,
  DualRingSpinner,
  LoadingOverlay,
  PacmanSpinner,
  TypingSpinner,
  CubeSpinner,
  GlitchSpinner,
  PixelSpinner,
} from "../src";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Components Demo</h1>

      <h2>Spinner Variants</h2>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        <Spinner />
        <BorderSpinner color="#2196F3" size={48} />
        <ChaseSpinner color="red" speed={0.1} size={48} />
        <BounceSpinner color="#FFC107" size={48} />
        <WaveSpinner color="#F44336" size={48} />
        <PulseSpinner color="#9C27B0" size={48} />
        <RotatingSpinner
          size={48}
          color="red"
          speed={0.5}
          thickness={3}
          ringCount={3}
        />
        <ClockSpinner size={48} color="#9C27B0" speed={1} thickness={2} />
        <HeartbeatSpinner size={48} color="#FF4B4B" speed={1} />
        <TextSpinner text="Loading" size={16} color="#333" speed={1} />
        <RippleSpinner size={48} color="#2196F3" speed={1} thickness={2} />
        <GridSpinner
          size={48}
          color="#2196F3"
          speed={1}
          gap={4}
          blockSize={8}
        />
        <DualRingSpinner size={48} color="#2196F3" speed={1} thickness={3} />
        <PacmanSpinner size={48} color="#FFEB3B" speed={1} />
        <TypingSpinner size={48} color="#2196F3" speed={1} />
        <CubeSpinner size={48} color="#2196F3" speed={1} />
        <GlitchSpinner size={48} color="#2196F3" text="Loading" />
        <PixelSpinner size={48} color="#2196F3" text="Loading" />
      </div>

      <h2>Customized Spinners</h2>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        {/* <BorderSpinner
          color="#FF4B2B"
          secondaryColor="#FFE5E5"
          size={60}
          thickness={6}
          speed={1.2}
        />
        <ChaseSpinner color="#4CAF50" size={80} speed={1.5} />
        <WaveSpinner color="#2196F3" size={50} speed={0.6} />
        <RotatingSpinner
          size={60}
          color="#FF4B2B"
          speed={1.2}
          thickness={4}
          ringCount={4}
        />
        <ClockSpinner size={60} color="#FF4B2B" speed={0.8} thickness={3} />
        <HeartbeatSpinner size={60} color="#E91E63" speed={0.8} />
        <TextSpinner
          text="Please wait"
          size={20}
          color="#2196F3"
          speed={0.8}
          dotCount={4}
        />
        <RippleSpinner
          size={60}
          color="#9C27B0"
          speed={1.2}
          thickness={3}
          rippleCount={4}
        />
        <GridSpinner
          size={60}
          color="#FF9800"
          speed={1.2}
          gap={6}
          blockSize={10}
        />
        <DualRingSpinner
          size={60}
          color="#4CAF50"
          secondaryColor="#81C784"
          speed={1.2}
          thickness={4}
        />
        <PacmanSpinner
          size={60}
          color="#FFC107"
          speed={0.8}
          dotCount={10}
          dotSize={10}
        />
        <TypingSpinner
          style={{ background: "gray" }}
          size={60}
          color="#9C27B0"
          speed={0.8}
          dotCount={4}
        /> */}
        <TextSpinner
          text="Loading"
          size={20}
          color="#2196F3"
          speed={0.5}
          dotCount={4}
        />
        <CubeSpinner size={60} color="#000000" speed={1.2} perspective={1000} />
        <GlitchSpinner size={60} color="#FF4B4B" text="ERROR" speed={0.8} />
        <PixelSpinner
          size={60}
          color="#4CAF50"
          text="SAVING"
          speed={0.8}
          pixelSize={6}
        />
      </div>

      <h2>Progress Bar Variants</h2>
      <div
        style={{
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {/* Basic */}
        <Progress value={30} color="#4CAF50" />

        {/* With custom height and text */}
        <Progress
          value={60}
          color="#FFC107"
          height={12}
          showPercentage
          textPosition="center"
        />

        {/* Striped variant */}
        <Progress
          value={progress}
          color="#0066ff"
          height={80}
          showPercentage={true}
          backgroundColor="red"
          borderRadius={4}
          animated={true}
          textColor="white"
          textSize={12}
          textPosition="center"
          striped={true}
          className=""
        />

        {/* Gradient variant */}
        <Progress
          value={90}
          height={16}
          showPercentage
          gradient={{
            colors: ["#FF416C", "#FF4B2B"],
          }}
        />

        {/* Custom styling */}
        <Progress
          value={45}
          height={24}
          showPercentage
          backgroundColor="#e0e0e0"
          borderRadius={12}
          textSize={14}
          textColor="#333"
          style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
        />
      </div>

      <h2>Loading Overlay Examples</h2>
      <div
        style={{
          position: "relative",
          padding: "2rem",
          border: "1px solid #ccc",
        }}
      >
        {/* Container-specific overlay */}
        <LoadingOverlay
          active={true}
          spinnerProps={{
            type: "WaveSpinner",
            size: 40,
            color: "#fff",
          }}
          text="Loading content..."
          overlayColor="rgba(33, 150, 243, 0.8)"
          containerStyle={{ position: "absolute" }}
        />
        <div style={{ height: "200px" }}>Content here...</div>
      </div>

      {/* Full-screen overlay (commented out) */}

      {/* <LoadingOverlay
        active={true}
        spinnerProps={{
          type: "WaveSpinner",
          size: 60,
          color: "#fff",
        }}
        text="Please wait..."
        textStyle={{ fontSize: "1.2rem", color: "#fff", fontWeight: "bold" }}
        overlayColor="rgba(0, 0, 0, 0.8)"
      /> */}
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
