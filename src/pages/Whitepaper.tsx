import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Cpu, TrendingUp, Zap, Users, Award, DollarSign, Clock, Target, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Whitepaper = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Navigation */}
      <nav className="p-6 border-b border-green-400/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Button 
            onClick={() => navigate('/')}
            className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
            variant="outline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            BACK TO MAIN
          </Button>
          <h1 className="text-2xl font-bold text-green-400">
            OVERCLOCKED<span className="text-green-300">AI</span> WHITEPAPER
          </h1>
          <div className="w-32"></div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Title Section */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4 text-green-400">
            OVERCLOCKED AI
          </h1>
          <h2 className="text-3xl mb-6 text-green-300">
            TECHNICAL WHITEPAPER
          </h2>
          <p className="text-xl text-green-300/80">
            Revolutionizing DeFi Through Advanced Game Theory & Proof-Of-Stake (POS)
          </p>
          <p className="text-lg text-green-300/60 mt-4">
            Built on PulseChain • The Future of Finance
          </p>
        </div>

        {/* Abstract */}
        <Card className="bg-black border-green-400/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl">ABSTRACT</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 leading-relaxed">
            <p className="mb-4">
              OverClocked AI (OCAI) introduces a revolutionary Proof-Of-Stake (POS) ecosystem that fundamentally 
              reshapes DeFi rewards distribution through advanced game theory mechanics. Built on PulseChain, 
              OCAI creates the "Staker Class" - a privileged group of participants who receive exponential 
              rewards while speculators earn nothing.
            </p>
            <p className="mb-4">
              Our autonomous OCBotz utilize proprietary Reverse Liquidity Engineering Technology to generate 
              a targeted 555% yield in TBILL and FED rewards over each 55-day staking period, alongside 
              guaranteed 3.69% OCAI yield.
            </p>
            <p>
              This whitepaper details the technical architecture, tokenomics, and game theory that positions 
              OCAI as the future of sustainable DeFi on PulseChain.
            </p>
          </CardContent>
        </Card>

        {/* Problem Statement */}
        <Card className="bg-black border-green-400/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl flex items-center gap-2">
              <Target className="h-6 w-6" />
              PROBLEM STATEMENT
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 leading-relaxed">
            <p className="mb-4">
              Traditional DeFi protocols suffer from fundamental flaws:
            </p>
            <ul className="space-y-2 ml-6 mb-4">
              <li>• Rewards distributed to passive holders who add no value</li>
              <li>• Lack of incentive alignment between stakeholders</li>
              <li>• Speculation rewarded over commitment</li>
              <li>• No sustainable yield generation mechanisms</li>
              <li>• Poor game theory leading to ecosystem decay</li>
            </ul>
            <p>
              OCAI solves these issues by creating a system where only committed stakers receive rewards, 
              establishing perfect incentive alignment and sustainable tokenomics.
            </p>
          </CardContent>
        </Card>

        {/* Solution Architecture */}
        <Card className="bg-black border-green-400/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl flex items-center gap-2">
              <Cpu className="h-6 w-6" />
              SOLUTION ARCHITECTURE
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 leading-relaxed">
            <h3 className="text-xl font-semibold text-green-400 mb-3">The Staker Class System</h3>
            <p className="mb-4">
              OCAI implements a binary reward system: Stakers vs Non-Stakers. Only those who stake 
              their OCAI tokens for the full 55-day period receive rewards. This creates powerful 
              game theory incentives for long-term commitment.
            </p>
            
            <h3 className="text-xl font-semibold text-green-400 mb-3">NFT Proof-Of-Stake (POS)</h3>
            <p className="mb-4">
              When users stake OCAI, they receive an NFT that serves as cryptographic proof of their 
              stake. This NFT must be burned to claim rewards, ensuring no double-spending and 
              creating verifiable commitment.
            </p>

            <h3 className="text-xl font-semibold text-green-400 mb-3">Autonomous OCBotz Network</h3>
            <p className="mb-4">
              Multiple autonomous OCBotz operate 24/7 using Reverse Liquidity Engineering Technology. 
              Each bot holds a percentage of OCAI supply and executes sophisticated trading strategies 
              to maximize TBILL and FED accumulation for stakers.
            </p>
          </CardContent>
        </Card>

        {/* Game Theory */}
        <Card className="bg-black border-green-400/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl flex items-center gap-2">
              <Users className="h-6 w-6" />
              ADVANCED GAME THEORY
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 leading-relaxed">
            <h3 className="text-xl font-semibold text-green-400 mb-3">The Staker Class Advantage</h3>
            <p className="mb-4">
              OCAI creates a two-tier system where only stakers receive the true value:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 border border-green-400/30 rounded bg-green-400/5">
                <h4 className="text-green-400 font-semibold mb-2">STAKERS RECEIVE:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 3.69% guaranteed OCAI yield</li>
                  <li>• Share of TBILL rewards (target 555% over 55 days)</li>
                  <li>• Share of FED rewards (target 555% over 55 days)</li>
                  <li>• NFT proof of commitment</li>
                  <li>• Voting rights (future implementation)</li>
                </ul>
              </div>
              <div className="p-4 border border-red-400/30 rounded bg-red-400/5">
                <h4 className="text-red-400 font-semibold mb-2">NON-STAKERS RECEIVE:</h4>
                <ul className="space-y-1 text-sm text-red-300">
                  <li>• Nothing from the ecosystem</li>
                  <li>• No TBILL rewards</li>
                  <li>• No FED rewards</li>
                  <li>• No yield generation</li>
                  <li>• Only speculation profits/losses</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-green-400 mb-3">Behavioral Economics</h3>
            <p className="mb-4">
              This system creates powerful psychological and economic incentives:
            </p>
            <ul className="space-y-2 ml-6 mb-4">
              <li>• <span className="text-green-400">Loss Aversion:</span> Fear of missing massive rewards drives staking</li>
              <li>• <span className="text-green-400">Social Proof:</span> Stakers become a privileged class</li>
              <li>• <span className="text-green-400">Commitment Bias:</span> 55-day lock creates strong commitment</li>
              <li>• <span className="text-green-400">Scarcity Effect:</span> Limited rewards only for stakers</li>
            </ul>
          </CardContent>
        </Card>

        {/* Tokenomics */}
        <Card className="bg-black border-green-400/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              TOKENOMICS & ICO STRUCTURE
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 leading-relaxed">
            <h3 className="text-xl font-semibold text-green-400 mb-3">ICO Phases</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-green-400/30 rounded">
                <h4 className="text-green-400 font-semibold">1. Early Bird Angels</h4>
                <p className="text-sm">• 5x discount from launch price</p>
                <p className="text-sm">• $10,000 max per wallet</p>
                <p className="text-sm">• Any token accepted</p>
              </div>
              <div className="p-4 border border-green-400/30 rounded">
                <h4 className="text-green-400 font-semibold">2. Round 1</h4>
                <p className="text-sm">• 3x discount from launch price</p>
                <p className="text-sm">• PLS only accepted</p>
              </div>
              <div className="p-4 border border-green-400/30 rounded">
                <h4 className="text-green-400 font-semibold">3. Round 2</h4>
                <p className="text-sm">• 2x discount from launch price</p>
                <p className="text-sm">• PLS only accepted</p>
              </div>
              <div className="p-4 border border-green-400/30 rounded">
                <h4 className="text-green-400 font-semibold">4. Last Orders</h4>
                <p className="text-sm">• 1.25x discount from launch price</p>
                <p className="text-sm">• PLS only accepted</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-400 mb-3">Tax Structure</h3>
            <p className="mb-3">Every OCAI transaction includes a 3% tax distributed as follows:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 border border-green-400/30 rounded text-center">
                <h4 className="text-green-400 font-semibold">0.5%</h4>
                <p className="text-sm">OCBotz Operations</p>
                <p className="text-xs text-green-300/70">Buy & burn OCAI</p>
              </div>
              <div className="p-4 border border-green-400/30 rounded text-center">
                <h4 className="text-green-400 font-semibold">1.25%</h4>
                <p className="text-sm">TBILL Acquisition</p>
                <p className="text-xs text-green-300/70">For stakers only</p>
              </div>
              <div className="p-4 border border-green-400/30 rounded text-center">
                <h4 className="text-green-400 font-semibold">1.25%</h4>
                <p className="text-sm">FED Acquisition</p>
                <p className="text-xs text-green-300/70">For stakers only</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-400 mb-3">Supply Mechanics</h3>
            <p className="mb-4">
              Total supply is dynamically determined by Early Bird Angels round performance. 
              After ICO completion, supply increases by 400%. Of this increased amount: 
              10% of this is used for liquidity, and 90% for OCBotz operations.
            </p>
          </CardContent>
        </Card>

        {/* Staking Mechanics */}
        <Card className="bg-black border-green-400/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl flex items-center gap-2">
              <Clock className="h-6 w-6" />
              STAKING MECHANICS
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 leading-relaxed">
            <h3 className="text-xl font-semibold text-green-400 mb-3">55-Day Commitment Period</h3>
            <p className="mb-4">
              Every stake lasts exactly 55 days. This period is optimized for:
            </p>
            <ul className="space-y-2 ml-6 mb-6">
              <li>• Maximum reward accumulation</li>
              <li>• Behavioral commitment reinforcement</li>
              <li>• OCBotz optimization cycles</li>
              <li>• Market volatility smoothing</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mb-3">Reward Structure</h3>
            <div className="space-y-4 mb-6">
              <div className="p-4 border border-green-400/30 rounded">
                <h4 className="text-green-400 font-semibold mb-2">Guaranteed Rewards</h4>
                <p className="mb-2">• <span className="text-green-400">3.69% OCAI yield</span> - Fixed return on staked amount</p>
              </div>
              <div className="p-4 border border-green-400/30 rounded">
                <h4 className="text-green-400 font-semibold mb-2">Dynamic Rewards (Target: 555% over 55 days)</h4>
                <p className="mb-2">• <span className="text-green-400">TBILL rewards</span> - Proportional to stake size</p>
                <p className="mb-2">• <span className="text-green-400">FED rewards</span> - Proportional to stake size</p>
                <p className="text-xs text-green-300/70">
                  * Actual yields may vary based on OCBotz performance, market conditions, and total staked amount
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-400 mb-3">Penalty System</h3>
            <div className="p-4 border border-red-400/30 rounded bg-red-400/5">
              <h4 className="text-red-400 font-semibold mb-2">Early Exit Penalty</h4>
              <ul className="space-y-1 text-red-300">
                <li>• 25% of staked OCAI forfeited</li>
                <li>• No 3.69% yield received</li>
                <li>• No TBILL rewards</li>
                <li>• No FED rewards</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* OCBotz Technology */}
        <Card className="bg-black border-green-400/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl flex items-center gap-2">
              <Cpu className="h-6 w-6" />
              OCBOTZ REVERSE LIQUIDITY ENGINEERING
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 leading-relaxed">
            <h3 className="text-xl font-semibold text-green-400 mb-3">Autonomous Operations</h3>
            <p className="mb-4">
              OCBotz operate 24/7 with no human intervention, using advanced AI algorithms to:
            </p>
            <ul className="space-y-2 ml-6 mb-6">
              <li>• Execute optimal buy/sell strategies</li>
              <li>• Accumulate maximum TBILL and FED</li>
              <li>• Maintain price stability</li>
              <li>• Reduce circulating supply through burns</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mb-3">Reverse Liquidity Engineering</h3>
            <p className="mb-4">
              Unlike traditional liquidity provision, our bots extract value from market inefficiencies:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 border border-green-400/30 rounded text-center">
                <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="text-green-400 font-semibold">Price Growth</h4>
                <p className="text-sm">Strategic market operations</p>
              </div>
              <div className="p-4 border border-green-400/30 rounded text-center">
                <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="text-green-400 font-semibold">Reward Accumulation</h4>
                <p className="text-sm">TBILL & FED acquisition</p>
              </div>
              <div className="p-4 border border-green-400/30 rounded text-center">
                <Zap className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="text-green-400 font-semibold">Supply Reduction</h4>
                <p className="text-sm">Token burning mechanism</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-400 mb-3">Target Performance</h3>
            <p className="mb-4">
              OCBotz are designed to generate a combined 555% yield in TBILL and FED rewards 
              over each 55-day staking period. This ambitious target is achieved through:
            </p>
            <ul className="space-y-2 ml-6">
              <li>• Advanced arbitrage strategies</li>
              <li>• Market timing algorithms</li>
              <li>• Cross-DEX optimization</li>
              <li>• Compound reward mechanisms</li>
            </ul>
            <p className="text-sm text-green-300/70 mt-4">
              * Actual performance may vary due to market conditions, liquidity availability, and other factors
            </p>
          </CardContent>
        </Card>

        {/* TBILL & FED Integration */}
        <Card className="bg-black border-green-400/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl flex items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              TBILL & FED ECOSYSTEM
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 leading-relaxed">
            <h3 className="text-xl font-semibold text-green-400 mb-3">Token Overview</h3>
            <p className="mb-4">
              TBILL and FED are revolutionary tokens created by renowned developer Maria from 
              Atropa and Dysnomia projects. Both tokens are designed to peg to $1, offering 
              unprecedented stability and growth potential.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 border border-green-400/30 rounded">
                <h4 className="text-green-400 font-semibold mb-2">TBILL (Treasury Bill)</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Backed by real treasury instruments</li>
                  <li>• Target peg: $1.00</li>
                  <li>• Deflationary mechanics</li>
                  <li>• Institutional grade stability</li>
                </ul>
              </div>
              <div className="p-4 border border-green-400/30 rounded">
                <h4 className="text-green-400 font-semibold mb-2">FED (Reserve Teh)</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Federal reserve mechanisms</li>
                  <li>• Target peg: $1.00</li>
                  <li>• Monetary policy integration</li>
                  <li>• Economic stability features</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-green-400 mb-3">Wealth Generation Potential</h3>
            <p className="mb-4">
              With both tokens destined to reach $1 peg, OCAI stakers position themselves to earn:
            </p>
            <ul className="space-y-2 ml-6">
              <li>• <span className="text-green-400">Millions of TBILL tokens</span> through consistent staking</li>
              <li>• <span className="text-green-400">Millions of FED tokens</span> through ecosystem participation</li>
              <li>• <span className="text-green-400">Billions in potential value</span> as tokens reach $1 peg</li>
              <li>• <span className="text-green-400">Passive income streams</span> from dual-token rewards</li>
            </ul>
          </CardContent>
        </Card>

        {/* Technical Implementation */}
        <Card className="bg-black border-green-400/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl flex items-center gap-2">
              <Shield className="h-6 w-6" />
              TECHNICAL IMPLEMENTATION
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 leading-relaxed">
            <h3 className="text-xl font-semibold text-green-400 mb-3">PulseChain Integration</h3>
            <p className="mb-4">
              OCAI is built natively on PulseChain, leveraging its advantages:
            </p>
            <ul className="space-y-2 ml-6 mb-6">
              <li>• Ultra-low transaction fees</li>
              <li>• Fast block times</li>
              <li>• Ethereum compatibility</li>
              <li>• Environmental sustainability</li>
              <li>• Decentralized governance</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mb-3">Smart Contract Architecture</h3>
            <p className="mb-4">
              The OCAI ecosystem consists of several interconnected smart contracts:
            </p>
            <ul className="space-y-2 ml-6 mb-6">
              <li>• <span className="text-green-400">OCAI Token Contract:</span> Main token with tax mechanisms</li>
              <li>• <span className="text-green-400">Staking Contract:</span> 55-day lock and NFT minting</li>
              <li>• <span className="text-green-400">Rewards Contract:</span> TBILL and FED distribution</li>
              <li>• <span className="text-green-400">OCBotz Contracts:</span> Autonomous trading operations</li>
              <li>• <span className="text-green-400">NFT Contract:</span> Proof-Of-Stake (POS) certificates</li>
            </ul>

            <h3 className="text-xl font-semibold text-green-400 mb-3">Security Measures</h3>
            <ul className="space-y-2 ml-6">
              <li>• Multi-signature wallet controls</li>
              <li>• Timelock mechanisms for upgrades</li>
              <li>• Third-party security audits</li>
              <li>• Decentralized governance structure</li>
              <li>• Emergency pause functionality</li>
            </ul>
          </CardContent>
        </Card>

        {/* Roadmap */}
        <Card className="bg-black border-green-400/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl">DEVELOPMENT ROADMAP</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 leading-relaxed">
            <div className="space-y-6">
              <div className="p-4 border-l-4 border-green-400">
                <h4 className="text-green-400 font-semibold">Q1 2024 - Foundation</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• ICO launch and token distribution</li>
                  <li>• PulseX DEX listing</li>
                  <li>• Initial OCBotz deployment</li>
                  <li>• Community building</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-400">
                <h4 className="text-green-400 font-semibold">Q2 2024 - Expansion</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Advanced OCBotz strategies</li>
                  <li>• Partnership with TBILL and FED</li>
                  <li>• Staking platform optimization</li>
                  <li>• Mobile application</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-400">
                <h4 className="text-green-400 font-semibold">Q3 2024 - Innovation</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Cross-chain integration</li>
                  <li>• Advanced yield strategies</li>
                  <li>• Governance token launch</li>
                  <li>• Institutional partnerships</li>
                </ul>
              </div>
              
              <div className="p-4 border-l-4 border-green-400">
                <h4 className="text-green-400 font-semibold">Q4 2024 - Maturation</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Full decentralization</li>
                  <li>• Advanced AI integration</li>
                  <li>• Global market expansion</li>
                  <li>• Ecosystem maturation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Factors */}
        <Card className="bg-black border-red-400/50">
          <CardHeader>
            <CardTitle className="text-red-400 text-2xl">RISK FACTORS</CardTitle>
          </CardHeader>
          <CardContent className="text-red-300 leading-relaxed">
            <p className="mb-4">
              As with any DeFi investment, OCAI carries inherent risks:
            </p>
            <ul className="space-y-2 ml-6 mb-4">
              <li>• <span className="text-red-400">Market Volatility:</span> Token prices may fluctuate significantly</li>
              <li>• <span className="text-red-400">Smart Contract Risk:</span> Code vulnerabilities may exist</li>
              <li>• <span className="text-red-400">OCBotz Performance:</span> Actual yields may differ from targets</li>
              <li>• <span className="text-red-400">Regulatory Risk:</span> Future regulations may impact operations</li>
              <li>• <span className="text-red-400">Liquidity Risk:</span> Market conditions may affect token liquidity</li>
            </ul>
            <p className="text-sm">
              Investors should conduct their own research and invest only what they can afford to lose.
            </p>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="bg-black border-green-400/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-2xl">CONCLUSION</CardTitle>
          </CardHeader>
          <CardContent className="text-green-300 leading-relaxed">
            <p className="mb-4">
              OverClocked AI represents a paradigm shift in DeFi, creating sustainable value 
              through advanced game theory and innovative reward mechanisms. By privileging 
              committed stakers over speculators, OCAI builds a foundation for long-term growth 
              and community prosperity.
            </p>
            <p className="mb-4">
              The integration with TBILL and FED tokens, combined with autonomous OCBotz operations, 
              positions OCAI at the forefront of next-generation finance on PulseChain. Early 
              participants have the opportunity to earn millions, potentially billions, in rewards 
              as the ecosystem matures.
            </p>
            <p className="text-green-400 font-semibold text-lg text-center mt-8">
              The future of finance is here. Join the Staker Class today.
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-12 text-green-300/70">
          <p className="mb-4">© 2024 OverClocked AI • Built on PulseChain</p>
          <p className="text-sm">
            This whitepaper is for informational purposes only and does not constitute investment advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
