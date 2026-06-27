import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { Brain, Database, Image, Microphone, ShieldCheck, Sparkle } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/ai-integration")({
  head: () => ({
    meta: [
      { title: "AI Integration \u2014 ASCode Tech" },
      { name: "description", content: "ChatGPT, Claude, Gemini and open-source LLMs \u2014 embedded into your app with RAG, fine-tuning, and production-grade guardrails." },
      { property: "og:title", content: "AI Integration" },
      { property: "og:description", content: "ChatGPT, Claude, Gemini and open-source LLMs \u2014 embedded into your app with RAG, fine-tuning, and production-grade guardrails." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="AI & LLM Integration"
      title="Put AI to work"
      highlight="inside your product."
      description="ChatGPT, Claude, Gemini and open-source LLMs \u2014 embedded into your app with RAG, fine-tuning, and production-grade guardrails."
      bullets={["OpenAI, Anthropic & Gemini integration", "RAG with vector databases", "Fine-tuning & custom models", "AI-powered search & summarization", "Voice agents (STT + TTS)", "Image & video generation pipelines"]}
      stack={["OpenAI", "Anthropic", "Google Gemini", "LangChain", "LlamaIndex", "Pinecone", "pgvector", "Replicate"]}
      features={[
    { icon: Brain, title: "LLM Integration", body: "ChatGPT, Claude and Gemini wired into your product." },
    { icon: Database, title: "RAG Systems", body: "Vector search over your docs with pgvector or Pinecone." },
    { icon: Sparkle, title: "Fine-tuning", body: "Custom models trained on your data for your use case." },
    { icon: Microphone, title: "Voice Agents", body: "Real-time voice agents with Whisper, ElevenLabs and more." },
    { icon: Image, title: "Image Generation", body: "Stable Diffusion, DALL\u00b7E and Midjourney pipelines." },
    { icon: ShieldCheck, title: "Safety & Guardrails", body: "Prompt injection defense, PII redaction and evals." }
      ]}
      process={[
    { n: "01", t: "Discover", d: "We dig into your goals, audience and constraints to scope the work." },
    { n: "02", t: "Design", d: "Architecture, flows and visuals \u2014 approved before a single line of code." },
    { n: "03", t: "Build", d: "Weekly demos, transparent progress, production-quality engineering." },
    { n: "04", t: "Launch & Grow", d: "We ship, monitor and keep improving after go-live." }
      ]}
      faqs={[
    { q: "How long does a typical project take?", a: "Most projects ship in 2\u20138 weeks depending on scope. Smaller automations and bots can be live in days; full apps take longer. You get a detailed timeline before we start." },
    { q: "How is pricing structured?", a: "We offer fixed-price project quotes for well-scoped work and monthly retainers for ongoing engagements. Every quote is itemized \u2014 no surprises." },
    { q: "Do you provide ongoing support?", a: "Yes. Every project includes a free post-launch warranty period, and we offer maintenance retainers for long-term partnerships." },
    { q: "Who owns the code and IP?", a: "You do. On final delivery, all source code, accounts and IP transfer fully to you." }
      ]}
    />
  );
}
