"use client"

import { TrendingUp, Sparkles, Users, BarChart3, Share2, Target } from "lucide-react"
import { motion } from "framer-motion"
import MatrixRain from "@/components/MatrixRain"
import ServiceHero from "@/components/ServiceHero"
import PricingCard from "@/components/PricingCard"
import ContactButtons from "@/components/ContactButtons"
import MobileMenu from "@/components/MobileMenu"
import BackToTop from "@/components/BackToTop"

export default function SocialMediaBoosting() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Professional Post Design",
      description: "Eye-catching graphics and videos designed to maximize engagement.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Audience Growth",
      description: "Strategic campaigns to attract and retain your target audience.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Detailed performance metrics to understand what works best.",
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Content Scheduling",
      description: "Automated posting at optimal times for maximum reach.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Targeted Campaigns",
      description: "Reach your ideal customers with precision targeting.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Engagement Boosting",
      description: "Proven strategies to increase likes, comments, and shares.",
    },
  ]

  const platforms = [
    {
      name: "Instagram",
      description: "Visual storytelling and influencer partnerships",
      features: ["Reels & Stories", "Hashtag Strategy", "Community Management"],
    },
    {
      name: "TikTok",
      description: "Viral content creation and trend exploitation",
      features: ["Trending Audio", "Short-form Video", "Creator Collaboration"],
    },
    {
      name: "Facebook",
      description: "Community building and targeted advertising",
      features: ["Community Posts", "Event Promotion", "Audience Insights"],
    },
    {
      name: "Twitter/X",
      description: "Real-time engagement and thought leadership",
      features: ["Live Updates", "Thread Creation", "Trending Topics"],
    },
  ]

  const smPlans = [
    {
      title: "Starter Package",
      price: "KSH 5,000",
      period: "month",
      features: [
        "3 Posts Per Week",
        "Basic Graphics",
        "Single Platform",
        "Monthly Report",
        "Community Engagement",
        "Hashtag Research",
      ],
    },
    {
      title: "Growth Package",
      price: "KSH 12,000",
      period: "month",
      popular: true,
      features: [
        "Daily Posts",
        "Professional Graphics",
        "Multi-Platform (3-4)",
        "Weekly Reports",
        "Influencer Outreach",
        "Trend Analysis",
        "Video Content",
        "Contest Management",
      ],
    },
    {
      title: "Premium Package",
      price: "KSH 25,000",
      period: "month",
      features: [
        "Unlimited Posts",
        "Custom Video Content",
        "All Major Platforms",
        "Real-time Analytics",
        "Brand Strategy",
        "Paid Ad Management",
        "Crisis Management",
        "Dedicated Account Manager",
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
          title="SOCIAL MEDIA BOOSTING"
          subtitle="// Viral Growth Strategies"
          description="Maximize your social media presence with data-driven strategies, captivating content, and expert engagement techniques. Watch your followers grow and your message amplify across all platforms."
          icon={<TrendingUp />}
          backgroundPattern="#"
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-tech font-bold text-center mb-16 glow-text"
            >
              // SERVICES & FEATURES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glow-border rounded-lg p-6 bg-hacker-terminal/50 backdrop-blur-sm text-center group hover:animate-glow-pulse"
                >
                  <div className="text-hacker-green mb-4 flex justify-center group-hover:animate-pulse">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-tech font-bold text-hacker-green-bright mb-3 glow-text">
                    {service.title}
                  </h3>
                  <p className="text-hacker-green-dim leading-relaxed">{service.description}</p>
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
              // PLATFORM EXPERTISE
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="glow-border rounded-lg p-8 bg-hacker-terminal/50 backdrop-blur-sm group"
                >
                  <h3 className="text-2xl font-tech font-bold text-hacker-green-bright mb-3 glow-text group-hover:animate-flicker">
                    {platform.name}
                  </h3>
                  <p className="text-hacker-green-dim mb-6 leading-relaxed">{platform.description}</p>
                  <div className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-hacker-green-bright">
                        <span className="text-hacker-green">◆</span>
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
              // GROWTH PACKAGES
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {smPlans.map((plan, index) => (
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
              // SUCCESS METRICS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  metric: "250%",
                  label: "Average Engagement Increase",
                },
                {
                  metric: "10K+",
                  label: "New Followers Per Month",
                },
                {
                  metric: "500%",
                  label: "Reach Growth",
                },
                {
                  metric: "95%",
                  label: "Client Satisfaction",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glow-border rounded-lg p-8 bg-hacker-terminal/50 backdrop-blur-sm text-center"
                >
                  <div className="text-4xl md:text-5xl font-tech font-bold text-hacker-green-bright mb-2 glow-text">
                    {item.metric}
                  </div>
                  <p className="text-hacker-green-dim">{item.label}</p>
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
                Ready to Go Viral?
              </h3>
              <p className="text-xl text-hacker-green-dim mb-8 max-w-2xl mx-auto">
                Let's transform your social media presence into a powerful growth machine. Start your journey to digital
                dominance today.
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
