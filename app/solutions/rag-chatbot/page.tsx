import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Brain, Database, Server, Lock, Zap, BarChart3 } from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { ConsultationButton } from "@/components/consultation-button"

export const metadata: Metadata = {
  title: "RAG Chatbot Solutions | Confer Solutions",
  description:
    "Enterprise-grade Retrieval-Augmented Generation (RAG) chatbots for financial services, delivering accurate, context-aware responses with secure data integration.",
}

export default function RAGChatbotPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-fintech-950 via-fintech-900 to-fintech-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Enterprise-Grade RAG Chatbots for Financial Services
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Deliver accurate, context-aware responses by combining the power of large language models with your
                proprietary knowledge base and data sources.
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
                  View Technical Specs
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="RAG Chatbot Interface"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fintech-950/80 to-transparent"></div>

                {/* Chat interface overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] bg-white/90 dark:bg-fintech-800/90 backdrop-blur-md rounded-xl shadow-lg p-4 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mr-2">
                          AI
                        </div>
                        <span className="font-semibold">Financial Assistant</span>
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                    </div>
                    <div className="space-y-3 overflow-y-auto h-[calc(100%-50px)]">
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 mr-2 flex-shrink-0"></div>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 max-w-[80%]">
                          <p className="text-xs">What's the status of my loan application?</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-end">
                        <div className="bg-purple-100 dark:bg-purple-900/50 rounded-lg p-2 max-w-[80%]">
                          <p className="text-xs">
                            Your loan application (ID: #45789) is currently in the underwriting phase. Based on our
                            records, we're waiting for your proof of income document. You can upload it through the
                            secure portal or visit any branch with the physical document.
                          </p>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-purple-600 ml-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                          AI
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 mr-2 flex-shrink-0"></div>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 max-w-[80%]">
                          <p className="text-xs">What documents do I need to provide?</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-end">
                        <div className="bg-purple-100 dark:bg-purple-900/50 rounded-lg p-2 max-w-[80%]">
                          <p className="text-xs">
                            For your loan application, we need: 1) Proof of income (last 3 pay stubs or tax returns), 2)
                            Bank statements from the last 3 months, and 3) A valid ID. You've already provided your ID
                            and bank statements, so we only need your proof of income now.
                          </p>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-purple-600 ml-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                          AI
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

      {/* What is RAG Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Retrieval-Augmented Generation?</h2>
            <p className="text-xl text-muted-foreground">
              RAG combines the power of large language models with the ability to retrieve and reference specific
              information from your organization's knowledge base, delivering accurate, contextual responses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">The Limitations of Traditional LLMs</h3>
                  <p className="text-muted-foreground">
                    While powerful, traditional LLMs have inherent limitations: they lack access to your proprietary
                    data, can't reference real-time information, and may generate plausible but incorrect responses
                    (hallucinations).
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">The RAG Advantage</h3>
                  <p className="text-muted-foreground">
                    RAG overcomes these limitations by retrieving relevant information from your knowledge base before
                    generating responses. This ensures answers are accurate, up-to-date, and grounded in your
                    organization's specific context and data.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Enterprise-Grade Implementation</h3>
                  <p className="text-muted-foreground">
                    Our RAG implementation goes beyond basic retrieval by incorporating advanced vector search,
                    multi-stage retrieval pipelines, and hybrid ranking algorithms to ensure optimal performance in
                    enterprise environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold mb-6 text-center">RAG Architecture</h3>
                <div className="relative h-[400px]">
                  <div className="absolute top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">User Query Processing</h4>
                        <p className="text-xs text-muted-foreground">Query understanding and intent classification</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[25%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Retrieval System</h4>
                        <p className="text-xs text-muted-foreground">
                          Vector search and semantic matching from knowledge base
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[50%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Context Integration</h4>
                        <p className="text-xs text-muted-foreground">Merging retrieved information with user context</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-[75%] left-0 right-0 bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 shadow-md">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs font-semibold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Response Generation</h4>
                        <p className="text-xs text-muted-foreground">LLM generates accurate, contextual responses</p>
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

      {/* Technical Implementation */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technical Implementation</h2>
            <p className="text-xl text-muted-foreground">
              Confer's RAG chatbot solution leverages state-of-the-art techniques and architectures to deliver
              enterprise-grade performance, security, and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg w-fit mb-6">
                <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Embedding Models</h3>
              <p className="text-muted-foreground mb-4">
                We utilize domain-adapted embedding models fine-tuned specifically for financial services terminology
                and concepts, ensuring superior semantic understanding and retrieval performance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Domain-specific embedding models</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Optimized for financial terminology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Continuous model improvement</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg w-fit mb-6">
                <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vector Database Integration</h3>
              <p className="text-muted-foreground mb-4">
                Our solution integrates with enterprise-grade vector databases like Pinecone, Weaviate, and Qdrant,
                enabling efficient similarity search across millions of documents with millisecond latency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Scalable to billions of vectors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Sub-10ms query latency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Metadata filtering capabilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg w-fit mb-6">
                <Server className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Stage Retrieval</h3>
              <p className="text-muted-foreground mb-4">
                Our multi-stage retrieval pipeline combines BM25 keyword search with dense vector retrieval and
                re-ranking, optimizing for both recall and precision in document retrieval.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Hybrid retrieval architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Cross-encoder re-ranking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Adaptive retrieval strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg w-fit mb-6">
                <Lock className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-muted-foreground mb-4">
                Our solution implements bank-grade security with end-to-end encryption, role-based access control, and
                comprehensive audit logging to meet financial industry compliance requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">SOC 2 Type II compliant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">GDPR and CCPA ready</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">PII data protection</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/20 rounded-lg w-fit mb-6">
                <Zap className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Data Integration</h3>
              <p className="text-muted-foreground mb-4">
                Connect your RAG chatbot to live data sources including CRM systems, core banking platforms, and
                internal databases to provide real-time, personalized responses to customer inquiries.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">API-based integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Secure data connectors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Event-driven architecture</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg w-fit mb-6">
                <BarChart3 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive analytics dashboard providing insights into user interactions, query patterns, and chatbot
                performance metrics to continuously improve response quality and user experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">User satisfaction metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Query pattern analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Performance optimization insights</span>
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
                Our RAG implementation uses a modular architecture with state-of-the-art components for each stage of
                the pipeline.
              </p>
            </div>

            <div className="bg-card rounded-xl overflow-hidden border border-border shadow-md">
              <div className="bg-muted px-4 py-2 border-b border-border flex items-center">
                <div className="flex space-x-1 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm font-mono text-muted-foreground">rag_pipeline.py</span>
              </div>
              <pre className="p-4 overflow-x-auto text-sm">
                <code className="language-python">
                  {`# Confer's RAG Pipeline Implementation

from typing import List, Dict, Any
import numpy as np
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Pinecone
from langchain.retrievers import BM25Retriever, EnsembleRetriever
from langchain.retrievers.document_compressors import LLMChainExtractor
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

class FinancialRAGPipeline:
    """Enterprise-grade RAG pipeline optimized for financial services."""
    
    def __init__(
        self,
        vector_db_name: str,
        embedding_model: str = "text-embedding-ada-002",
        llm_model: str = "gpt-4",
        top_k: int = 5,
        reranker_threshold: float = 0.7
    ):
        # Initialize embedding model
        self.embeddings = OpenAIEmbeddings(model=embedding_model)
        
        # Initialize vector store
        self.vector_store = Pinecone.from_existing_index(
            index_name=vector_db_name,
            embedding=self.embeddings,
            namespace="financial_documents"
        )
        
        # Initialize retrievers
        self.dense_retriever = self.vector_store.as_retriever(
            search_type="similarity",
            search_kwargs={"k": top_k * 2}
        )
        
        self.keyword_retriever = BM25Retriever.from_documents(
            self.vector_store.similarity_search(
                "", k=1000
            )
        )
        
        # Create ensemble retriever
        self.ensemble_retriever = EnsembleRetriever(
            retrievers=[self.dense_retriever, self.keyword_retriever],
            weights=[0.7, 0.3]
        )
        
        # Document compressor for filtering irrelevant content
        self.compressor = LLMChainExtractor.from_llm(OpenAI(temperature=0))
        
        # LLM for response generation
        self.llm = OpenAI(model_name=llm_model, temperature=0.2)
        
        # Reranker threshold
        self.reranker_threshold = reranker_threshold
        
    def query(self, user_query: str, user_context: Dict[str, Any] = None) -> Dict[str, Any]:
        """Process user query and generate contextual response."""
        # Step 1: Retrieve relevant documents
        raw_docs = self.ensemble_retriever.get_relevant_documents(user_query)
        
        # Step 2: Compress and filter documents
        filtered_docs = self.compressor.compress_documents(raw_docs, user_query)
        
        # Step 3: Apply reranking if needed
        if len(filtered_docs) > 3:
            filtered_docs = self._rerank_documents(filtered_docs, user_query)
        
        # Step 4: Integrate user context if available
        prompt = self._build_prompt(user_query, filtered_docs, user_context)
        
        # Step 5: Generate response
        response = self.llm.predict(prompt)
        
        return {
            "query": user_query,
            "response": response,
            "sources": [doc.metadata for doc in filtered_docs[:3]],
            "confidence": self._calculate_confidence(filtered_docs, user_query)
        }
        
    def _rerank_documents(self, documents, query):
        # Implementation of cross-encoder reranking
        # ...
        
    def _build_prompt(self, query, documents, user_context):
        # Construct prompt with retrieved context and user information
        # ...
        
    def _calculate_confidence(self, documents, query):
        # Calculate confidence score based on document relevance
        # ...`}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Services Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our RAG chatbots are deployed across various financial service domains, delivering measurable business
              value and enhanced customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Mortgage Processing</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Streamline mortgage application processes by providing instant, accurate responses to applicant
                  queries, status updates, and document requirements, reducing processing time by up to 60%.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time application status updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Document requirement clarification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Personalized rate and term information</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 60% faster processing time, 42% reduction in support calls
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-indigo-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Wealth Management</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Provide personalized investment insights and portfolio analysis by integrating market data with client
                  profiles, enabling advisors to focus on high-value client interactions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Portfolio performance analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Investment strategy explanations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Market trend insights with citations</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 35% increase in client satisfaction, 28% more advisor capacity
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl overflow-hidden shadow-md border border-border">
              <div className="h-48 bg-gradient-to-r from-cyan-600 to-blue-700 p-6 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Compliance & Risk</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Empower compliance teams with instant access to regulatory information, policy guidelines, and risk
                  assessment procedures, ensuring consistent application of compliance standards.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Regulatory requirement clarification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Policy interpretation assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Risk assessment procedure guidance</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-4 text-sm">
                  <strong>Results:</strong> 45% faster compliance reviews, 30% reduction in policy violations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Implementation Process</h2>
            <p className="text-xl text-muted-foreground">
              Our structured implementation methodology ensures successful deployment of enterprise-grade RAG chatbots
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
                    <h3 className="text-xl font-semibold mb-2">Discovery & Requirements Analysis</h3>
                    <p className="text-muted-foreground mb-4">
                      We begin with a comprehensive assessment of your existing knowledge base, data sources, and user
                      interaction patterns to define clear requirements and success metrics.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Knowledge Base Assessment</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">User Journey Mapping</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Data Source Inventory</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Success Metrics Definition</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 z-10">
                    <span className="text-lg font-bold text-primary">02</span>
                  </div>

                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">Data Processing & Knowledge Base Creation</h3>
                    <p className="text-muted-foreground mb-4">
                      We process your documents and data sources, creating optimized embeddings and establishing the
                      vector database that will power your RAG chatbot's knowledge retrieval.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Document Processing</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Chunking Optimization</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Embedding Generation</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Vector Database Setup</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 z-10">
                    <span className="text-lg font-bold text-primary">03</span>
                  </div>

                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">RAG Pipeline Development & Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      We develop and fine-tune the RAG pipeline components, including retrieval mechanisms, context
                      integration, and response generation, then integrate with your existing systems.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Retrieval System Development</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">LLM Prompt Engineering</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">API Integration</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Security Implementation</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 z-10">
                    <span className="text-lg font-bold text-primary">04</span>
                  </div>

                  <div className="flex-grow pt-2">
                    <h3 className="text-xl font-semibold mb-2">Testing, Deployment & Continuous Improvement</h3>
                    <p className="text-muted-foreground mb-4">
                      We conduct rigorous testing, deploy your RAG chatbot, and establish monitoring and feedback loops
                      for continuous improvement of retrieval accuracy and response quality.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Quality Assurance Testing</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Phased Deployment</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Performance Monitoring</span>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <span className="text-sm font-medium">Continuous Optimization</span>
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our RAG chatbot implementation for financial services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">How does RAG differ from traditional chatbots?</h3>
                <p className="text-muted-foreground">
                  Traditional chatbots rely on pre-defined rules or simple pattern matching, while RAG chatbots combine
                  the reasoning capabilities of large language models with the ability to retrieve and reference
                  specific information from your organization's knowledge base. This enables RAG chatbots to provide
                  accurate, contextual responses even to complex or novel queries.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">What types of documents can be used with RAG?</h3>
                <p className="text-muted-foreground">
                  Our RAG implementation can process a wide variety of document types including PDFs, Word documents,
                  Excel spreadsheets, PowerPoint presentations, HTML pages, Markdown files, and plain text. We also
                  support extraction from databases, CRM systems, and other structured data sources through our API
                  connectors.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">How do you ensure data security and compliance?</h3>
                <p className="text-muted-foreground">
                  Our RAG implementation adheres to the highest security standards with end-to-end encryption,
                  role-based access control, and comprehensive audit logging. We can deploy in your secure environment
                  or VPC, and our solution is designed to comply with financial industry regulations including GDPR,
                  CCPA, SOC 2, and other relevant standards.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">How long does implementation typically take?</h3>
                <p className="text-muted-foreground">
                  Implementation timelines vary based on the complexity of your knowledge base and integration
                  requirements. A basic implementation can be completed in 4-6 weeks, while more complex enterprise
                  deployments with multiple data source integrations typically take 8-12 weeks. We follow an agile
                  methodology with phased deployments to deliver value incrementally.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h3 className="text-xl font-semibold mb-2">How do you handle sensitive financial information?</h3>
                <p className="text-muted-foreground">
                  We implement multiple layers of protection for sensitive financial information, including PII
                  detection and redaction, tokenization of sensitive data, and fine-grained access controls. Our system
                  can be configured to recognize and appropriately handle different categories of sensitive information
                  according to your organization's security policies and regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
