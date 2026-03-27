import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1] 
    }
  }
};

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.4, 0, 0.2, 1] 
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.4, 0, 0.2, 1] 
    }
  }
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02, 
    transition: { duration: 0.2, ease: 'easeOut' } 
  }
};

export const liftOnHover = {
  rest: { y: 0 },
  hover: { 
    y: -4, 
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } 
  }
};

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1] 
    }
  }
};

export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.4, 0, 0.2, 1] 
    }
  }
};

export const navbarVariants: Variants = {
  top: {
    backgroundColor: 'rgba(253, 252, 248, 0)',
    boxShadow: '0 0 0 rgba(0,0,0,0)',
  },
  scrolled: {
    backgroundColor: 'rgba(253, 252, 248, 0.95)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  }
};
