"use client"

import { MessageSquare, Zap, Bot, Users, Brain, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import MatrixRain from "@/components/MatrixRain"
import ServiceHero from "@/components/ServiceHero"
import PricingCard from "@/components/PricingCard"
import ContactButtons from "@/components/ContactButtons"
import MobileMenu from "@/components/MobileMenu"
import BackToTop from "@/components/BackToTop"

export default function ChatbotsAI() {
  const capabilities = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "WhatsApp Automation",
      description: "Intelligent WhatsApp bots that handle customer inquiries 24/7.",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots",
      description: "Natural language processing for human-like conversations.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Advanced algorithms that learn and improve over time.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Support",
      description: "Automated support tickets and issue resolution.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Responses",
      description: "Real-time processing with sub-second response times.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Detailed insights into bot performance and user interactions.",
    },
  ]

  const useCases = [
    {
      title: "E-Commerce Support",
      description: "Handle product inquiries, orders, and returns automatically",
      features: ["Order tracking", "Product recommendations", "Payment assistance"],
    },
    {
      title: "Lead Generation",
      description: "Qualify and nurture leads through intelligent conversations",
      features: ["Lead scoring", "Appointment booking", "Follow-up automation"],
    },
    {
      title: "Customer Service",
      description: "Provide 24/7 support without human intervention",
      features: ["FAQ automation", "Ticket routing", "Issue resolution"],
    },
    {
      title: "Marketing Automation",
      description: "Engage customers and drive conversions with AI",
      features: ["Personalized messaging", "Campaign tracking", "A/B testing"],
    },
  ]

  const aiPlans = [
    {
      title: "Basic Chatbot",
      price: "KSH 8,000",
      period: "month",
      features: [
        "Single Platform Integration",
        "Basic NLP",
        "Up to 1,000 Conversations",
        "Email Support",
        "Standard Responses",
        "Basic Analytics",
      ],
    },
    {
      title: "Professional Bot",
      price: "KSH 15,000",
      period: "month",
      popular: true,
      features: [
        "Multi-Platform Support",
        "Advanced AI",
        "Unlimited Conversations",
        "Priority Support",
        "Custom Training",
        "Advanced Analytics",
        "Integration API",
        "Lead Capture",
      ],
    },
    {
      title: "Enterprise AI",
      price: "KSH 30,000",
      period: "month",
      features: [
        "Unlimited Platforms",
        "Custom ML Models",
        "Real-time Processing",
        "24/7 Dedicated Support",
        "Advanced Security",
        "Full Analytics Suite",
        "Custom Integrations",
        "Training & Consultation",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-hacker-bg text-hacker-green relative">
      <MobileMenu />
      <BackToTop />
      <MatrixRain />

      <div className="relative z-10">
        <ServiceHero
          title="CHATBOTS & AI"
          subtitle="// Intelligent Automation"
          description="Harness the power of artificial intelligence to automate customer interactions, support, and sales. Our AI-driven solutions provide intelligent conversations, instant responses, and actionable insights."
          icon={<Bot />}
          backgroundPattern="<>"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-tech font-bold text-center mb-16 glow-text"
            >
              // AI CAPABILITIES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glow-border rounded-lg p-6 bg-hacker-terminal/50 backdrop-blur-sm text-center group hover:animate-glow-pulse"
                >
                  <div className="text-hacker-green mb-4 flex justify-center group-hover:animate-pulse">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-tech font-bold text-hacker-green-bright mb-3 glow-text">
                    {capability.title}
                  </h3>
                  <p className="text-hacker-green-dim leading-relaxed">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-tech font-bold text-center mb-16 glow-text"
            >
              // USE CASES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="glow-border rounded-lg p-8 bg-hacker-terminal/50 backdrop-blur-sm group"
                >
                  <h3 className="text-2xl font-tech font-bold text-hacker-green-bright mb-4 glow-text group-hover:animate-flicker">
                    {useCase.title}
                  </h3>
                  <p className="text-hacker-green-dim mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-hacker-green-bright">
                        <span className="text-hacker-green">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-tech font-bold text-center mb-16 glow-text"
            >
              // AI PRICING PLANS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {aiPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  popular={plan.popular}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-tech font-bold text-center mb-16 glow-text"
            >
              // HOW IT WORKS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Setup",
                  description: "Configure your bot with custom parameters",
                },
                {
                  step: "02",
                  title: "Train",
                  description: "Teach AI your business logic and responses",
                },
                {
                  step: "03",
                  title: "Deploy",
                  description: "Go live with your intelligent assistant",
                },
                {
                  step: "04",
                  title: "Monitor",
                  description: "Track performance and continuously improve",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-6xl font-tech font-bold text-hacker-green/30 mb-4">{process.step}</div>
                  <h3 className="text-xl font-tech font-bold text-hacker-green-bright mb-3 glow-text">
                    {process.title}
                  </h3>
                  <p className="text-hacker-green-dim leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-16"
        >
          <div className="container mx-auto px-4">
            <div className="glow-border rounded-lg p-12 bg-hacker-terminal/30 backdrop-blur-sm text-center">
              <h3 className="text-3xl md:text-4xl font-tech font-bold text-hacker-green-bright mb-6 glow-text">
                Ready to Automate Your Business?
              </h3>
              <p className="text-xl text-hacker-green-dim mb-8 max-w-2xl mx-auto">
                Deploy intelligent AI chatbots that work 24/7 to transform your customer interactions and boost
                efficiency.
              </p>
              <ContactButtons />
            </div>
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-8 border-t border-hacker-green/20"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.p
              className="font-tech text-hacker-green-dim hover:text-hacker-green transition-colors duration-300"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              © anonymiketech_inc@2025
            </motion.p>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}
