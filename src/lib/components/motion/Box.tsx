import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';
import React from 'react';

// Merge Chakra and Motion props, adjusting as necessary for any complex types like `color`
type MotionBoxProps = HTMLChakraProps<'div'> & HTMLMotionProps<'div'>;

// Use a custom component type instead of React.FC if needed to bypass default children prop
const MotionBox = motion(chakra.div) as React.ComponentType<MotionBoxProps>;

export default MotionBox;
