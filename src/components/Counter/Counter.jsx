import "./Counter.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, memo } from "react";

const CounterItem = memo(function CounterItem({ end, suffix, title }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;

        started.current = true;

        const duration = 1200; // reduced from 2000ms
        const startTime = performance.now();

        function animate(currentTime) {
          const progress = Math.min((currentTime - startTime) / duration, 1);

          setCount(Math.floor(progress * end));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.3,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return (
    <motion.div
      ref={ref}
      className="counter-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h2>
        {count}
        {suffix}
      </h2>

      <p>{title}</p>
    </motion.div>
  );
});

function Counter() {
  const counters = [
    { end: 10, suffix: "+", title: "Projects" },
    { end: 8, suffix: "+", title: "Certificates" },
    { end: 16, suffix: "+", title: "Technologies" },
    { end: 2, suffix: "", title: "Internships" },
  ];

  return (
    <section className="counter-section">
      <div className="counter-container">
        {counters.map((item) => (
          <CounterItem
            key={item.title}
            end={item.end}
            suffix={item.suffix}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(Counter);