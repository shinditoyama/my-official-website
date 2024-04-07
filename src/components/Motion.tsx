"use client";

import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "./ui/card";

export const MotionDiv = motion.div;

export const MotionHeader = motion.header;

export const MotionSpan = motion.span;

export const MotionH3 = motion.h3;

export const MotionCard = motion(Card);

export const MotionCardTitle = motion(CardTitle);

export const MotionCardDescription = motion(CardDescription);
