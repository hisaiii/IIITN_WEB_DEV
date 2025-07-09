import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const StatsCounter = ({ counters = {} }) => {

    // Ensure data is properly formatted
    const data = {};
    if (counters["number-1"] && counters["relatedText-1"]) {
        data[counters["number-1"]] = counters["relatedText-1"];
    }
    if (counters["number-2"] && counters["relatedText-2"]) {
        data[counters["number-2"]] = counters["relatedText-2"];
    }
    if (counters["number-3"] && counters["relatedText-3"]) {
        data[counters["number-3"]] = counters["relatedText-3"];
    }
    if (counters["number-4"] && counters["relatedText-4"]) {
        data[counters["number-4"]] = counters["relatedText-4"];
    }

    const [startCounting, setStartCounting] = useState(false);
    const ref = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                    controls.start({ opacity: 1, y: 0 });
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [controls]);

    const Counter = ({ value }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (startCounting) {
                let start = 0;
                const end = parseInt(value, 10) || 0;
                const duration = 2000;
                const increment = end / (duration / 16);

                const timer = setInterval(() => {
                    start += increment;
                    setCount(Math.ceil(start));
                    if (start >= end) clearInterval(timer);
                }, 16);
                return () => clearInterval(timer); // Cleanup to avoid memory leaks
            }
        }, [startCounting, value]);

        return <span>{count}</span>;
    };

    return (
        <div ref={ref} className="w-full py-16">
            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-8 w-[90%] mx-auto text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 1 }}
            >
                {Object.keys(data).map((key, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                    >
                        <h2 className="text-4xl font-bold text-blue-600 mb-2">
                            <Counter value={key} />+
                        </h2>
                        <p className="text-gray-700 font-medium">{data[key]}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default StatsCounter;
