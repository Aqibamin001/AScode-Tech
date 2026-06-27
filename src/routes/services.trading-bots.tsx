import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import { ChartBar, Lightning, Monitor, ShieldCheck, TrendUp, Wallet } from "@phosphor-icons/react";

export const Route = createFileRoute("/services/trading-bots")({
  head: () => ({
    meta: [
      { title: "Trading Bot Development \u2014 ASCode Tech" },
      { name: "description", content: "Crypto, forex and stock trading bots \u2014 strategy design, backtesting, paper trading and live execution on the exchange of your choice." },
      { property: "og:title", content: "Trading Bot Development" },
      { property: "og:description", content: "Crypto, forex and stock trading bots \u2014 strategy design, backtesting, paper trading and live execution on the exchange of your choice." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Algorithmic Trading"
      title="Trading bots,"
      highlight="back-tested & live."
      description="Crypto, forex and stock trading bots \u2014 strategy design, backtesting, paper trading and live execution on the exchange of your choice."
      bullets={["Crypto, forex & equities support", "Custom strategy implementation", "Backtesting & paper trading", "Multi-exchange execution", "Risk management & stop-loss", "Real-time monitoring dashboards", "Arbitrage, market-making, grid & DCA"]}
      stack={["Python", "CCXT", "Pandas", "TA-Lib", "Backtrader", "MetaTrader 5", "Pine Script", "FastAPI"]}
      features={[
    { icon: TrendUp, title: "Strategy Development", body: "From your idea or indicator to a production trading strategy." },
    { icon: ChartBar, title: "Backtesting", body: "Historical, walk-forward and Monte Carlo backtesting." },
    { icon: Wallet, title: "Multi-Exchange Execution", body: "Binance, Bybit, KuCoin, OKX, MetaTrader and more." },
    { icon: ShieldCheck, title: "Risk Management", body: "Position sizing, stop-loss, take-profit and drawdown control." },
    { icon: Lightning, title: "Arbitrage & HFT", body: "Cross-exchange arbitrage, market-making and grid bots." },
    { icon: Monitor, title: "Monitoring Dashboard", body: "Live P&L, trade logs, alerts and remote kill-switch." }
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
