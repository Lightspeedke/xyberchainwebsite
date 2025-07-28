"use client"

import { Bolt, Shield, Users, Code } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 }) // Trigger when 30% of component is in view

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
            >
              Key Features
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
            >
              Why Choose Xyberchain?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Xyberchain is built on a foundation of cutting-edge technology, offering unparalleled performance and
              reliability.
            </motion.p>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2, // Stagger animation for each child
              },
            },
          }}
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12"
        >
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <motion.li variants={itemVariants} transition={{ duration: 0.5 }}>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Bolt className="h-5 w-5 text-xyber-cyan-500" /> Scalability
                  </h3>
                  <p className="text-muted-foreground">
                    Process thousands of transactions per second with low fees, ensuring a smooth user experience.
                  </p>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} transition={{ duration: 0.5 }}>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Shield className="h-5 w-5 text-xyber-cyan-500" /> Robust Security
                  </h3>
                  <p className="text-muted-foreground">
                    Leveraging advanced cryptographic techniques to protect your assets and data.
                  </p>
                </div>
              </motion.li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <motion.li variants={itemVariants} transition={{ duration: 0.5 }}>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Users className="h-5 w-5 text-xyber-cyan-500" /> Decentralization
                  </h3>
                  <p className="text-muted-foreground">
                    A truly decentralized network, resistant to censorship and single points of failure.
                  </p>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} transition={{ duration: 0.5 }}>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Code className="h-5 w-5 text-xyber-cyan-500" /> Developer Friendly
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive documentation and tools to help developers build and deploy dApps effortlessly.
                  </p>
                </div>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
