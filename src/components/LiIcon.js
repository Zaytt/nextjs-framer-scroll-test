import React from 'react';
import { useScroll, motion } from 'framer-motion';
const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
  });

  const [YProgress, setYProgress] = React.useState(0);

  React.useEffect(() => {
    // hook into the onChange, store the current value as state.
    setYProgress(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <figure className="absolute left-0 stroke-dark">
      <svg width="75" height="75" viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light"
          style={{
            pathLength: YProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;