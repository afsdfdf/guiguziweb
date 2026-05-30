import type { CSSProperties } from 'react'
import { useState } from 'react'
import guiguziLogo from './assets/brand/guiguzi-logo.jpg'
import strategyBg from './assets/brand/strategy-bg.png'
import bnbChainLogo from './assets/icons/bnbchain.svg'
import tetherLogo from './assets/icons/tether.svg'
import './App.css'

const contractAddress = '0xa2dd86dcf02c294c18eeb9b3785fe8bc34a6595c'
const buyUrl = `https://pancakeswap.finance/swap?outputCurrency=${contractAddress}&chain=bsc`

const facts = [
  { logo: guiguziLogo, label: '总发行量', value: '2088枚', note: '永久不增发 · 限量发行' },
  { logo: bnbChainLogo, label: '所属网络', value: 'BSC', note: 'BNB Smart Chain' },
  { logo: tetherLogo, label: '分红资产', value: 'USDT', note: 'U 本位自动分红' },
  { logo: guiguziLogo, label: '入局门槛', value: '≥1枚', note: '持币即解锁纵分红' },
]

const dividends = [
  { logo: tetherLogo, title: '持币分红', value: '2.5%', text: '持币≥1枚，自动享受每笔买卖 U 本位分红。' },
  { logo: bnbChainLogo, title: 'LP分红', value: '0.75%', text: '持币 + 添加 LP，额外叠加横向权重收益。' },
  { logo: guiguziLogo, title: '回购销毁', value: '0.25%', text: '部分手续费进入通缩引擎，持续减少流通筹码。' },
]

const mechanismBullets = [
  '总量仅2088枚，比鬼谷亲传弟子更稀缺，每一枚皆为兵符。',
  '持币≥1枚，自动解锁「纵」分红，坐享每笔买卖 2.5% U 本位分红。',
  '持币1枚 + 添加LP，激活「横」权重，额外叠加 0.75% LP 分红 U。',
]

const strategyCards = [
  {
    title: '单持如守城',
    text: '持币即入局，不动如山，自动吃持币分红，适合稳态布局。',
  },
  {
    title: '持币 + LP 如出兵',
    text: '同时吃满 2.5% + 0.75% = 3.25% 双分红 U，权重进一步放大。',
  },
  {
    title: '回购销毁抬升稀缺',
    text: '0.25% 自动回购销毁，总量 2088 持续缩减，强化通缩叙事。',
  },
]

function App() {
  const [copied, setCopied] = useState(false)

  async function copyContract() {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const shellStyle = {
    '--strategy-bg': `url(${strategyBg})`,
  } as CSSProperties

  return (
    <main className="site-shell" style={shellStyle}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="鬼谷子·合纵连横 首页">
          <img src={guiguziLogo} alt="" />
          <span>鬼谷子·合纵连横</span>
        </a>
        <nav className="main-nav" aria-label="主导航">
          <a href="#top">首页</a>
          <a href="#mechanism">机制解密</a>
          <a href="#matrix">双分红矩阵</a>
          <a href="#tokenomics">代币经济</a>
          <a href="#community">社区</a>
        </nav>
        <div className="header-contract" aria-label="合约地址">
          <span>合约</span>
          <code>{contractAddress}</code>
          <button type="button" onClick={copyContract} aria-label="复制合约地址">
            {copied ? '已复制' : '复制'}
          </button>
        </div>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">BNB Smart Chain · AI矿机无限双循环复利</p>
          <h1>
            鬼谷子·<span>合纵连横</span>
          </h1>
          <p className="hero-line">
            <strong>2088枚</strong>
            <span>仅2088枚 · 谋定天下 · 双分红矩阵</span>
          </p>
          <p className="hero-desc">
            纵横捭阖，一策安天下；双分红权重，二币定乾坤。
            在币安智能链上实现 AI 矿机，无限双循环复利。
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href={buyUrl} target="_blank">立即购买</a>
            <a className="ghost-btn" href={`https://bscscan.com/address/${contractAddress}`} target="_blank">
              查看合约
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="项目视觉">
          <img className="hero-logo" src={guiguziLogo} alt="鬼谷子 Logo" />
          <div className="chain-pill">
            <img src={bnbChainLogo} alt="" />
            <span>BSC</span>
          </div>
        </div>
      </section>

      <section className="facts-grid" aria-label="核心数据">
        {facts.map((fact) => (
          <article className="fact-card" key={fact.label}>
            <img src={fact.logo} alt="" />
            <div>
              <p>{fact.label}</p>
              <strong>{fact.value}</strong>
              <span>{fact.note}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="content-panel mechanism-panel" id="mechanism">
        <div className="section-title">
          <p>Mechanism</p>
          <h2>机制解密：持币即入局，LP则称王</h2>
        </div>
        <div className="mechanism-layout">
          <div className="quote-card">
            <span>鬼谷子云</span>
            <strong>不谋全局者，不足谋一域。</strong>
            <p>
              单持是“纵”，LP是“横”。合纵连横，双分红叠满，让持币权重与 LP 权重形成共振。
            </p>
          </div>
          <div className="mechanism-list">
            {mechanismBullets.map((item) => (
              <article key={item}>
                <span />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="matrix-panel" id="matrix">
        <div className="section-title">
          <p>Dividend Matrix</p>
          <h2>双分红矩阵机制</h2>
        </div>
        <div className="dividend-grid">
          {dividends.map((item) => (
            <article className="dividend-card" key={item.title}>
              <img src={item.logo} alt="" />
              <div>
                <h3>{item.title}</h3>
                <strong>{item.value}</strong>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tokenomics" id="tokenomics">
        <div>
          <p className="eyebrow">税费奇谋</p>
          <h2>买 3.5% / 卖 3.5%</h2>
          <p>
            每笔买卖手续费被拆分为纵分红、横分红与回购销毁三路，形成持币收益、LP 权重收益与通缩引擎的闭环。
          </p>
        </div>
        <div className="tax-stack">
          <span><strong>2.5%</strong>纵分红，持币1枚自动到账 U</span>
          <span><strong>0.75%</strong>横分红，添加 LP 者额外 U 分红</span>
          <span><strong>0.25%</strong>回购销毁，通缩引擎持续运转</span>
        </div>
      </section>

      <section className="content-panel tactics-panel">
        <div className="section-title">
          <p>Strategy</p>
          <h2>鬼谷子合纵连横谋略</h2>
        </div>
        <div className="strategy-grid">
          {strategyCards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Join the Matrix</p>
          <h2>持币生息，LP 共赢，谋定天下。</h2>
          <p>合约公开透明，BSC 链上运行。先持 1 枚入局，再添加 LP 叠加横向权重。</p>
        </div>
        <a className="primary-btn" href={buyUrl} target="_blank">立即购买</a>
      </section>

      <footer className="community-bar" id="community">
        <span>QQ群 823433752</span>
        <a href="https://t.me/GUIGUZI_DAO" target="_blank">TG</a>
        <a href="https://m.debox.pro/group?id=bzqhw6ab&code=rwa7xwk9" target="_blank">Debox</a>
      </footer>
    </main>
  )
}

export default App
