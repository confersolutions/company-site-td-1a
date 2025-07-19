import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Shield,
  LineChart,
  PieChart,
  Brain,
  Target,
  Layers,
} from "lucide-react"
import { ConsultationButton } from "@/components/consultation-button"

export const metadata: Metadata = {
  title: "Risk Assessment Solutions | Confer Solutions",
  description:
    "Industry-leading AI/ML risk assessment solutions for financial services, delivering predictive insights, fraud detection, and regulatory compliance with unmatched accuracy.",
}

export default function RiskAssessmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-fintech-950 via-fintech-900 to-fintech-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                AI-Powered Risk Assessment for Financial Services
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Transform your risk management with predictive analytics, machine learning, and real-time monitoring to
                identify, quantify, and mitigate financial risks with unprecedented accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg" className="bg-white text-fintech-900 hover:bg-white/90">
                  Schedule a Demo
                </ConsultationButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  View ROI Calculator
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Risk Assessment Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fintech-950/80 to-transparent"></div>

                {/* Risk dashboard overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] bg-white/90 dark:bg-fintech-800/90 backdrop-blur-md rounded-xl shadow-lg p-4 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mr-2">
                          <BarChart3 className="h-4 w-4" />
                        </div>
                        <span className="font-semibold">Risk Intelligence Dashboard</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-[calc(100%-50px)]">
                      <div className="space-y-4">
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-semibold">Portfolio Risk Score</span>
                            <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 py-0.5 px-2 rounded">
                              Low Risk
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: "18%" }}></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs">0</span>
                            <span className="text-xs">100</span>
                          </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                          <div className="text-xs font-semibold mb-2">Risk Distribution</div>
                          <div className="flex items-center space-x-1">
                            <div className="h-16 w-1/4 bg-green-500 rounded-sm"></div>
                            <div className="h-12 w-1/4 bg-blue-500 rounded-sm"></div>
                            <div className="h-8 w-1/4 bg-yellow-500 rounded-sm"></div>
                            <div className="h-4 w-1/4 bg-red-500 rounded-sm"></div>
                          </div>
                          <div className="flex justify-between mt-1 text-xs">
                            <span>Low</span>
                            <span>Medium</span>
                            <span>High</span>
                            <span>Critical</span>
                          </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                          <div className="text-xs font-semibold mb-2">Anomaly Detection</div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <AlertTriangle className="h-4 w-4 text-yellow-500 mr-1" />
                              <span className="text-xs">3 anomalies detected</span>
                            </div>
                            <Button variant="ghost" size="sm" className="h-6 text-xs">
                              View
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 overflow-y-auto">
                        <div className="text-xs font-semibold mb-3">Risk Insights</div>

                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 p-2 rounded shadow-sm">
                            <div className="flex items-center">
                              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                              <span className="text-xs font-medium">Prepayment Risk</span>
                            </div>
                            <p className="text-xs mt-1">
                              15% decrease in prepayment risk due to rising interest rates.
                            </p>
                          </div>

                          <div className="bg-white dark:bg-gray-800 p-2 rounded shadow-sm">
                            <div className="flex items-center">
                              <AlertTriangle className="h-3 w-3 text-yellow-500 mr-1" />
                              <span className="text-xs font-medium">Default Risk</span>
                            </div>
                            <p className="text-xs mt-1">
                              Slight increase in default probability in the Northwest region.
                            </p>
                          </div>

                          <div className="bg-white dark:bg-gray-800 p-2 rounded shadow-sm">
                            <div className="flex items-center">
                              <Shield className="h-3 w-3 text-blue-500 mr-1" />
                              <span className="text-xs font-medium">Compliance Alert</span>
                            </div>
                            <p className="text-xs mt-1">All portfolios within regulatory compliance thresholds.</p>
                          </div>

                          <div className="bg-white dark:bg-gray-800 p-2 rounded shadow-sm">
                            <div className="flex items-center">
                              <LineChart className="h-3 w-3 text-purple-500 mr-1" />
                              <span className="text-xs font-medium">Market Risk</span>
                            </div>
                            <p className="text-xs mt-1">
                              Interest rate volatility impact mitigated by hedging strategy.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry-Leading Risk Assessment</h2>
            <p className="text-xl text-muted-foreground">
              Our AI-powered risk assessment platform combines advanced machine learning, predictive analytics, and
              domain expertise to deliver unparalleled risk intelligence for financial institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Predictive Default Risk Modeling</h3>
                  <p className="text-muted-foreground mb-4">
                    Our advanced ML models predict default probability with 93% accuracy, analyzing over 200+ risk
                    factors including traditional and alternative data sources to identify at-risk loans months before
                    traditional methods.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Early warning indicators</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Alternative data integration</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Behavioral pattern analysis</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Macroeconomic factor modeling</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Real-time Fraud Detection</h3>
                  <p className="text-muted-foreground mb-4">
                    Identify and prevent fraudulent activities in real-time with our advanced anomaly detection system,
                    reducing fraud losses by up to 75% while minimizing false positives to under 0.1%.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Transaction monitoring</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Behavioral biometrics</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Network analysis</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Adaptive rule engine</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Regulatory Compliance Automation</h3>
                  <p className="text-muted-foreground mb-4">
                    Automate compliance monitoring and reporting for CECL, DFAST, CCAR, and other regulatory
                    requirements, reducing compliance costs by 40% while ensuring 100% adherence to evolving
                    regulations.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">CECL compliance</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Stress testing automation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Regulatory reporting</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Audit trail generation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold mb-6 text-center">Risk Assessment Framework</h3>
                <div className="relative h-[400px]">
                  <div className="absolute top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Data Integration & Enrichment</h4>
                        <p className="text-xs text-muted-foreground">
                          Multi-source data aggregation and feature engineering
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[25%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">AI-Powered Risk Analysis</h4>
                        <p className="text-xs text-muted-foreground">
                          Machine learning models and predictive analytics
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[50%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Risk Quantification & Scoring</h4>
                        <p className="text-xs text-muted-foreground">
                          Comprehensive risk metrics and portfolio analysis
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[75%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Actionable Insights & Mitigation</h4>
                        <p className="text-xs text-muted-foreground">
                          Strategic recommendations and automated interventions
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connecting lines */}
                  <div className="absolute top-[12%] left-[50%] h-[13%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute top-[37%] left-[50%] h-[13%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute top-[62%] left-[50%] h-[13%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced ML Models Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Machine Learning Models</h2>
            <p className="text-xl text-muted-foreground">
              Our proprietary ML models leverage cutting-edge techniques to deliver unparalleled risk assessment
              accuracy and predictive power for financial institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg w-fit mb-6">
                <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Neural Network Default Prediction</h3>
              <p className="text-muted-foreground mb-4">
                Our deep learning models analyze thousands of data points to predict loan defaults with 93% accuracy,
                identifying at-risk loans up to 6 months earlier than traditional methods.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">93% prediction accuracy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">6-month early warning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Continuous model retraining</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg w-fit mb-6">
                <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gradient Boosting Prepayment Models</h3>
              <p className="text-muted-foreground mb-4">
                Predict mortgage prepayment behavior with 89% accuracy using our advanced gradient boosting models that
                incorporate borrower behavior, market conditions, and property characteristics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">89% prepayment prediction accuracy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Borrower behavior analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Market sensitivity modeling</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg w-fit mb-6">
                <Layers className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ensemble Property Valuation</h3>
              <p className="text-muted-foreground mb-4">
                Our ensemble ML models deliver property valuations with median error rates of just 3.2%, combining
                computer vision, geospatial analysis, and market data for superior accuracy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">3.2% median error rate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Computer vision integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Geospatial feature analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/20 rounded-lg w-fit mb-6">
                <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Anomaly Detection System</h3>
              <p className="text-muted-foreground mb-4">
                Identify fraudulent activities and unusual patterns with our advanced anomaly detection system that
                combines unsupervised learning and expert rules to detect 98% of fraud cases.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">98% fraud detection rate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">0.1% false positive rate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Real-time processing</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg w-fit mb-6">
                <LineChart className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Risk Forecasting</h3>
              <p className="text-muted-foreground mb-4">
                Predict interest rate movements and market volatility with our time-series forecasting models that
                combine economic indicators, market sentiment, and historical patterns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Interest rate prediction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Market volatility forecasting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Scenario analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg w-fit mb-6">
                <PieChart className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Portfolio Optimization</h3>
              <p className="text-muted-foreground mb-4">
                Optimize loan portfolios for risk-adjusted returns using our reinforcement learning models that balance
                risk, return, and liquidity constraints while maintaining regulatory compliance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Risk-return optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Regulatory constraint handling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Multi-objective optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Finance Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mortgage Finance Showcase</h2>
              <p className="text-xl text-muted-foreground">
                Discover how leading mortgage institutions are transforming their risk management with our AI-powered
                solutions.
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-card rounded-xl overflow-hidden border border-border shadow-md">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gradient-to-br from-fintech-800 to-fintech-900 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Mortgage Default Prediction</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm opacity-80 mb-1">Early Warning Accuracy</div>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold mr-2">93%</div>
                          <div className="text-sm bg-green-500/20 text-green-300 py-0.5 px-2 rounded">
                            +24% vs Industry Avg
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm opacity-80 mb-1">Early Detection Window</div>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold mr-2">6 months</div>
                          <div className="text-sm bg-green-500/20 text-green-300 py-0.5 px-2 rounded">
                            +3 months vs Industry Avg
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm opacity-80 mb-1">Loss Mitigation Impact</div>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold mr-2">42%</div>
                          <div className="text-sm bg-green-500/20 text-green-300 py-0.5 px-2 rounded">
                            Reduction in Losses
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8">
                    <h4 className="text-xl font-semibold mb-4">Case Study: Top 10 US Mortgage Lender</h4>
                    <p className="text-muted-foreground mb-6">
                      A leading US mortgage lender implemented our AI-powered default prediction system across their $89
                      billion portfolio, achieving remarkable results in early risk detection and loss mitigation.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/20 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h5 className="font-medium">Early Intervention Program</h5>
                          <p className="text-sm text-muted-foreground">
                            Identified 2,300+ at-risk loans 6 months before traditional methods, enabling proactive
                            workout solutions.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/20 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h5 className="font-medium">Loss Mitigation Impact</h5>
                          <p className="text-sm text-muted-foreground">
                            Reduced foreclosure rates by 32% and loss severity by 28%, saving $47M annually.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/20 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h5 className="font-medium">Regulatory Compliance</h5>
                          <p className="text-sm text-muted-foreground">
                            Streamlined CECL compliance with automated risk assessment and reporting, reducing
                            compliance costs by 40%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl overflow-hidden border border-border shadow-md">
                <div className="md:flex flex-row-reverse">
                  <div className="md:w-2/5 bg-gradient-to-br from-blue-800 to-indigo-900 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Mortgage-Backed Securities Risk</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm opacity-80 mb-1">Valuation Accuracy</div>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold mr-2">96.8%</div>
                          <div className="text-sm bg-blue-500/20 text-blue-300 py-0.5 px-2 rounded">
                            +3.2% vs Traditional Models
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm opacity-80 mb-1">Stress Test Scenarios</div>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold mr-2">10,000+</div>
                          <div className="text-sm bg-blue-500/20 text-blue-300 py-0.5 px-2 rounded">
                            Monte Carlo Simulations
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm opacity-80 mb-1">Risk-Adjusted Return</div>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold mr-2">+18%</div>
                          <div className="text-sm bg-blue-500/20 text-blue-300 py-0.5 px-2 rounded">
                            Portfolio Performance
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8">
                    <h4 className="text-xl font-semibold mb-4">Case Study: Global Investment Bank</h4>
                    <p className="text-muted-foreground mb-6">
                      A global investment bank deployed our MBS risk assessment platform to analyze and optimize their
                      $12B mortgage-backed securities portfolio, achieving significant improvements in risk-adjusted
                      returns.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mt-1 mr-4 p-1 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h5 className="font-medium">Granular Risk Assessment</h5>
                          <p className="text-sm text-muted-foreground">
                            Analyzed 1.2M individual loans within MBS pools to identify hidden risk concentrations and
                            opportunities.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mt-1 mr-4 p-1 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h5 className="font-medium">Advanced Scenario Analysis</h5>
                          <p className="text-sm text-muted-foreground">
                            Conducted 10,000+ Monte Carlo simulations to stress-test portfolio performance under various
                            economic scenarios.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mt-1 mr-4 p-1 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h5 className="font-medium">Portfolio Optimization</h5>
                          <p className="text-sm text-muted-foreground">
                            Rebalanced portfolio based on AI recommendations, increasing risk-adjusted returns by 18%
                            while reducing tail risk by 24%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl overflow-hidden border border-border shadow-md">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gradient-to-br from-green-800 to-teal-900 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">CECL Compliance & Reserving</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm opacity-80 mb-1">Reserve Accuracy</div>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold mr-2">99.2%</div>
                          <div className="text-sm bg-green-500/20 text-green-300 py-0.5 px-2 rounded">
                            vs. Actual Losses
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm opacity-80 mb-1">Compliance Cost Reduction</div>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold mr-2">43%</div>
                          <div className="text-sm bg-green-500/20 text-green-300 py-0.5 px-2 rounded">
                            Annual Savings
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm opacity-80 mb-1">Processing Time</div>
                        <div className="flex items-center">
                          <div className="text-2xl font-bold mr-2">2 hours</div>
                          <div className="text-sm bg-green-500/20 text-green-300 py-0.5 px-2 rounded">
                            vs. 2 weeks previously
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8">
                    <h4 className="text-xl font-semibold mb-4">Case Study: Regional Bank Consortium</h4>
                    <p className="text-muted-foreground mb-6">
                      A consortium of regional banks with combined assets of $175B implemented our CECL compliance
                      solution to automate expected credit loss calculations and regulatory reporting.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/20 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h5 className="font-medium">Automated Loss Forecasting</h5>
                          <p className="text-sm text-muted-foreground">
                            Reduced CECL calculation time from 2 weeks to 2 hours while improving accuracy by 27%.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/20 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h5 className="font-medium">Optimized Reserves</h5>
                          <p className="text-sm text-muted-foreground">
                            Reduced excess reserves by $42M through more precise loss forecasting while maintaining
                            regulatory compliance.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mt-1 mr-4 p-1 bg-green-100 dark:bg-green-900/20 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h5 className="font-medium">Regulatory Reporting</h5>
                          <p className="text-sm text-muted-foreground">
                            Automated generation of regulatory reports with comprehensive audit trails, reducing
                            compliance costs by 43%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Risk Assessment ROI Calculator</h2>
              <p className="text-xl text-muted-foreground">
                Discover the potential financial impact of our AI-powered risk assessment solutions on your
                organization.
              </p>
            </div>

            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-md">
              <div className="bg-gradient-to-r from-fintech-900 to-fintech-700 px-6 py-4">
                <h3 className="text-xl font-semibold text-white">Financial Impact Calculator</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Potential Annual Savings</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Default Loss Reduction</span>
                          <span className="text-sm font-medium">$4.2M</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-green-500 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Based on 30% reduction in default losses
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Fraud Prevention</span>
                          <span className="text-sm font-medium">$2.8M</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Based on 75% reduction in fraud losses</div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Compliance Cost Reduction</span>
                          <span className="text-sm font-medium">$1.5M</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Based on 40% reduction in compliance costs
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Operational Efficiency</span>
                          <span className="text-sm font-medium">$1.2M</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Based on 25% increase in operational efficiency
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total Annual Impact</span>
                        <span className="text-xl font-bold text-green-600 dark:text-green-400">$9.7M</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Implementation Details</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-medium mb-1">Portfolio Size</div>
                        <div className="text-sm bg-secondary/50 p-2 rounded">$1 billion mortgage portfolio</div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-1">Implementation Timeline</div>
                        <div className="text-sm bg-secondary/50 p-2 rounded">12-16 weeks</div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-1">ROI Timeline</div>
                        <div className="text-sm bg-secondary/50 p-2 rounded">6-9 months</div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-1">5-Year ROI</div>
                        <div className="text-sm bg-secondary/50 p-2 rounded">580%</div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button size="lg" className="w-full">
                        Calculate Your Custom ROI
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Implementation</h2>
              <p className="text-xl text-muted-foreground">
                Our risk assessment platform leverages cutting-edge AI/ML techniques and a scalable architecture for
                enterprise-grade performance and accuracy.
              </p>
            </div>

            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-md">
              <div className="bg-muted px-4 py-2 border-b border-border flex items-center">
                <div className="flex space-x-1 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-mono text-muted-foreground">default_risk_model.py</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="language-python">
                  {`# Confer's Advanced Default Risk Model Implementation

import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, BatchNormalization
from tensorflow.keras.callbacks import EarlyStopping
from typing import Dict, List, Any, Tuple

class MortgageDefaultRiskModel:
    """Advanced neural network model for mortgage default prediction."""
    
    def __init__(
        self,
        model_path: str = None,
        feature_importance_threshold: float = 0.01,
        confidence_threshold: float = 0.75,
        use_alternative_data: bool = True
    ):
        self.model_path = model_path
        self.feature_importance_threshold = feature_importance_threshold
        self.confidence_threshold = confidence_threshold
        self.use_alternative_data = use_alternative_data
        self.scaler = StandardScaler()
        self.model = None
        self.feature_names = []
        self.feature_importances = {}
        
        if model_path:
            self.load_model(model_path)
        else:
            self._build_model()
        
    def _build_model(self):
        """Build the neural network architecture."""
        model = Sequential([
            Dense(256, activation='relu', input_shape=(self.input_dim,)),
            BatchNormalization(),
            Dropout(0.3),
            Dense(128, activation='relu'),
            BatchNormalization(),
            Dropout(0.2),
            Dense(64, activation='relu'),
            BatchNormalization(),
            Dropout(0.1),
            Dense(32, activation='relu'),
            Dense(1, activation='sigmoid')
        ])
        
        model.compile(
            optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),
            loss='binary_crossentropy',
            metrics=['accuracy', tf.keras.metrics.AUC(), tf.keras.metrics.Precision(), tf.keras.metrics.Recall()]
        )
        
        self.model = model
        
    def train(self, X_train: pd.DataFrame, y_train: pd.Series, validation_split: float = 0.2):
        """Train the model on mortgage loan data."""
        self.feature_names = list(X_train.columns)
        self.input_dim = X_train.shape[1]
        
        if not self.model:
            self._build_model()
            
        # Scale features
        X_scaled = self.scaler.fit_transform(X_train)
        
        # Train model with early stopping
        early_stopping = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)
        
        history = self.model.fit(
            X_scaled, y_train,
            epochs=100,
            batch_size=64,
            validation_split=validation_split,
            callbacks=[early_stopping],
            verbose=1
        )
        
        # Calculate feature importances using permutation importance
        self._calculate_feature_importance(X_scaled, y_train)
        
        return history
    
    def predict(self, X: pd.DataFrame) -> Dict[str, Any]:
        """Predict default probability and provide risk factors."""
        X_scaled = self.scaler.transform(X)
        
        # Get raw predictions
        default_probs = self.model.predict(X_scaled)
        
        # Calculate confidence scores
        confidence_scores = self._calculate_confidence(X_scaled)
        
        # Identify risk factors
        risk_factors = self._identify_risk_factors(X)
        
        # Prepare results
        results = {
            'default_probability': default_probs.flatten(),
            'confidence_score': confidence_scores,
            'risk_factors': risk_factors,
            'high_risk': default_probs.flatten() > self.confidence_threshold
        }
        
        return results
    
    def _calculate_confidence(self, X_scaled: np.ndarray) -> np.ndarray:
        """Calculate confidence scores for predictions."""
        # Implementation of Monte Carlo Dropout for uncertainty estimation
        # Run multiple forward passes with dropout enabled
        mc_samples = 50
        predictions = np.zeros((mc_samples, X_scaled.shape[0]))
        
        for i in range(mc_samples):
            predictions[i, :] = self.model(X_scaled, training=True).numpy().flatten()
        
        # Calculate mean and standard deviation
        mean_pred = np.mean(predictions, axis=0)
        std_pred = np.std(predictions, axis=0)
        
        # Convert to confidence score (inverse of normalized std)
        confidence = 1 - (std_pred / (mean_pred + 1e-7))
        
        return confidence
    
    def _identify_risk_factors(self, X: pd.DataFrame) -> List[Dict[str, Any]]:
        """Identify key risk factors contributing to default risk."""
        risk_factors = []
        
        # Calculate SHAP values or other feature attribution method
        # ...
        
        return risk_factors
    
    def _calculate_feature_importance(self, X: np.ndarray, y: np.ndarray):
        """Calculate feature importance using permutation importance."""
        # Implementation of permutation importance
        # ...
        
    def save_model(self, path: str):
        """Save model and preprocessing components."""
        self.model.save(path)
        # Save scaler and other components
        # ...
        
    def load_model(self, path: str):
        """Load model and preprocessing components."""
        self.model = tf.keras.models.load_model(path)
        # Load scaler and other components
        # ...`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Implementation Process</h2>
            <p className="text-xl text-muted-foreground">
              Our structured implementation methodology ensures successful deployment of risk assessment solutions
              tailored to your specific business needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

              {/* Steps */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 z-10">
                    <span className="text-lg font-bold text-primary">01</span>
                  </div>

                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">Risk Assessment & Data Discovery</h3>
                    <p className="text-muted-foreground mb-4">
                      We analyze your current risk management processes, data sources, and business objectives to define
                      clear requirements and success metrics.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Risk profile assessment</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Data source inventory</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Business objective alignment</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Success metrics definition</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 z-10">
                    <span className="text-lg font-bold text-primary">02</span>
                  </div>

                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">Model Development & Validation</h3>
                    <p className="text-muted-foreground mb-4">
                      We develop and validate custom risk assessment models using your historical data, ensuring optimal
                      performance and accuracy for your specific risk profile.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Feature engineering</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Model training & optimization</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Backtesting & validation</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Model documentation</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 z-10">
                    <span className="text-lg font-bold text-primary">03</span>
                  </div>

                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">Integration & Deployment</h3>
                    <p className="text-muted-foreground mb-4">
                      We integrate our risk assessment solution with your existing systems and deploy the platform in
                      your environment or our secure cloud.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">API integration</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Platform deployment</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Data pipeline setup</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Security implementation</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 z-10">
                    <span className="text-lg font-bold text-primary">04</span>
                  </div>

                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">Training, Monitoring & Continuous Improvement</h3>
                    <p className="text-muted-foreground mb-4">
                      We provide comprehensive training, establish monitoring systems, and implement continuous
                      improvement processes to ensure long-term success.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">User training</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Performance monitoring</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Model retraining</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Ongoing optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <ConsultationButton size="lg">Schedule a Consultation</ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our AI-powered risk assessment solutions for financial services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">How accurate are your default prediction models?</h3>
                <p className="text-muted-foreground">
                  Our default prediction models achieve 93% accuracy in identifying at-risk loans, with the ability to
                  detect potential defaults up to 6 months earlier than traditional methods. We continuously monitor and
                  retrain our models to maintain this high level of accuracy as market conditions evolve. Each
                  prediction includes a confidence score, allowing you to set thresholds for automated actions versus
                  manual review.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">How do you ensure regulatory compliance?</h3>
                <p className="text-muted-foreground">
                  Our risk assessment platform is designed with regulatory compliance at its core. We provide
                  comprehensive model documentation, explainability features, and audit trails to satisfy regulatory
                  requirements including SR 11-7, CECL, DFAST, and CCAR. Our models undergo rigorous testing for bias
                  and fairness, and we regularly update our compliance frameworks to address evolving regulatory
                  standards. Additionally, we provide automated reporting tools specifically designed for regulatory
                  submissions.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">What data sources do your models use?</h3>
                <p className="text-muted-foreground">
                  Our models can incorporate a wide range of data sources, including traditional credit data, loan
                  application information, payment history, property data, and macroeconomic indicators. We also
                  leverage alternative data sources such as cash flow data, rental payment history, utility payments,
                  and geospatial information when available. Our platform includes data connectors for major financial
                  data providers, core banking systems, and public data sources, making integration straightforward.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">How long does implementation typically take?</h3>
                <p className="text-muted-foreground">
                  Implementation timelines vary based on the complexity of your data environment and integration
                  requirements. A standard implementation typically takes 12-16 weeks, with initial models deployed and
                  generating insights within 8 weeks. We follow an agile methodology with phased deployments to deliver
                  value incrementally. Our implementation process includes data assessment, model development,
                  integration, validation, and user training to ensure a smooth transition and rapid time-to-value.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">How do you measure ROI for risk assessment solutions?</h3>
                <p className="text-muted-foreground">
                  We measure ROI across multiple dimensions, including reduced credit losses, operational efficiency
                  gains, regulatory compliance cost savings, and improved capital allocation. Our clients typically see
                  a 30-40% reduction in default losses through early intervention, 75% reduction in fraud losses, 40%
                  decrease in compliance costs, and 25% improvement in operational efficiency. We work with you to
                  establish baseline metrics and track improvements over time, providing regular ROI reports and
                  continuous optimization recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-fintech-900/80 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Risk Management?</h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a demo today and discover how our AI-powered risk assessment solutions can drive accuracy,
              efficiency, and profitability for your organization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ConsultationButton size="lg" variant="default" className="bg-white text-fintech-900 hover:bg-white/90">
                Get a Demo
              </ConsultationButton>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white/30 hover:bg-white/10"
              >
                Calculate Your ROI
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
