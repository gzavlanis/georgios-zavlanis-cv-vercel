"use client";

import { motion } from "framer-motion";

export const PaperEntrance = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }} // Ξεκινάει λίγο πιο κάτω και λίγο πιο μικρό
            animate={{ opacity: 1, y: 0, scale: 1 }}     // Επανέρχεται στο κανονικό
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }} // Πολύ "Luxury" καμπύλη (cubic-bezier)
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const RevealSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }} // Ενεργοποιείται λίγο πριν μπει πλήρως στην οθόνη
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.05, // Κάθε παιδί εμφανίζεται 0.05s μετά το προηγούμενο
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};