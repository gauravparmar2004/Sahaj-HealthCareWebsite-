import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Helper to animate step-by-step
const sequenceAnimation = (steps, delay, callback) => {
  let i = 0;
  const run = () => {
    if (i < steps.length) {
      callback(steps[i]);
      i++;
      setTimeout(run, delay);
    }
  };
  run();
};

const Gauge = ({ value, label, unit, max = 100 }) => {
  const angle = (value / max) * 180 - 90;
  const rotate = useMotionValue(-90);
  const spring = useSpring(rotate, { stiffness: 80, damping: 14 });

  useEffect(() => {
    rotate.set(angle);
  }, [value]);

  const getColorByValue = (val) => {
    if (val < 40) return "#f87171";
    if (val < 70) return "#facc15";
    return "#4ade80";
  };

  return (
    <div className="relative w-64 h-32">
      {/* Arc */}
      <svg viewBox="0 0 200 100" className="w-full h-full">
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={getColorByValue(value)}
          strokeWidth="20"
          strokeLinecap="round"
        />
      </svg>

      {/* Needle */}
      <motion.div
        className="absolute top-[84px] left-1/2 w-[4px] h-[70px] bg-white origin-bottom"
        style={{ rotate: spring }}
      />

      {/* Value Display Below */}
      <div className="absolute -bottom-20 w-full text-center text-white font-bold text-xl">
        {label}: {value} {unit}
      </div>
    </div>
  );
};

export default function IoT() {
  const [started, setStarted] = useState(false);
  const [spo2, setSpo2] = useState(0);
  const [heartRate, setHeartRate] = useState(0);

  const startGauge = () => {
    setStarted(true);
    // Final values
    const finalSpo2 = Math.floor(Math.random() * 5) + 95; // 95-99
    const finalHR = Math.floor(Math.random() * 40) + 60; // 60-100

    const sequence = [0, 30, 60, 90, 100, 70, 40, 0, finalSpo2];
    const hrSequence = [0, 40, 80, 120, 160, 100, 60, 0, finalHR];

    sequenceAnimation(sequence, 300, setSpo2);
    sequenceAnimation(hrSequence, 300, setHeartRate);
  };

  return (
    <div className="min-h-screen bg-[#0F1117] text-white flex flex-col items-center pt-40 gap-10 p-4">
      <h1 className="text-5xl font-bold mb-4 text-gray-300 underline underline-offset-5">Health Vitals Monitoring</h1>

      {!started && (
        <motion.button
          onClick={startGauge}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-600 transition-all"
        >
          Start Speedometer
        </motion.button>
      )}

      {started && (
        <div className="flex flex-col md:flex-row gap-12 items-center mt-4">
          <Gauge label="SpO₂" value={spo2} unit="%" />
          <Gauge label="Heart Rate" value={heartRate} unit="bpm" max={200} />
        </div>
      )}
    </div>
  );
}
