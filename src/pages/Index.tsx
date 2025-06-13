
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Shield, Cpu, TrendingUp, Zap, Users, Award, DollarSign, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [angelRoundValue, setAngelRoundValue] = useState(1000000);
  const [matrixText, setMatrixText] = useState('');

  // Matrix rain effect text
  useEffect(() => {
    const chars = '01';
    let result = '';
    for (let i = 0; i < 20; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setMatrixText(result);
    
    const interval = setInterval(() => {
      let newResult = '';
      for (let i = 0; i < 20; i++) {
        newResult += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setMatrixText(newResult);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Calculate token economics with corrected Early Bird Angels 5x discount
  const calculateTokenomics = (angelValue: number) => {
    const launchPrice = angelValue / 1000000 * 9; // $9 per token if $1M raised
    const earlyBirdPrice = launchPrice / 5; // 5x discount for Early Bird Angels
    const round1Price = launchPrice / 3;
    const round2Price = launchPrice / 2;
    const lastOrdersPrice = launchPrice / 1.25;
    
    return {
      launchPrice: launchPrice.toFixed(4),
      earlyBirdPrice: earlyBirdPrice.toFixed(4),
      round1Price: round1Price.toFixed(4),
      round2Price: round2Price.toFixed(4),
      lastOrdersPrice: lastOrdersPrice.toFixed(4)
    };
  };

  const tokenomics = calculateTokenomics(angelRoundValue);

  return (
    <div className="min-h-screen bg-black text-green-400 overflow-hidden font-mono">
      {/* Matrix Background Effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 text-xs leading-none">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="animate-pulse">
              {matrixText}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 border-b border-green-400/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">
            OVERCLOCKED<span className="text-green-300">AI</span>
          </h1>
          <Button 
            onClick={() => navigate('/whitepaper')}
            className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 glow-on-hover"
            variant="outline"
          >
            ACCESS WHITEPAPER
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              OVERCLOCKED
              <span className="block text-green-300 animate-pulse">AI</span>
            </h1>
            <div className="absolute -top-2 -right-2 text-green-300 opacity-50 text-sm">
              {matrixText}
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-4 text-green-300 max-w-4xl mx-auto leading-relaxed">
            The Future of Finance is Here. Built on <span className="text-green-400 font-bold">PulseChain</span>.
          </p>
          <p className="text-lg md:text-xl mb-8 text-green-300 max-w-4xl mx-auto leading-relaxed">
            Stake OCAI, Earn 3.69% Yield + 555% Target in TBILL & FED Rewards.
            <br />
            <span className="text-green-400 font-semibold">Bringing the Staker Class Back Through Advanced Game Theory.</span>
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <Card className="bg-black border-green-400/50 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-400 mb-2">3.69% YIELD</h3>
                <p className="text-green-300 text-sm">Fixed yield on every stake</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-green-400/50 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-400 mb-2">555% TARGET</h3>
                <p className="text-green-300 text-sm">TBILL & FED rewards over 55 days</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-green-400/50 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-400 mb-2">NFT PROOF-OF-STAKE</h3>
                <p className="text-green-300 text-sm">Your stake secured by NFTs</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-green-400/50 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-400 mb-2">55-DAY STAKES</h3>
                <p className="text-green-300 text-sm">Perfect commitment period</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ICO Calculator Section */}
      <section className="relative z-10 py-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
            ICO CALCULATOR
          </h2>
          
          <Card className="bg-black border-green-400/50 p-8 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)]">
            <CardHeader>
              <CardTitle className="text-green-400 text-center text-2xl">
                Dynamic Pricing Based on Early Bird Angels Round
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <label className="block text-green-300 mb-2">
                  Early Bird Angels Round Value ($):
                </label>
                <input
                  type="number"
                  value={angelRoundValue}
                  onChange={(e) => setAngelRoundValue(Number(e.target.value))}
                  className="w-full p-3 bg-black border border-green-400/50 text-green-400 rounded focus:border-green-400 focus:outline-none"
                  min="100000"
                  max="10000000"
                  step="100000"
                />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="text-center p-4 border border-green-400/30 rounded bg-green-400/5">
                  <h4 className="text-green-400 font-semibold mb-2">Early Bird Angels</h4>
                  <p className="text-2xl font-bold text-green-300">${tokenomics.earlyBirdPrice}</p>
                  <p className="text-sm text-green-300/70">5x discount • $10k max</p>
                  <p className="text-xs text-green-300/50">Any token accepted</p>
                </div>
                
                <div className="text-center p-4 border border-green-400/30 rounded bg-green-400/5">
                  <h4 className="text-green-400 font-semibold mb-2">Round 1</h4>
                  <p className="text-2xl font-bold text-green-300">${tokenomics.round1Price}</p>
                  <p className="text-sm text-green-300/70">3x discount</p>
                  <p className="text-xs text-green-300/50">PLS only</p>
                </div>
                
                <div className="text-center p-4 border border-green-400/30 rounded bg-green-400/5">
                  <h4 className="text-green-400 font-semibold mb-2">Round 2</h4>
                  <p className="text-2xl font-bold text-green-300">${tokenomics.round2Price}</p>
                  <p className="text-sm text-green-300/70">2x discount</p>
                  <p className="text-xs text-green-300/50">PLS only</p>
                </div>
                
                <div className="text-center p-4 border border-green-400/30 rounded bg-green-400/5">
                  <h4 className="text-green-400 font-semibold mb-2">Last Orders</h4>
                  <p className="text-2xl font-bold text-green-300">${tokenomics.lastOrdersPrice}</p>
                  <p className="text-sm text-green-300/70">1.25x discount</p>
                  <p className="text-xs text-green-300/50">PLS only</p>
                </div>

                <div className="text-center p-4 border border-green-400 rounded bg-green-400/10">
                  <h4 className="text-green-400 font-semibold mb-2">Launch Price</h4>
                  <p className="text-2xl font-bold text-green-300">${tokenomics.launchPrice}</p>
                  <p className="text-sm text-green-300/70">PulseX DEX</p>
                  <p className="text-xs text-green-300/50">Full price</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Game Theory Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
            REVOLUTIONARY GAME THEORY
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black border-green-400/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  The Staker Class
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-300">
                <p className="mb-4">
                  Only stakers receive the true rewards. Buy-and-sell traders get nothing. 
                  This creates powerful incentives to HODL and STAKE through advanced game theory.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 3.69% OCAI yield on every stake</li>
                  <li>• Target 555% yield in TBILL & FED rewards over 55 days</li>
                  <li>• NFT Proof-Of-Stake (POS) ownership</li>
                  <li>• Exclusive access to ecosystem rewards</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-green-400/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  Smart Tax System
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-300">
                <p className="mb-4">
                  Every trade fuels the ecosystem with a 3% tax distributed strategically:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 0.5% → OCBotz (buy & burn OCAI)</li>
                  <li>• 1.25% → Buy TBILL for stakers</li>
                  <li>• 1.25% → Buy FED for stakers</li>
                  <li>• Zero rewards for non-stakers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staking Mechanics */}
      <section className="relative z-10 py-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
            STAKING MECHANICS
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-black border-green-400/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)]">
              <CardHeader>
                <CardTitle className="text-green-400 text-center">STAKE</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-green-300">
                <div className="text-6xl mb-4">🔒</div>
                <p className="mb-4">Lock your OCAI for exactly 55 days</p>
                <p className="text-sm text-green-300/70">NFT minted as Proof-Of-Stake (POS)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-green-400/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)]">
              <CardHeader>
                <CardTitle className="text-green-400 text-center">EARN</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-green-300">
                <div className="text-6xl mb-4">💰</div>
                <p className="mb-4">OCBotz target 555% yield in TBILL & FED over 55 days</p>
                <p className="text-sm text-green-300/70">Plus guaranteed 3.69% OCAI yield</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-green-400/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)]">
              <CardHeader>
                <CardTitle className="text-green-400 text-center">CLAIM</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-green-300">
                <div className="text-6xl mb-4">🎁</div>
                <p className="mb-4">Burn NFT to claim all rewards</p>
                <p className="text-sm text-green-300/70">OCAI + yield + TBILL + FED</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-12 bg-red-900/20 border-red-400/50">
            <CardHeader>
              <CardTitle className="text-red-400 text-center">⚠️ EARLY EXIT PENALTY</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-red-300">
              <p>Burn NFT before 55 days = 25% penalty + no rewards</p>
              <p className="text-sm mt-2">Patience is rewarded. Greed is punished.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* OCBotz Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
            AUTONOMOUS OCBOTZ
          </h2>
          
          <Card className="bg-black border-green-400/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.3)]">
            <CardHeader>
              <CardTitle className="text-green-400 text-center text-2xl flex items-center justify-center gap-2">
                <Cpu className="h-8 w-8" />
                Reverse Liquidity Engineering Technology
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">24/7 Autonomous Operation</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Multiple OCBotz deployed across PulseChain</li>
                    <li>• Each bot holds percentage of OCAI supply</li>
                    <li>• Continuous buy/sell operations</li>
                    <li>• Advanced AI-driven trading algorithms</li>
                    <li>• Target 555% yield in TBILL & FED over 55 days</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4">Triple Purpose System</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <span className="text-green-400">Price Growth:</span> Strategic market operations</li>
                    <li>• <span className="text-green-400">Reward Accumulation:</span> TBILL & FED acquisition</li>
                    <li>• <span className="text-green-400">Supply Reduction:</span> Token burning mechanism</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-400/10 rounded border border-green-400/30">
                <p className="text-center text-green-300 text-lg">
                  "The OCBotz work tirelessly to maximize value for every OCAI staker, 
                  using cutting-edge Reverse Liquidity Engineering to optimize the entire ecosystem 
                  and target exceptional yields for the Staker Class."
                </p>
                <p className="text-center text-green-300/70 text-sm mt-2">
                  * Actual yields may vary due to market conditions and other factors
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-green-400">
            JOIN THE REVOLUTION
          </h2>
          <p className="text-xl text-green-300 mb-8">
            TBILL and FED are destined to peg to $1. Earn millions, potentially billions, 
            by being an active member of the OCAI ecosystem on PulseChain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/whitepaper')}
              className="bg-green-400 text-black hover:bg-green-300 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.5)]"
            >
              READ FULL WHITEPAPER
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('https://t.me/OverclockedAI', '_blank')}
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              JOIN TELEGRAM
            </Button>
          </div>
          
          <div className="mt-12 text-green-300/70 text-sm">
            <p>OVERCLOCKED AI • THE FUTURE OF FINANCE • PULSECHAIN</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
