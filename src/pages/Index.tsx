
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Shield, Cpu, TrendingUp, Zap, Users, Award, DollarSign, Clock, Coins, Activity, Wallet, Plus, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [angelRoundValue, setAngelRoundValue] = useState(1000000);
  const [matrixText, setMatrixText] = useState('');
  const [stakeAmount, setStakeAmount] = useState('');

  // Enhanced Matrix rain effect with more realistic digital rain
  useEffect(() => {
    const matrixChars = '龍虎鳳麒麟金木水火土東西南北春夏秋冬日月星辰雲雨雷電山川河海花鳥魚蟲ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ<>{}[]()!@#$%^&*+-=|\\:;\'\".,?/~`';
    const columns = 25;
    const columnStates = Array(columns).fill(null).map(() => ({
      active: true,
      chars: [],
      pauseTime: 0
    }));

    const updateMatrix = () => {
      let result = '';
      
      columnStates.forEach((column, colIndex) => {
        if (column.pauseTime > 0) {
          column.pauseTime--;
          // Add spaces for paused columns
          for (let i = 0; i < 5; i++) {
            result += ' ';
            if (colIndex === columns - 1) result += '\n';
          }
        } else {
          // Add new character at top
          if (Math.random() > 0.3) {
            column.chars.unshift(matrixChars.charAt(Math.floor(Math.random() * matrixChars.length)));
          }
          
          // Limit column height and remove old characters
          if (column.chars.length > 5) {
            column.chars.pop();
          }
          
          // Check if bottom character should trigger pause
          if (column.chars.length === 5 && Math.random() > 0.95) {
            column.pauseTime = 8; // 2 seconds pause at 4fps
            column.chars = [];
          }
          
          // Fill column to 5 characters
          const displayChars = [...column.chars];
          while (displayChars.length < 5) {
            displayChars.push(' ');
          }
          
          displayChars.forEach((char, charIndex) => {
            result += char;
            if (colIndex === columns - 1) result += '\n';
          });
        }
      });
      
      setMatrixText(result);
    };

    const interval = setInterval(updateMatrix, 250);
    return () => clearInterval(interval);
  }, []);

  // Calculate token economics with corrected Early Bird Angels 5x discount
  const calculateTokenomics = (angelValue: number) => {
    const launchPrice = angelValue / 1000000 * 9; // $9 per token if $1M raised
    const earlyBirdPrice = launchPrice / 5; // 5x discount for Early Bird 😇 Angels
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

  // Mock data for design stage
  const mockData = {
    currentStake: 0,
    ocaiRewards: 0,
    tbillRewards: 0,
    fedRewards: 0,
    holdings: 0,
    currentSupply: 0,
    currentPrice: tokenomics.launchPrice,
    ocBotzDeployed: 12,
    rewardsLocked: "Nothing here.. yet",
    lpTokens: 0,
    lpValue: 0,
    lpFeesEarned: 0
  };

  const ocBotzJobs = [
    { id: 1, name: "Liquidity Manager", type: "regular", status: "ACTIVE", color: "hue-rotate-0" },
    { id: 2, name: "Arbitrage Hunter", type: "regular", status: "ACTIVE", color: "hue-rotate-45" },
    { id: 3, name: "Rewards Distributor", type: "regular", status: "ACTIVE", color: "hue-rotate-90" },
    { id: 4, name: "Smart Buyback", type: "regular", status: "ACTIVE", color: "hue-rotate-135" },
    { id: 5, name: "TBILL Accumulator", type: "regular", status: "ACTIVE", color: "hue-rotate-180" },
    { id: 6, name: "FED Harvester", type: "regular", status: "ACTIVE", color: "hue-rotate-225" },
    { id: 7, name: "Price Optimizer", type: "regular", status: "ACTIVE", color: "hue-rotate-270" },
    { id: 8, name: "Anti-Jeet Defense", type: "regular", status: "ACTIVE", color: "hue-rotate-315" },
    { id: 9, name: "OverClockerBot Alpha", type: "overclocked", status: "DORMANT", color: "hue-rotate-60" },
    { id: 10, name: "OverClockerBot Beta", type: "overclocked", status: "DORMANT", color: "hue-rotate-120" },
    { id: 11, name: "OverClockerBot Gamma", type: "overclocked", status: "DORMANT", color: "hue-rotate-240" },
    { id: 12, name: "OverClockerBot Delta", type: "overclocked", status: "DORMANT", color: "hue-rotate-300" }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 overflow-hidden font-mono">
      {/* Enhanced Matrix Background Effect with cascading glow */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 left-0 text-xs leading-none whitespace-pre-wrap font-mono">
          {matrixText.split('\n').map((line, lineIndex) => (
            <div key={lineIndex} className="flex">
              {line.split('').map((char, charIndex) => {
                const isBottomChar = lineIndex === 4;
                const isGlowing = isBottomChar && char !== ' ';
                return (
                  <span 
                    key={charIndex}
                    className={`inline-block w-4 ${
                      isGlowing 
                        ? 'text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]' 
                        : lineIndex === 3 
                          ? 'text-green-300' 
                          : lineIndex === 2 
                            ? 'text-green-400' 
                            : 'text-green-500'
                    }`}
                    style={{ 
                      animationDelay: `${charIndex * 0.1}s`,
                      textShadow: isGlowing ? '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff' : undefined
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 text-xs leading-none whitespace-pre-wrap font-mono" style={{ animationDelay: '1s' }}>
          {matrixText.split('\n').map((line, lineIndex) => (
            <div key={lineIndex} className="flex">
              {line.split('').map((char, charIndex) => {
                const isBottomChar = lineIndex === 4;
                const isGlowing = isBottomChar && char !== ' ';
                return (
                  <span 
                    key={charIndex}
                    className={`inline-block w-4 ${
                      isGlowing 
                        ? 'text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]' 
                        : lineIndex === 3 
                          ? 'text-green-300' 
                          : lineIndex === 2 
                            ? 'text-green-400' 
                            : 'text-green-500'
                    }`}
                    style={{ 
                      animationDelay: `${charIndex * 0.1}s`,
                      textShadow: isGlowing ? '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff' : undefined
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 border-b border-green-400/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="h-10 w-10 drop-shadow-[0_0_15px_rgba(0,255,65,0.7)]" />
            <h1 className="text-2xl font-bold text-green-400 drop-shadow-[0_0_15px_rgba(0,255,65,0.7)]">
              OVERCLOCKED<span className="text-green-300">AI</span>
            </h1>
          </div>
          <Button 
            onClick={() => navigate('/whitepaper')}
            className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.8)]"
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
            <h1 className="text-6xl md:text-8xl font-bold drop-shadow-[0_0_30px_rgba(0,255,65,0.8)] mb-6">
              OVERCLOCKED
            </h1>
            <span className="text-6xl md:text-8xl font-bold text-green-300 animate-pulse drop-shadow-[0_0_25px_rgba(0,255,65,0.6)]">AI</span>
            <div className="absolute -top-2 -right-2 text-green-300 opacity-50 text-sm animate-pulse">
              {matrixText.slice(0, 20)}
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-4 text-green-300 max-w-4xl mx-auto leading-relaxed">
            The Future of Finance is Here. Built on <span className="text-green-400 font-bold drop-shadow-[0_0_10px_rgba(0,255,65,0.7)]">PulseChain</span>.
          </p>
          <p className="text-lg md:text-xl mb-8 text-green-300 max-w-4xl mx-auto leading-relaxed">
            Stake <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-5 w-5 mx-1" />OCAI, Earn 3.69% Yield + 555% Target in TBILL & FED Rewards.
            <br />
            <span className="text-green-400 font-semibold drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]">Bringing the Staker Class Back Through Advanced Game Theory.</span>
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <Card className="bg-black border-green-400/50 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]" />
                <h3 className="text-lg font-semibold text-green-400 mb-2 drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]">3.69% YIELD</h3>
                <p className="text-green-300 text-sm">Fixed yield on every stake</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-green-400/50 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-green-400 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]" />
                <h3 className="text-lg font-semibold text-green-400 mb-2 drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]">555% TARGET</h3>
                <p className="text-green-300 text-sm">TBILL & FED rewards over 55 days</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-green-400/50 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-green-400 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]" />
                <h3 className="text-lg font-semibold text-green-400 mb-2 drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]">NFT PROOF-OF-STAKE</h3>
                <p className="text-green-300 text-sm">Your stake secured by NFTs</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-green-400/50 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.4)]">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-green-400 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(0,255,65,0.6)]" />
                <h3 className="text-lg font-semibold text-green-400 mb-2 drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]">55-DAY STAKES</h3>
                <p className="text-green-300 text-sm">Perfect commitment period</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Live Statistics Widget */}
      <section className="relative z-10 py-8 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-400 drop-shadow-[0_0_25px_rgba(0,255,65,0.9)]">
            LIVE ECOSYSTEM STATS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 hover:shadow-[0_0_40px_rgba(0,255,65,0.3)] transition-all duration-300">
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent animate-pulse"></div>
                <Coins className="h-10 w-10 text-green-400 mx-auto mb-3 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]" />
                <h4 className="text-green-400 font-semibold mb-1 drop-shadow-[0_0_12px_rgba(0,255,65,0.7)]">Current Supply</h4>
                <p className="text-3xl font-bold text-green-300 drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]">{mockData.currentSupply.toLocaleString()}</p>
                <div className="mt-2 w-full bg-green-400/20 rounded-full h-1">
                  <div className="bg-green-400 h-1 rounded-full w-0 shadow-[0_0_10px_rgba(0,255,65,0.6)]"></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 hover:shadow-[0_0_40px_rgba(0,255,65,0.3)] transition-all duration-300">
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent animate-pulse"></div>
                <DollarSign className="h-10 w-10 text-green-400 mx-auto mb-3 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]" />
                <h4 className="text-green-400 font-semibold mb-1 drop-shadow-[0_0_12px_rgba(0,255,65,0.7)]">Current Price</h4>
                <p className="text-3xl font-bold text-green-300 drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]">${mockData.currentPrice}</p>
                <p className="text-xs text-green-300/70 mt-1">📈 +24.5% (24h)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 hover:shadow-[0_0_40px_rgba(0,255,65,0.3)] transition-all duration-300">
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent animate-pulse"></div>
                <Bot className="h-10 w-10 text-green-400 mx-auto mb-3 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]" />
                <h4 className="text-green-400 font-semibold mb-1 drop-shadow-[0_0_12px_rgba(0,255,65,0.7)]">🤖 OCBotz Deployed</h4>
                <p className="text-3xl font-bold text-green-300 drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]">{mockData.ocBotzDeployed}</p>
                <div className="flex justify-center mt-2 space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_5px_rgba(0,255,65,0.6)]" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 hover:shadow-[0_0_40px_rgba(0,255,65,0.3)] transition-all duration-300">
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent animate-pulse"></div>
                <Activity className="h-10 w-10 text-green-400 mx-auto mb-3 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]" />
                <h4 className="text-green-400 font-semibold mb-1 drop-shadow-[0_0_12px_rgba(0,255,65,0.7)]">Rewards Locked</h4>
                <p className="text-xl font-bold text-green-300 drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]">{mockData.rewardsLocked}</p>
                <p className="text-xs text-green-300/70 mt-1">🔒 Stakers Only</p>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Robot Activity Visualization */}
          <Card className="mt-8 bg-gradient-to-br from-black to-green-900/10 border-green-400/50 shadow-[0_0_50px_rgba(0,255,65,0.3)]">
            <CardHeader>
              <CardTitle className="text-green-400 text-center drop-shadow-[0_0_20px_rgba(0,255,65,0.8)]">
                REAL-TIME 🤖 OCBOTZ ACTIVITY
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {ocBotzJobs.map((bot) => (
                  <div key={bot.id} className={`p-4 border rounded ${
                    bot.type === 'overclocked' 
                      ? 'border-yellow-400/50 bg-yellow-400/10' 
                      : 'border-green-400/30 bg-green-400/5'
                  }`}>
                    <div className="mb-2">
                      <img 
                        src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" 
                        alt="OCBot" 
                        className={`h-10 w-10 mx-auto filter ${bot.color} drop-shadow-[0_0_10px_rgba(0,255,65,0.6)] ${
                          bot.type === 'overclocked' ? 'brightness-125 saturate-150' : ''
                        }`} 
                      />
                    </div>
                    <h4 className={`font-semibold mb-1 ${
                      bot.type === 'overclocked' ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {bot.name}
                    </h4>
                    <div className="flex items-center justify-center mt-2">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        bot.status === 'ACTIVE' 
                          ? 'bg-green-400 animate-pulse' 
                          : 'bg-yellow-400 animate-pulse'
                      }`}></div>
                      <span className={`text-sm ${
                        bot.status === 'ACTIVE' ? 'text-green-300' : 'text-yellow-300'
                      }`}>
                        {bot.status}
                      </span>
                    </div>
                    {bot.type === 'overclocked' && (
                      <p className="text-xs text-yellow-300/70 mt-1">⚡ Massive Rewards</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-400/10 border border-yellow-400/30 rounded">
                <p className="text-yellow-300 text-center font-semibold">
                  ⚡ <strong>OverClockerBotz:</strong> When activated, these 4 special bots massively amplify reward generation for all stakers!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Staking Interface */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400 drop-shadow-[0_0_30px_rgba(0,255,65,0.9)]">
            STAKING INTERFACE
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Enhanced User Holdings */}
            <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 hover:shadow-[0_0_50px_rgba(0,255,65,0.4)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-green-400 text-center drop-shadow-[0_0_20px_rgba(0,255,65,0.8)]">YOUR HOLDINGS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-green-400/30 rounded bg-gradient-to-r from-green-400/5 to-green-400/10">
                  <div className="flex justify-between items-center">
                    <span className="text-green-300">Current <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-4 w-4 mx-1" />OCAI Stake:</span>
                    <div className="text-right">
                      <span className="text-green-400 font-bold text-xl drop-shadow-[0_0_15px_rgba(0,255,65,0.7)]">{mockData.currentStake.toLocaleString()}</span>
                      <div className="text-xs text-green-300/70">🔒 Locked for 55 days</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-green-400/30 rounded bg-gradient-to-r from-green-400/5 to-green-400/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-green-300">Pending Rewards:</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-300/80"><img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-3 w-3 mr-1" />OCAI:</span>
                      <span className="text-green-400 font-bold">{mockData.ocaiRewards.toLocaleString()} ($0.00)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-300/80">TBILL:</span>
                      <span className="text-green-400 font-bold">{mockData.tbillRewards.toLocaleString()} ($0.00)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-300/80">FED:</span>
                      <span className="text-green-400 font-bold">{mockData.fedRewards.toLocaleString()} ($0.00)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-green-400/30 rounded bg-gradient-to-r from-green-400/5 to-green-400/10">
                  <div className="flex justify-between items-center">
                    <span className="text-green-300"><img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-4 w-4 mx-1" />OCAI Holdings:</span>
                    <div className="text-right">
                      <span className="text-green-400 font-bold text-xl drop-shadow-[0_0_15px_rgba(0,255,65,0.7)]">{mockData.holdings.toLocaleString()}</span>
                      <div className="text-xs text-green-300/70">💎 Available to stake</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-blue-400/30 rounded bg-gradient-to-r from-blue-400/5 to-blue-400/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-300">TBILL/FED LP Tokens:</span>
                    <span className="text-blue-400 font-bold">{mockData.lpTokens.toLocaleString()}</span>
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-blue-300/70">LP Value:</span>
                      <span className="text-blue-400">${mockData.lpValue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-300/70">Fees Earned:</span>
                      <span className="text-blue-400">${mockData.lpFeesEarned.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Staking Actions */}
            <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 hover:shadow-[0_0_50px_rgba(0,255,65,0.4)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-green-400 text-center drop-shadow-[0_0_20px_rgba(0,255,65,0.8)]">STAKING ACTIONS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button 
                  variant="outline"
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black py-3 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,100,255,0.6)]"
                >
                  <Wallet className="mr-2 h-5 w-5" />
                  CONNECT WALLET
                </Button>
                <p className="text-xs text-blue-300/70 text-center -mt-2">
                  Compatible with OKX Wallet, WalletConnect, MetaMask & Rabby Wallet
                </p>
                
                <div>
                  <label className="block text-green-300 mb-2">
                    Enter <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-4 w-4 mx-1" />OCAI Amount to Stake:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      className="flex-1 p-3 bg-black border border-green-400/50 text-green-400 rounded focus:border-green-400 focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
                      placeholder="0"
                    />
                    <Button 
                      variant="outline"
                      className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-4"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      MAX
                    </Button>
                  </div>
                  <p className="text-xs text-green-300/70 mt-1">
                    ⚠️ Only 1 stake allowed per address. Cannot add to existing stake.
                  </p>
                </div>
                
                <Button 
                  className="w-full bg-green-400 text-black hover:bg-green-300 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.8)]"
                  disabled={!stakeAmount || parseFloat(stakeAmount) <= 0}
                >
                  🎭 MINT NFT & STAKE
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-red-400 text-red-400 hover:bg-red-400 hover:text-black py-3 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]"
                >
                  🔥 BURN NFT & COLLECT YIELD
                </Button>

                <Button 
                  variant="outline"
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black py-3 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,100,255,0.6)]"
                >
                  ⚡ LP ZAPPER: AUTO-PAIR TBILL/FED
                </Button>
                <p className="text-xs text-blue-300/70 text-center -mt-2">
                  LP Zapper Automatically burns your NFT and pairs your TBILL & FED rewards into LP tokens for more yield, please be aware of impermanent loss before using.
                </p>
                
                <div className="p-4 border border-yellow-400/50 rounded bg-yellow-400/5 shadow-[0_0_20px_rgba(255,255,0,0.15)]">
                  <p className="text-yellow-300 text-sm text-center mb-2">
                    💡 <strong>Strategy Tips:</strong>
                  </p>
                  <ul className="text-yellow-300 text-xs space-y-1">
                    <li>• Wait to accumulate more <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-3 w-3 mx-1" />OCAI before staking for bigger rewards share!</li>
                    <li>• More <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-3 w-3 mx-1" />OCAI staked = Higher price (less liquid supply)</li>
                    <li>• When TBILL & FED reach $1, LP fees will be massive!</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treasury Bill Information Section */}
      <section className="relative z-10 py-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400 drop-shadow-[0_0_30px_rgba(0,255,65,0.9)]">
            THE ULTIMATE TBILL & FED PRINTER
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 hover:shadow-[0_0_50px_rgba(0,255,65,0.4)]">
              <CardHeader>
                <CardTitle className="text-green-400 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">Treasury Bill Utility</CardTitle>
              </CardHeader>
              <CardContent className="text-green-300">
                <p className="mb-4">
                  Treasury Bill (TBILL) can be burned 1:1 to the Reserve Teh contract to mint Reserve Teh (FED). 
                  The <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-4 w-auto mx-1" />OCAI ecosystem will distribute massive amounts of both TBILL and FED.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <span className="text-green-400">1:1 Burn Ratio:</span> TBILL → FED via Reserve Teh</li>
                  <li>• <span className="text-green-400">Dual Distribution:</span> Earn both tokens simultaneously</li>
                  <li>• <span className="text-green-400">$1 Target:</span> Both tokens aim for $1 peg</li>
                  <li>• <span className="text-green-400">Overclocked Speed:</span> Fastest earning rate on <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="PulseChain" className="inline h-4 w-auto mx-1" />PulseChain</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black to-green-900/20 border-green-400/50 hover:shadow-[0_0_50px_rgba(0,255,65,0.4)]">
              <CardHeader>
                <CardTitle className="text-green-400 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">Why Bother Minting FED?</CardTitle>
              </CardHeader>
              <CardContent className="text-green-300">
                <p className="mb-4">
                  Instead of manually minting FED, let <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-4 w-4 mx-1" />OCAI do the heavy lifting! 
                  Our system targets to be the most efficient TBILL & FED printer in existence.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <span className="text-green-400">Automated Earnings:</span> No manual minting needed</li>
                  <li>• <span className="text-green-400">Massive Scale:</span> 🤖 OCBotz work 24/7</li>
                  <li>• <span className="text-green-400">Both Tokens:</span> Diversified reward portfolio</li>
                  <li>• <span className="text-green-400">Think Dollars:</span> Potential generational wealth</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ICO Calculator Section */}
      <section className="relative z-10 py-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400 drop-shadow-[0_0_30px_rgba(0,255,65,0.9)]">
            ICO CALCULATOR
          </h2>
          
          <Card className="bg-gradient-to-br from-black to-green-900/10 border-green-400/50 p-8 hover:shadow-[0_0_50px_rgba(0,255,65,0.4)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-green-400 text-center text-2xl drop-shadow-[0_0_20px_rgba(0,255,65,0.8)]">
                Dynamic Pricing Based on Early Bird 😇 Angels Round
              </CardTitle>
              <p className="text-green-300/80 text-center mt-4">
                📊 <strong>How to use:</strong> Adjust the 😇 Angels Round value below to see theoretical pricing across all ICO rounds. 
                The value shown is theoretical until the Early Bird 😇 Angels Round launches - a real-time tracker will be added then.
              </p>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <label className="block text-green-300 mb-2">
                  Early Bird 😇 Angels Round Value ($):
                </label>
                <input
                  type="number"
                  value={angelRoundValue}
                  onChange={(e) => setAngelRoundValue(Number(e.target.value))}
                  className="w-full p-3 bg-black border border-green-400/50 text-green-400 rounded focus:border-green-400 focus:outline-none focus:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
                  min="100000"
                  max="10000000"
                  step="100000"
                />
              </div>

              {/* Wallet Address */}
              <div className="mb-8 p-4 border border-green-400/50 rounded bg-green-400/5 shadow-[0_0_25px_rgba(0,255,65,0.15)]">
                <h3 className="text-green-400 font-semibold mb-2 text-center drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">ICO WALLET ADDRESS</h3>
                <p className="text-green-300 text-center font-mono text-sm break-all drop-shadow-[0_0_12px_rgba(0,255,65,0.6)]">
                  0x4e60bfdda8dee4cb6bbfb93a35fa7439e63c067b
                </p>
                <p className="text-green-300/70 text-xs text-center mt-2">
                  Send your tokens to this address during ICO rounds
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="text-center p-4 border border-green-400/30 rounded bg-gradient-to-br from-green-400/10 to-green-400/5 hover:shadow-[0_0_25px_rgba(0,255,65,0.3)] transition-all duration-300">
                  <h4 className="text-green-400 font-semibold mb-2 drop-shadow-[0_0_12px_rgba(0,255,65,0.7)]">Early Bird 😇 Angels</h4>
                  <p className="text-2xl font-bold text-green-300 drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]">${tokenomics.earlyBirdPrice}</p>
                  <p className="text-sm text-green-300/70">5x discount • $10k max</p>
                  <p className="text-xs text-green-300/50">Any token accepted</p>
                  <p className="text-xs text-yellow-300 font-semibold">14 days</p>
                </div>
                
                <div className="text-center p-4 border border-green-400/30 rounded bg-green-400/5">
                  <h4 className="text-green-400 font-semibold mb-2">Round 1</h4>
                  <p className="text-2xl font-bold text-green-300">${tokenomics.round1Price}</p>
                  <p className="text-sm text-green-300/70">3x discount</p>
                  <p className="text-xs text-green-300/50">PLS only</p>
                  <p className="text-xs text-yellow-300 font-semibold">14 days</p>
                </div>
                
                <div className="text-center p-4 border border-green-400/30 rounded bg-green-400/5">
                  <h4 className="text-green-400 font-semibold mb-2">Round 2</h4>
                  <p className="text-2xl font-bold text-green-300">${tokenomics.round2Price}</p>
                  <p className="text-sm text-green-300/70">2x discount</p>
                  <p className="text-xs text-green-300/50">PLS only</p>
                  <p className="text-xs text-yellow-300 font-semibold">14 days</p>
                </div>
                
                <div className="text-center p-4 border border-green-400/30 rounded bg-green-400/5">
                  <h4 className="text-green-400 font-semibold mb-2">Last Orders</h4>
                  <p className="text-2xl font-bold text-green-300">${tokenomics.lastOrdersPrice}</p>
                  <p className="text-sm text-green-300/70">1.25x discount</p>
                  <p className="text-xs text-green-300/50">PLS only</p>
                  <p className="text-xs text-yellow-300 font-semibold">14 days</p>
                </div>

                <div className="text-center p-4 border border-green-400 rounded bg-green-400/10">
                  <h4 className="text-green-400 font-semibold mb-2">Launch Price</h4>
                  <p className="text-2xl font-bold text-green-300">${tokenomics.launchPrice}</p>
                  <p className="text-sm text-green-300/70">
                    <img src="/lovable-uploads/2fe16d8c-7588-4038-abb3-40fea0395a00.png" alt="PulseX" className="inline h-4 w-auto mx-1" />
                    PulseX DEX
                  </p>
                  <p className="text-xs text-green-300/50">Market price</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Game Theory Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400 drop-shadow-[0_0_30px_rgba(0,255,65,0.9)]">
            REVOLUTIONARY GAME THEORY
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black border-green-400/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">
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
                  <li>• 3.69% <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-3 w-3 mx-1" />OCAI yield on every stake</li>
                  <li>• Target 555% yield in TBILL & FED rewards over 55 days</li>
                  <li>• NFT Proof-Of-Stake (POS) ownership</li>
                  <li>• Exclusive access to ecosystem rewards</li>
                  <li>• <span className="text-yellow-400 font-semibold">ONE stake per address maximum</span></li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-green-400/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2 drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">
                  <Zap className="h-6 w-6" />
                  Strategic Commitment
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-300">
                <p className="mb-4">
                  The one-stake-per-address rule creates strategic decision making:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <span className="text-green-400">Wait & Accumulate:</span> Buy more <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-3 w-3 mx-1" />OCAI before staking</li>
                  <li>• <span className="text-green-400">Bigger Stake = Bigger Share:</span> More rewards proportionally</li>
                  <li>• <span className="text-green-400">Commitment Rewarded:</span> 55-day lock period</li>
                  <li>• <span className="text-green-400">No Adding:</span> Must burn NFT to stake again</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staking Mechanics */}
      <section className="relative z-10 py-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400 drop-shadow-[0_0_30px_rgba(0,255,65,0.9)]">
            STAKING MECHANICS
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-black border-green-400/50 hover:shadow-[0_0_40px_rgba(0,255,65,0.3)]">
              <CardHeader>
                <CardTitle className="text-green-400 text-center drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">STAKE</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-green-300">
                <div className="text-6xl mb-4">🔒</div>
                <p className="mb-4">Lock your <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-4 w-4 mx-1" />OCAI for exactly 55 days</p>
                <p className="text-sm text-green-300/70">NFT minted as Proof-Of-Stake (POS)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-green-400/50 hover:shadow-[0_0_40px_rgba(0,255,65,0.3)]">
              <CardHeader>
                <CardTitle className="text-green-400 text-center drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">EARN</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-green-300">
                <div className="text-6xl mb-4">💰</div>
                <p className="mb-4">🤖 OCBotz target 555% yield in TBILL & FED over 55 days</p>
                <p className="text-sm text-green-300/70">Plus guaranteed 3.69% <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-3 w-3 mx-1" />OCAI Yield</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-green-400/50 hover:shadow-[0_0_40px_rgba(0,255,65,0.3)]">
              <CardHeader>
                <CardTitle className="text-green-400 text-center drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]">CLAIM</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-green-300">
                <div className="text-6xl mb-4">🎁</div>
                <p className="mb-4">Burn NFT to claim all rewards</p>
                <p className="text-sm text-green-300/70"><img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-3 w-3 mx-1" />OCAI + Yield + TBILL + FED</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-12 bg-red-900/20 border-red-400/50">
            <CardHeader>
              <CardTitle className="text-red-400 text-center drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">⚠️ EARLY EXIT PENALTY</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-red-300">
              <p>Burn NFT before 55 days = 25% penalty + no rewards</p>
              <p className="text-sm mt-2">Patience is rewarded. Greed is punished.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced OCBotz Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-400 drop-shadow-[0_0_30px_rgba(0,255,65,0.9)]">
            AUTONOMOUS 🤖 OCBOTZ
          </h2>
          
          <Card className="bg-gradient-to-br from-black to-green-900/10 border-green-400/50 hover:shadow-[0_0_50px_rgba(0,255,65,0.5)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-green-400 text-center text-2xl flex items-center justify-center gap-2 drop-shadow-[0_0_20px_rgba(0,255,65,0.8)]">
                <Bot className="h-8 w-8 text-green-400 drop-shadow-[0_0_15px_rgba(0,255,65,0.7)]" />
                Reverse Liquidity Engineering Technology
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4 drop-shadow-[0_0_15px_rgba(0,255,65,0.7)]">24/7 Autonomous Operation</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Multiple 🤖 OCBotz deployed across <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="PulseChain" className="inline h-4 w-auto mx-1" />PulseChain</li>
                    <li>• Each bot holds percentage of <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-3 w-3 mx-1" />OCAI supply</li>
                    <li>• Continuous buy/sell operations for rewards</li>
                    <li>• Advanced AI-driven trading algorithms</li>
                    <li>• Target 555% yield in TBILL & FED over 55 days</li>
                    <li>• <span className="text-yellow-400">Smart buybacks to crush jeet sellers</span></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-4 drop-shadow-[0_0_15px_rgba(0,255,65,0.7)]">Triple Purpose System</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <span className="text-green-400">Price Growth:</span> Strategic market operations</li>
                    <li>• <span className="text-green-400">Reward Accumulation:</span> TBILL & FED acquisition</li>
                    <li>• <span className="text-green-400">Anti-Jeet Defense:</span> Smart buybacks when needed</li>
                    <li>• <span className="text-green-400">Supply Management:</span> Token burning mechanism</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-green-400/10 rounded border border-green-400/30 shadow-[0_0_30px_rgba(0,255,65,0.3)]">
                <p className="text-center text-green-300 text-lg mb-4">
                  "The 🤖 OCBotz work tirelessly to maximize value for every <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-4 w-4 mx-1" />OCAI staker, 
                  using cutting-edge Reverse Liquidity Engineering to optimize the entire ecosystem 
                  and target exceptional yields for the Staker Class."
                </p>
                <div className="p-4 bg-yellow-400/10 border border-yellow-400/30 rounded">
                  <p className="text-yellow-300 text-center font-semibold">
                    🚀 <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-4 w-4 mx-1" />OCAI is designed for staking! 
                    More tokens staked = Less liquid supply = Number go up! 📈
                  </p>
                </div>
                <p className="text-center text-green-300/70 text-sm mt-4">
                  * When bots sell to acquire staker rewards, they also execute intelligent buybacks to punish paper hands and protect diamond hand stakers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-green-400 drop-shadow-[0_0_35px_rgba(0,255,65,0.9)]">
            JOIN THE REVOLUTION
          </h2>
          <p className="text-xl text-green-300 mb-8">
            TBILL and FED are destined to peg to $1. Earn millions, potentially billions, 
            by being an active member of the <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-5 w-5 mx-1" />OCAI ecosystem on 
            <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="PulseChain" className="inline h-5 w-auto mx-1" />PulseChain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/whitepaper')}
              className="bg-green-400 text-black hover:bg-green-300 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,65,0.6)]"
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
            <p>OVERCLOCKED <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="OCAI" className="inline h-4 w-4 mx-1" /> • THE FUTURE OF FINANCE • 
            <img src="/lovable-uploads/099d1eef-35f1-4a55-a1c8-c3e45f0e33f1.png" alt="PULSECHAIN" className="inline h-4 w-auto mx-1" />PULSECHAIN</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
