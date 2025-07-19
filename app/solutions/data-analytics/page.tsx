import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, BarChart3, TrendingUp, Database, Brain, Target, Zap, PieChart } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { ConsultationButton } from "@/components/consultation-button"

export const metadata: Metadata = {
  title: "Data Analytics Solutions | Confer Solutions",
  description:
    "Transform financial data into actionable intelligence with AI-powered analytics. Real-time insights, predictive modeling, and automated reporting for smarter business decisions.",
}

export default function DataAnalyticsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-fintech-950 via-fintech-900 to-fintech-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Advanced Data Analytics for Financial Intelligence
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Transform raw financial data into actionable intelligence with our AI-powered analytics platform.
                Real-time insights, predictive modeling, and automated reporting drive smarter business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationButton size="lg" className="bg-white text-fintech-900 hover:bg-white/90">
                  Explore Analytics
                </ConsultationButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  View Live Dashboard
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Data Analytics Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fintech-950/80 to-transparent"></div>

                {/* Analytics dashboard overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] h-[85%] bg-white/90 dark:bg-fintech-800/90 backdrop-blur-md rounded-xl shadow-lg p-4 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold mr-2">
                          <BarChart3 className="w-4 h-4" />
                        </div>
                        <span className="font-semibold">Analytics Dashboard</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Real-time Data</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 h-[calc(100%-50px)]">
                      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold">Loan Volume</span>
                          <TrendingUp className="w-3 h-3 text-green-600" />
                        </div>
                        <div className="text-lg font-bold text-blue-600">$2.4M</div>
                        <div className="text-xs text-green-600">↑ 23% vs last month</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold">Approval Rate</span>
                          <Target className="w-3 h-3 text-green-600" />
                        </div>
                        <div className="text-lg font-bold text-green-600">87.3%</div>
                        <div className="text-xs text-green-600">↑ 5.2% improvement</div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold">Avg Processing</span>
                          <Zap className="w-3 h-3 text-purple-600" />
                        </div>
                        <div className="text-lg font-bold text-purple-600">4.2 days</div>
                        <div className="text-xs text-green-600">↓ 60% faster</div>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold">Risk Score</span>
                          <PieChart className="w-3 h-3 text-orange-600" />
                        </div>
                        <div className="text-lg font-bold text-orange-600">2.1%</div>
                        <div className="text-xs text-green-600">↓ 35% reduction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Data Analytics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Financial Data Analytics?</h2>
            <p className="text-xl text-muted-foreground">
              Financial data analytics transforms raw business data into actionable insights through advanced
              statistical analysis, machine learning, and visualization techniques, enabling data-driven decision-making
              across all aspects of financial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Traditional Reporting Limitations</h3>
                  <p className="text-muted-foreground">
                    Static reports, delayed insights, manual data compilation, limited visualization capabilities, and
                    reactive decision-making based on historical data without predictive capabilities.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">The Analytics Advantage</h3>
                  <p className="text-muted-foreground">
                    Real-time data processing, predictive modeling, automated insights generation, interactive
                    dashboards, and proactive decision support that identifies opportunities and risks before they
                    impact your business.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Enterprise-Grade Implementation</h3>
                  <p className="text-muted-foreground">
                    Our analytics platform integrates with all major financial systems, provides role-based access
                    controls, ensures data governance compliance, and scales to handle billions of data points.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-8 border border-emerald-200 dark:border-emerald-800">
                <h3 className="text-xl font-semibold mb-6 text-center">Analytics Pipeline</h3>
                <div className="relative h-[400px]">
                  <div className="absolute top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Data Collection</h4>
                        <p className="text-xs text-muted-foreground">Automated ingestion from multiple sources</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[20%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Data Processing</h4>
                        <p className="text-xs text-muted-foreground">Cleaning, transformation, and validation</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[40%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">AI Analysis</h4>
                        <p className="text-xs text-muted-foreground">Machine learning and statistical modeling</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[60%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Insight Generation</h4>
                        <p className="text-xs text-muted-foreground">Automated insights and recommendations</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[80%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">5</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Visualization & Action</h4>
                        <p className="text-xs text-muted-foreground">Interactive dashboards and alerts</p>
                      </div>
                    </div>
                  </div>

                  {/* Connecting lines */}
                  <div className="absolute top-[12%] left-[50%] h-[8%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute top-[32%] left-[50%] h-[8%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute top-[52%] left-[50%] h-[8%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="absolute top-[72%] left-[50%] h-[8%] w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technical Implementation</h2>
            <p className="text-xl text-muted-foreground">
              Confer's data analytics platform leverages cutting-edge technologies and methodologies to deliver
              enterprise-grade financial intelligence and predictive insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg w-fit mb-6">
                <Brain className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Predictive Analytics Engine</h3>
              <p className="text-muted-foreground mb-4">
                Advanced machine learning models predict loan performance, market trends, customer behavior, and risk
                factors with 95% accuracy using ensemble methods and deep learning techniques.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Time series forecasting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Anomaly detection algorithms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Ensemble model optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg w-fit mb-6">
                <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Data Pipeline</h3>
              <p className="text-muted-foreground mb-4">
                High-performance data pipeline processes millions of transactions per second with sub-second latency,
                ensuring real-time analytics and immediate insight availability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Stream processing architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Auto-scaling data ingestion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Data quality monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg w-fit mb-6">
                <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Visualization</h3>
              <p className="text-muted-foreground mb-4">
                Dynamic, interactive dashboards with drill-down capabilities, custom visualizations, and real-time
                updates that make complex data accessible to all stakeholders.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Customizable dashboard builder</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Mobile-responsive design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Export and sharing capabilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg w-fit mb-6">
                <Target className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive risk modeling and portfolio analysis with stress testing, scenario analysis, and
                regulatory reporting capabilities for informed risk management decisions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Monte Carlo simulations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Value-at-Risk calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Regulatory compliance reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/20 rounded-lg w-fit mb-6">
                <Zap className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Insights</h3>
              <p className="text-muted-foreground mb-4">
                AI-powered insight generation automatically identifies trends, anomalies, and opportunities, delivering
                actionable recommendations with natural language explanations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Natural language generation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Intelligent alerting system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Recommendation engine</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-pink-100 dark:bg-pink-900/20 rounded-lg w-fit mb-6">
                <PieChart className="h-6 w-6 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Advanced customer segmentation, lifetime value analysis, and behavioral modeling to optimize customer
                acquisition, retention, and cross-selling strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Behavioral clustering algorithms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Churn prediction models</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Personalization engines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Implementation</h2>
              <p className="text-xl text-muted-foreground">
                Our data analytics platform uses a modern, scalable architecture with real-time processing capabilities
                and advanced machine learning models.
              </p>
            </div>

            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-md">
              <div className="bg-muted px-4 py-2 border-b border-border flex items-center">
                <div className="flex space-x-1 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-mono text-muted-foreground">analytics_engine.py</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="language-python">
                  {`# Confer's Data Analytics Engine Implementation

import pandas as pd
import numpy as np
from typing import Dict, List, Any, Optional
from datetime import datetime, timedelta
import asyncio
from dataclasses import dataclass

@dataclass
class AnalyticsQuery:
    metric: str
    dimensions: List[str]
    filters: Dict[str, Any]
    time_range: Dict[str, datetime]
    aggregation: str = "sum"

class FinancialAnalyticsEngine:
    """Advanced analytics engine for financial data processing and insights."""
    
    def __init__(self, config: Dict[str, Any]):
        self.data_pipeline = DataPipeline()
        self.ml_models = MLModelRegistry()
        self.visualization_engine = VisualizationEngine()
        self.insight_generator = InsightGenerator()
        
    async def process_real_time_data(self, data_stream: Any) -> Dict[str, Any]:
        """Process streaming financial data in real-time."""
        
        # Data ingestion and validation
        validated_data = await self.data_pipeline.validate_stream(data_stream)
        
        # Real-time transformations
        transformed_data = await self.data_pipeline.transform(validated_data)
        
        # Update metrics and KPIs
        metrics = await self._calculate_real_time_metrics(transformed_data)
        
        # Anomaly detection
        anomalies = await self.ml_models.detect_anomalies(transformed_data)
        
        # Generate alerts if needed
        alerts = await self._generate_alerts(anomalies, metrics)
        
        return {
            "timestamp": datetime.now().isoformat(),
            "metrics": metrics,
            "anomalies": anomalies,
            "alerts": alerts,
            "data_quality_score": await self._calculate_data_quality(validated_data)
        }
    
    async def generate_predictive_insights(
        self, 
        historical_data: pd.DataFrame,
        prediction_horizon: int = 30
    ) -> Dict[str, Any]:
        """Generate predictive analytics and forecasts."""
        
        # Feature engineering
        features = await self._engineer_features(historical_data)
        
        # Load and apply ML models
        loan_performance_model = await self.ml_models.get_model("loan_performance")
        market_trend_model = await self.ml_models.get_model("market_trends")
        risk_model = await self.ml_models.get_model("risk_assessment")
        
        # Generate predictions
        loan_predictions = await loan_performance_model.predict(
            features, horizon=prediction_horizon
        )
        
        market_predictions = await market_trend_model.predict(
            features, horizon=prediction_horizon
        )
        
        risk_predictions = await risk_model.predict(
            features, horizon=prediction_horizon
        )
        
        # Combine and analyze predictions
        insights = await self.insight_generator.analyze_predictions({
            "loan_performance": loan_predictions,
            "market_trends": market_predictions,
            "risk_assessment": risk_predictions
        })
        
        return {
            "predictions": {
                "loan_performance": loan_predictions.to_dict(),
                "market_trends": market_predictions.to_dict(),
                "risk_scores": risk_predictions.to_dict()
            },
            "insights": insights,
            "confidence_intervals": await self._calculate_confidence_intervals(
                loan_predictions, market_predictions, risk_predictions
            ),
            "recommendations": await self._generate_recommendations(insights)
        }
    
    async def create_interactive_dashboard(
        self, 
        user_id: str, 
        dashboard_config: Dict[str, Any]
    ) -> Dict[str, Any]:
        """Create personalized interactive dashboard."""
        
        # Get user preferences and permissions
        user_config = await self._get_user_config(user_id)
        
        # Query relevant data
        data_queries = await self._build_data_queries(dashboard_config, user_config)
        dashboard_data = await self._execute_queries(data_queries)
        
        # Generate visualizations
        charts = await self.visualization_engine.create_charts(
            dashboard_data, dashboard_config["chart_types"]
        )
        
        # Create interactive elements
        filters = await self._create_interactive_filters(dashboard_data)
        drill_downs = await self._create_drill_down_paths(dashboard_data)
        
        return {
            "dashboard_id": f"dash_{user_id}_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
            "charts": charts,
            "filters": filters,
            "drill_downs": drill_downs,
            "real_time_updates": True,
            "export_options": ["pdf", "excel", "png"],
            "sharing_permissions": user_config.get("sharing_permissions", [])
        }
    
    async def perform_risk_analysis(
        self, 
        portfolio_data: pd.DataFrame,
        scenarios: List[Dict[str, Any]]
    ) -> Dict[str, Any]:
        """Perform comprehensive risk analysis with scenario testing."""
        
        # Calculate current risk metrics
        current_risk = await self._calculate_portfolio_risk(portfolio_data)
        
        # Stress testing
        stress_results = []
        for scenario in scenarios:
            stressed_portfolio = await self._apply_stress_scenario(
                portfolio_data, scenario
            )
            stress_risk = await self._calculate_portfolio_risk(stressed_portfolio)
            stress_results.append({
                "scenario": scenario["name"],
                "risk_change": stress_risk - current_risk,
                "impact_metrics": await self._calculate_impact_metrics(
                    portfolio_data, stressed_portfolio
                )
            })
        
        # Monte Carlo simulation
        monte_carlo_results = await self._run_monte_carlo_simulation(
            portfolio_data, iterations=10000
        )
        
        # Value at Risk calculations
        var_95 = await self._calculate_var(portfolio_data, confidence=0.95)
        var_99 = await self._calculate_var(portfolio_data, confidence=0.99)
        
        return {
            "current_risk_metrics": current_risk,
            "stress_test_results": stress_results,
            "monte_carlo": monte_carlo_results,
            "value_at_risk": {
                "95_percent": var_95,
                "99_percent": var_99
            },
            "risk_recommendations": await self._generate_risk_recommendations(
                current_risk, stress_results, monte_carlo_results
            )
        }

# Usage Example
async def main():
    analytics = FinancialAnalyticsEngine(config={
        "data_sources": ["loan_system", "market_data", "customer_db"],
        "ml_model_version": "v3.2",
        "real_time_processing": True
    })
    
    # Generate predictive insights
    insights = await analytics.generate_predictive_insights(
        historical_data=loan_data,
        prediction_horizon=90
    )
    
    print(f"Predicted loan volume: {insights['predictions']['loan_performance']['volume']}")
    print(f"Market trend: {insights['insights']['market_direction']}")

if __name__ == "__main__":
    asyncio.run(main())`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Analytics Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our data analytics platform delivers measurable business value across various financial service domains,
              enabling data-driven decision-making and operational optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-emerald-600 to-teal-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Portfolio Analytics</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Comprehensive portfolio analysis with real-time performance tracking, risk assessment, and
                  optimization recommendations that improve portfolio returns by 25% while reducing risk exposure.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time performance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk-adjusted return analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Optimization recommendations</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 25% improvement in returns, 30% reduction in risk
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Customer Intelligence</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Advanced customer analytics providing deep insights into behavior patterns, lifetime value, and
                  personalization opportunities that increase customer retention by 40%.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Behavioral segmentation analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lifetime value predictions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Churn prevention strategies</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 40% increase in retention, 35% higher cross-sell rates
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Market Intelligence</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Real-time market analysis and trend prediction capabilities that provide competitive intelligence and
                  strategic insights for informed business planning and market positioning.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Market trend forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Competitive analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Opportunity identification</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 50% faster market response, 20% increase in market share
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
