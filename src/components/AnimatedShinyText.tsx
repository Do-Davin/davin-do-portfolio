import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { forwardRef, useState } from 'react';
import type { HTMLAttributes } from 'react';

interface AnimatedShinyTextProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  gradientColors?: string;
  gradientAnimationDuration?: number;
  hoverEffect?: boolean;
  className?: string;
  textClassName?: string;
}

const AnimatedShinyText = forwardRef<HTMLDivElement, AnimatedShinyTextProps>(
  (
    {
      text,
      gradientColors = 'linear-gradient(90deg, #000, #fff, #000)',
      gradientAnimationDuration = 1,
      hoverEffect = false,
      className = '',
      textClassName = '',
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    const textVariants: Variants = {
      initial: {
        backgroundPosition: '0 0',
      },
      animate: {
        backgroundPosition: '100% 0',
        transition: {
          duration: gradientAnimationDuration,
          repeat: Infinity,
          repeatType: 'reverse' as const,
        },
      },
    };

    return (
      <div ref={ref} className={`inline-flex items-center justify-center ${className}`} {...props}>
        <motion.span
          className={`inline-block bg-clip-text text-transparent ${textClassName}`}
          style={{
            backgroundImage: gradientColors,
            backgroundSize: '200% 100%',
          }}
          variants={textVariants}
          initial="initial"
          animate={hoverEffect && isHovered ? 'animate' : 'initial'}
          onHoverStart={() => hoverEffect && setIsHovered(true)}
          onHoverEnd={() => hoverEffect && setIsHovered(false)}
        >
          {text}
        </motion.span>
      </div>
    );
  }
);

AnimatedShinyText.displayName = 'AnimatedShinyText';

export default AnimatedShinyText;
