import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { Bot } from 'lucide-react';

const Whitepaper = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Navigation */}
      <nav className="p-6 border-b border-green-400/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Bot className="h-10 w-10 text-green-400 drop-shadow-[0_0_15px_rgba(0,255,65,0.7)]" />
            <h1 className="text-2xl font-bold text-green-400 drop-shadow-[0_0_15px_rgba(0,255,65,0.7)]">
              OVERCLOCKED<span className="text-green-300">AI</span>
            </h1>
          </div>
          <Button 
            onClick={() => navigate('/')}
            className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.8)]"
            variant="outline"
          >
            BACK TO HOME
          </Button>
        </div>
      </nav>

      {/* Whitepaper Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center py-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Bot className="h-16 w-16 text-green-400 drop-shadow-[0_0_30px_rgba(0,255,65,0.8)]" />
            <h1 className="text-6xl font-bold drop-shadow-[0_0_35px_rgba(0,255,65,0.9)]">
              OVERCLOCKED<span className="text-green-300">AI</span>
            </h1>
            <Bot className="h-16 w-16 text-green-400 drop-shadow-[0_0_30px_rgba(0,255,65,0.8)]" />
          </div>
          <p className="text-2xl text-green-300 mb-4 drop-shadow-[0_0_20px_rgba(0,255,65,0.6)]">TECHNICAL WHITEPAPER</p>
          <p className="text-lg text-green-300/80">Version 1.0 • Q3 2025</p>
          <p className="text-lg text-green-300/80">Built on 
            <img src="/lovable-uploads/2fe16d8c-7588-4038-abb3-40fea0395a00.png" alt="PulseChain" className="inline h-5 w-auto mx-2" />
            PulseChain
          </p>
        </div>

        {/* Abstract */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">ABSTRACT</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <p>
              OverClocked <Bot className="inline h-4 w-4 mx-1 text-green-400" /> (
              <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI) represents a revolutionary approach to decentralized finance, 
              combining advanced game theory with autonomous bot technology to create a sustainable 
              yield-generating ecosystem exclusively for committed stakers.
            </p>
            <p>
              Built on PulseChain, <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI introduces the concept of NFT Proof-of-Stake (POS), 
              where users can only stake once per address, creating powerful economic incentives 
              that favor long-term commitment over speculative trading. The protocol's autonomous 
              🤖 OCBotz employ Reverse Liquidity Engineering to target 555% yield in Treasury Bill 
              (TBILL) and Reserve Teh (FED) tokens over 55-day commitment periods.
            </p>
          </CardContent>
        </Card>

        {/* Table of Contents */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">TABLE OF CONTENTS</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300">
            <ol className="list-decimal list-inside space-y-2">
              <li>Introduction</li>
              <li>The Staker Class Revolution</li>
              <li>NFT Proof-of-Stake (POS) Mechanism</li>
              <li>🤖 OCBotz Autonomous System</li>
              <li>Game Theory and Economic Design</li>
              <li>Treasury Bill & Reserve Teh Integration</li>
              <li>ICO Structure and Tokenomics</li>
              <li>Fund Allocation Strategy</li>
              <li>Technical Architecture</li>
              <li>Risk Management</li>
              <li>Roadmap and Future Development</li>
              <li>Conclusion</li>
            </ol>
          </CardContent>
        </Card>

        {/* 1. Introduction */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">1. INTRODUCTION</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <p>
              The decentralized finance (DeFi) landscape has been dominated by speculative trading 
              and short-term profit extraction, leaving long-term believers and committed participants 
              underrewarded. OverClocked <Bot className="inline h-4 w-4 mx-1 text-green-400" /> addresses this fundamental imbalance 
              by creating a system that exclusively rewards commitment and punishes speculation.
            </p>
            <p>
              Traditional staking mechanisms allow users to unstake at any time, creating market 
              volatility and reducing the effectiveness of long-term wealth accumulation strategies. 
              <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI's revolutionary approach requires a 55-day commitment period, enforced through 
              NFT ownership, creating a new class of market participants: The Staker Class.
            </p>
          </CardContent>
        </Card>

        {/* 2. The Staker Class Revolution */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">2. THE STAKER CLASS REVOLUTION</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <h3 className="text-xl font-semibold text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">2.1 Fundamental Principles</h3>
            <p>
              The Staker Class represents a paradigm shift in crypto economics. Unlike traditional 
              DeFi protocols that serve both traders and stakers equally, <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI explicitly 
              prioritizes committed stakers through:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Exclusive Reward Distribution:</strong> Only stakers receive yield</li>
              <li><strong>One-Stake-Per-Address:</strong> Prevents gaming and encourages accumulation</li>
              <li><strong>55-Day Lock Period:</strong> Eliminates market manipulation</li>
              <li><strong>NFT Ownership Model:</strong> Creates tangible proof of commitment</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">2.2 Economic Incentives</h3>
            <p>
              The protocol's design creates powerful economic incentives that naturally encourage 
              desired behaviors:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Accumulation Strategy:</strong> Users benefit from waiting to acquire more <Bot className="inline h-3 w-3 mx-1 text-green-400" />OCAI before staking</li>
              <li><strong>Proportional Rewards:</strong> Larger stakes receive proportionally larger rewards</li>
              <li><strong>Supply Reduction:</strong> More tokens staked = less liquid supply = price appreciation</li>
              <li><strong>Network Effects:</strong> Each staker benefits from others' commitment</li>
            </ul>
          </CardContent>
        </Card>

        {/* 3. NFT Proof-of-Stake */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">3. NFT PROOF-OF-STAKE (POS) MECHANISM</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <h3 className="text-xl font-semibold text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">3.1 Technical Implementation</h3>
            <p>
              When a user stakes <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI tokens, the protocol mints a unique NFT that serves 
              as proof of their stake. This NFT contains metadata including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Stake amount</li>
              <li>Stake timestamp</li>
              <li>Maturity date (55 days from stake)</li>
              <li>Accumulated rewards</li>
              <li>Unique stake identifier</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">3.2 Rewards Calculation</h3>
            <p>
              Stakers receive multiple types of rewards:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Guaranteed <Bot className="inline h-3 w-3 mx-1 text-green-400" />OCAI Yield:</strong> 3.69% of staked amount</li>
              <li><strong>TBILL Rewards:</strong> Variable based on 🤖 OCBotz performance</li>
              <li><strong>FED Rewards:</strong> Variable based on 🤖 OCBotz performance</li>
              <li><strong>Target Combined Yield:</strong> 555% over 55 days</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">3.3 Exit Mechanism</h3>
            <p>
              To claim rewards, stakers must burn their NFT. This can happen in two ways:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Mature Exit (After 55 days):</strong> Full rewards + staked <Bot className="inline h-3 w-3 mx-1 text-green-400" />OCAI returned</li>
              <li><strong>Early Exit (Before 55 days):</strong> 25% penalty + no rewards</li>
            </ul>
          </CardContent>
        </Card>

        {/* 4. OCBotz System */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">4. 🤖 OCBOTZ AUTONOMOUS SYSTEM</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <h3 className="text-xl font-semibold text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">4.1 Reverse Liquidity Engineering</h3>
            <p>
              The 🤖 OCBotz system represents a groundbreaking approach to automated yield generation. 
              Rather than traditional liquidity provision, our bots employ Reverse Liquidity 
              Engineering - a sophisticated strategy that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Executes strategic buy/sell operations to accumulate TBILL and FED</li>
              <li>Maintains price stability through intelligent market making</li>
              <li>Implements anti-manipulation measures</li>
              <li>Optimizes gas efficiency across all operations</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">4.2 Bot Deployment Strategy</h3>
            <p>
              The protocol deploys multiple specialized 🤖 OCBotz, each with specific functions:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Liquidity Manager Bot:</strong> Maintains optimal liquidity ratios</li>
              <li><strong>Arbitrage Hunter Bot:</strong> Captures cross-DEX price differences</li>
              <li><strong>Rewards Distributor Bot:</strong> Automates reward calculations and distributions</li>
              <li><strong>TBILL Accumulator Bot:</strong> Specialized Treasury Bill acquisition</li>
              <li><strong>FED Harvester Bot:</strong> Optimized Reserve Teh collection</li>
              <li><strong>Anti-Jeet Defense Bot:</strong> Executes strategic buybacks against sellers</li>
              <li><strong>OverClockerBotz (4 units):</strong> High-performance bots that massively amplify rewards when activated</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">4.3 Performance Targets</h3>
            <p>
              The 🤖 OCBotz system targets aggressive performance metrics:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Primary Target:</strong> 555% yield in TBILL & FED over 55 days</li>
              <li><strong>Uptime:</strong> 99.9% operational availability</li>
              <li><strong>Response Time:</strong> Sub-second market reaction capability</li>
              <li><strong>Efficiency:</strong> Minimal gas waste through optimized execution</li>
            </ul>
          </CardContent>
        </Card>

        {/* 5. Game Theory */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">5. GAME THEORY AND ECONOMIC DESIGN</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <h3 className="text-xl font-semibold text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">5.1 Strategic Decision Framework</h3>
            <p>
              <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI's one-stake-per-address mechanism creates a fascinating game theory scenario 
              where rational actors must make strategic decisions about timing and stake size:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Accumulation Game:</strong> Users compete to accumulate more <Bot className="inline h-3 w-3 mx-1 text-green-400" />OCAI before staking</li>
              <li><strong>Timing Pressure:</strong> ICO discounts create urgency</li>
              <li><strong>Commitment Premium:</strong> Longer lock periods = higher rewards</li>
              <li><strong>Network Effects:</strong> More stakers = higher individual rewards</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">5.2 Nash Equilibrium Analysis</h3>
            <p>
              The protocol is designed to reach a Nash Equilibrium where the optimal strategy 
              for all participants is to:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Accumulate maximum <Bot className="inline h-3 w-3 mx-1 text-green-400" />OCAI tokens possible</li>
              <li>Stake once with full holdings</li>
              <li>Hold for full 55-day period</li>
              <li>Reinvest rewards into new stake cycles</li>
            </ol>
          </CardContent>
        </Card>

        {/* 6. Treasury Bill Integration */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">6. TREASURY BILL & RESERVE TEH INTEGRATION</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <h3 className="text-xl font-semibold text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">6.1 Dual Token Strategy</h3>
            <p>
              <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI leverages the unique properties of Treasury Bill (TBILL) and Reserve Teh (FED) 
              tokens to maximize staker rewards. Both tokens are designed to peg to $1 USD, 
              creating massive potential upside for current holders.
            </p>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">6.2 Treasury Bill Mechanics</h3>
            <p>
              Treasury Bill can be burned 1:1 to the Reserve Teh contract to mint Reserve Teh (FED). 
              This creates a unique arbitrage opportunity that our 🤖 OCBotz can exploit:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Minting Ratio:</strong> 1 TBILL = 1 FED (via Reserve Teh contract)</li>
              <li><strong>Price Discovery:</strong> Market prices may differ from 1:1 ratio</li>
              <li><strong>Arbitrage Potential:</strong> 🤖 OCBotz can capture price differences</li>
              <li><strong>Dual Accumulation:</strong> Earn both tokens simultaneously</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">6.3 The Ultimate TBILL & FED Printer</h3>
            <p>
              <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI aims to become the most efficient TBILL & FED printing mechanism 
              in the ecosystem. Instead of manually minting FED, users can stake <Bot className="inline h-3 w-3 mx-1 text-green-400" />OCAI 
              and earn both tokens at an overclocked rate through our automated system.
            </p>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">6.4 Liquidity Pool Strategy</h3>
            <p>
              At the end of each stake period, users can utilize our LP Zapper feature to 
              automatically pair their TBILL and FED rewards into a liquidity pool:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Auto-Pairing:</strong> One-click TBILL/FED LP token creation</li>
              <li><strong>Fee Generation:</strong> Earn trading fees from the liquidity pool</li>
              <li><strong>Dollar Peg Upside:</strong> When both tokens reach $1, LP fees become substantial</li>
              <li><strong>Compound Strategy:</strong> Reinvest LP fees into new <Bot className="inline h-3 w-3 mx-1 text-green-400" />OCAI stakes</li>
            </ul>
          </CardContent>
        </Card>

        {/* 7. ICO Structure */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">7. ICO STRUCTURE AND TOKENOMICS</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <h3 className="text-xl font-semibold text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">7.1 ICO Phases</h3>
            <p>
              The <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI ICO consists of four strategic phases designed to reward early commitment:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-green-400/30 mt-4">
                <thead>
                  <tr className="bg-green-400/10">
                    <th className="border border-green-400/30 p-3 text-left">Phase</th>
                    <th className="border border-green-400/30 p-3 text-left">Duration</th>
                    <th className="border border-green-400/30 p-3 text-left">Discount</th>
                    <th className="border border-green-400/30 p-3 text-left">Accepted Tokens</th>
                    <th className="border border-green-400/30 p-3 text-left">Max Investment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-green-400/30 p-3">Early Bird 😇 Angels</td>
                    <td className="border border-green-400/30 p-3">14 days</td>
                    <td className="border border-green-400/30 p-3">5x (80% off)</td>
                    <td className="border border-green-400/30 p-3">Any token</td>
                    <td className="border border-green-400/30 p-3">$10,000</td>
                  </tr>
                  <tr className="bg-green-400/5">
                    <td className="border border-green-400/30 p-3">Round 1</td>
                    <td className="border border-green-400/30 p-3">14 days</td>
                    <td className="border border-green-400/30 p-3">3x (67% off)</td>
                    <td className="border border-green-400/30 p-3">PLS only</td>
                    <td className="border border-green-400/30 p-3">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="border border-green-400/30 p-3">Round 2</td>
                    <td className="border border-green-400/30 p-3">14 days</td>
                    <td className="border border-green-400/30 p-3">2x (50% off)</td>
                    <td className="border border-green-400/30 p-3">PLS only</td>
                    <td className="border border-green-400/30 p-3">Unlimited</td>
                  </tr>
                  <tr className="bg-green-400/5">
                    <td className="border border-green-400/30 p-3">Last Orders</td>
                    <td className="border border-green-400/30 p-3">14 days</td>
                    <td className="border border-green-400/30 p-3">1.25x (20% off)</td>
                    <td className="border border-green-400/30 p-3">PLS only</td>
                    <td className="border border-green-400/30 p-3">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">7.2 Dynamic Pricing Model</h3>
            <p>
              Token pricing scales based on the total amount raised during the Early Bird 😇 Angels round:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Base Formula:</strong> Launch Price = (😇 Angels Total / 1,000,000) × $9</li>
              <li><strong>Example:</strong> If $1M raised in 😇 Angels, Launch Price = $9.00</li>
              <li><strong>Scaling:</strong> Higher 😇 Angels participation = Higher launch price</li>
              <li><strong>Early Bird Advantage:</strong> 😇 Angels always get 5x discount regardless of final price</li>
            </ul>
          </CardContent>
        </Card>

        {/* 8. Fund Allocation */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">8. STRATEGIC FUND ALLOCATION</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <h3 className="text-xl font-semibold text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">8.1 Transparent Distribution</h3>
            <p>
              <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI maintains complete transparency in fund allocation to ensure investor confidence 
              and optimal protocol development:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 border border-green-400/30 rounded bg-green-400/5">
                <h4 className="text-green-400 font-semibold mb-2">Development & Operations (2%)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Developer compensation (1%)</li>
                  <li>• Marketing expansion (1%)</li>
                  <li>• Cross-platform campaigns</li>
                  <li>• Community growth initiatives</li>
                </ul>
              </div>

              <div className="p-4 border border-green-400/30 rounded bg-green-400/10">
                <h4 className="text-green-400 font-semibold mb-2">Protocol Expansion (98%)</h4>
                <ul className="text-sm space-y-1">
                  <li>• Liquidity pool seeding</li>
                  <li>• 🤖 OCBotz development & deployment</li>
                  <li>• Advanced strategic buyback systems</li>
                  <li>• Cross-chain bridge development</li>
                  <li>• CEX listing preparations</li>
                  <li>• Additional marketing campaigns</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">8.2 Value Creation Focus</h3>
            <p>
              Unlike many projects that extract significant value for founders, <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI 
              dedicates 98% of raised funds directly to protocol value creation:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Minimal Extraction:</strong> Only 2% for essential operations</li>
              <li><strong>Maximum Reinvestment:</strong> 98% goes back into the ecosystem</li>
              <li><strong>Sustainable Growth:</strong> Long-term value over short-term extraction</li>
              <li><strong>Aligned Incentives:</strong> Developer success tied to protocol success</li>
            </ul>
          </CardContent>
        </Card>

        {/* 9. Technical Architecture */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">9. TECHNICAL ARCHITECTURE</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <h3 className="text-xl font-semibold text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">9.1 Smart Contract Infrastructure</h3>
            <p>
              <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI is built on PulseChain using a modular smart contract architecture:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong><Bot className="inline h-3 w-3 mr-1 text-green-400" />OCAI Token Contract:</strong> ERC-20 compatible with enhanced features</li>
              <li><strong>Staking Contract:</strong> Manages NFT minting and reward calculations</li>
              <li><strong>🤖 OCBotz Controller:</strong> Coordinates autonomous bot operations</li>
              <li><strong>Reward Distribution:</strong> Handles TBILL and FED distribution</li>
              <li><strong>Emergency Controls:</strong> Multi-signature safety mechanisms</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">9.2 Security Measures</h3>
            <p>
              Security is paramount in the <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI ecosystem:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Multi-signature Wallets:</strong> All critical functions require multiple signatures</li>
              <li><strong>Time-locked Upgrades:</strong> Contract changes have mandatory delay periods</li>
              <li><strong>Audit Requirements:</strong> All contracts undergo professional security audits</li>
              <li><strong>Bug Bounty Program:</strong> Incentivized security research</li>
            </ul>
          </CardContent>
        </Card>

        {/* 10. Risk Management */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">10. RISK MANAGEMENT</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <h3 className="text-xl font-semibold text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">10.1 Identified Risks</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Smart Contract Risk:</strong> Potential bugs or vulnerabilities in code</li>
              <li><strong>Market Risk:</strong> Volatility in underlying token prices</li>
              <li><strong>Regulatory Risk:</strong> Potential changes in regulatory environment</li>
              <li><strong>Technical Risk:</strong> 🤖 OCBotz operational failures</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">10.2 Mitigation Strategies</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Diversified Strategies:</strong> Multiple 🤖 OCBotz with different approaches</li>
              <li><strong>Conservative Targets:</strong> Realistic yield expectations</li>
              <li><strong>Emergency Protocols:</strong> Ability to pause operations if needed</li>
              <li><strong>Insurance Coverage:</strong> Protocol insurance for major risks</li>
            </ul>
          </CardContent>
        </Card>

        {/* 11. Roadmap */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">11. ROADMAP AND FUTURE DEVELOPMENT</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <h3 className="text-xl font-semibold text-green-400 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">Q3 2025 - Foundation</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Early Bird 😇 Angels ICO launch</li>
              <li>Core smart contract deployment</li>
              <li>Initial 🤖 OCBotz development</li>
              <li>Community building and marketing</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">Q4 2025 - Launch</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>ICO completion and token distribution</li>
              <li>PulseX DEX listing</li>
              <li>Staking platform launch</li>
              <li>First 🤖 OCBotz deployment</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">Q1 2026 - Expansion</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Additional 🤖 OCBotz deployment</li>
              <li>Cross-chain bridge development</li>
              <li>CEX listing preparations</li>
              <li>Advanced features rollout</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mt-6 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]">Q2 2026 - Maturation</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full ecosystem maturity</li>
              <li>OverClockerBot activation</li>
              <li>Global exchange listings</li>
              <li>Ecosystem partnerships</li>
            </ul>
          </CardContent>
        </Card>

        {/* 12. Conclusion */}
        <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 shadow-[0_0_30px_rgba(0,255,65,0.2)]">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">12. CONCLUSION</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 space-y-4">
            <p>
              OverClocked <Bot className="inline h-4 w-4 mx-1 text-green-400" /> represents a paradigm shift in decentralized finance, 
              prioritizing committed stakers over speculative traders through innovative game theory 
              and autonomous technology. By combining NFT Proof-of-Stake mechanics with 
              sophisticated 🤖 OCBotz operations, the protocol creates a sustainable ecosystem 
              that rewards patience and punishes short-term thinking.
            </p>
            <p>
              The integration with Treasury Bill and Reserve Teh tokens, coupled with the potential 
              for these assets to reach their $1 peg, creates unprecedented wealth generation 
              opportunities for early adopters. With minimal developer extraction (2%) and maximum 
              protocol reinvestment (98%), <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI aligns incentives between 
              all participants toward long-term success.
            </p>
            <p>
              As the crypto space matures, protocols that prioritize utility over speculation 
              will capture the most value. <Bot className="inline h-4 w-4 mx-1 text-green-400" />OCAI is positioned to lead this evolution, 
              creating generational wealth for the Staker Class while establishing new standards 
              for sustainable DeFi innovation.
            </p>
          </CardContent>
        </Card>

        {/* Legal Disclaimer */}
        <Card className="bg-red-900/20 border-red-400/50">
          <CardHeader>
            <CardTitle className="text-red-400 text-xl drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">LEGAL DISCLAIMER</CardTitle>
          </CardHeader>
          <CardContent className="text-red-300 text-sm space-y-2">
            <p>
              This whitepaper is for informational purposes only and does not constitute an offer 
              to sell or a solicitation to buy any securities. <Bot className="inline h-3 w-3 mx-1 text-green-400" />OCAI tokens are utility 
              tokens and not investment securities.
            </p>
            <p>
              All yield targets are aspirational and not guaranteed. Cryptocurrency investments 
              carry significant risks including total loss of capital. Participants should conduct 
              their own research and consult financial advisors before participating.
            </p>
            <p>
              The 🤖 OCBotz system performance is dependent on market conditions and technical 
              factors beyond the team's control. Past performance does not guarantee future results.
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-green-300/70 mb-4">
            For more information, visit our website or join our Telegram community.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => navigate('/')}
              className="bg-green-400 text-black hover:bg-green-300 px-6 py-2"
            >
              VISIT WEBSITE
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('https://t.me/OverclockedAI', '_blank')}
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-6 py-2"
            >
              JOIN TELEGRAM
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;