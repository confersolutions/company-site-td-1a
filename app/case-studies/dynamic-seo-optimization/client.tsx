"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConsultationButton } from "@/components/consultation-button"
import {
  Search,
  TrendingUp,
  Globe,
  BarChart3,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export function DynamicSEOClient() {
  const [animatedStats, setAnimatedStats] = useState({
    traffic: 0,
    rankings: 0,
    ctr: 0,
    revenue: 0,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        traffic: 45,
        rankings: 23,
        ctr: 38,
        revenue: 1.8,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2 text-lg font-semibold">
            45% Traffic Increase in 6 Months
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            AI-Powered Dynamic SEO
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Making Seasonal URLs Permanent: How we transformed temporary campaign pages into year-round traffic drivers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ConsultationButton className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" showArrow={false}>
              Schedule SEO Audit
            </ConsultationButton>
            <Button
              variant="outline"
              className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 dark:border-blue-800 dark:hover:border-blue-700 dark:hover:bg-blue-900/20 bg-transparent"
            >
              Download Case Study
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{animatedStats.traffic}%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Traffic Growth</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{animatedStats.rankings}%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Ranking Improvement</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{animatedStats.ctr}%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">CTR Increase</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{animatedStats.revenue}M</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Revenue Impact</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-4 py-2 text-lg font-semibold">
              The Challenge
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Seasonal Traffic Was Going to Waste
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A major e-commerce brand was losing millions in potential revenue by letting seasonal campaign URLs expire instead of leveraging their SEO value year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-4">Lost SEO Value</h3>
                <p className="text-red-700 dark:text-red-300 mb-4">
                  Seasonal URLs with strong rankings were discarded after campaigns, wasting months of SEO investment
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">Revenue Gaps</h3>
                <p className="text-orange-700 dark:text-orange-300 mb-4">
                  11-month traffic voids between seasonal campaigns created massive revenue gaps
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-800">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/50 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">Manual Inefficiency</h3>
                <p className="text-yellow-700 dark:text-yellow-300 mb-4">
                  Manual content updates and URL management consumed weeks of valuable marketing time
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            AI-Powered SEO Transformation
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Our intelligent SEO automation system transformed seasonal campaigns into permanent revenue drivers, 
            automatically adapting content and maintaining rankings year-round.
          </p>
          <ConsultationButton size="lg" showArrow={false}>
            Get Your SEO Strategy
          </ConsultationButton>
        </div>
      </section>
    </div>
  )
}