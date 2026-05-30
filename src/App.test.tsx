import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'

const contract = '0xa2dd86dcf02c294c18eeb9b3785fe8bc34a6595c'
const buyUrl = `https://pancakeswap.finance/swap?outputCurrency=${contract}&chain=bsc`
let writeText: ReturnType<typeof vi.fn>

describe('Guiguzi DAO homepage', () => {
  afterEach(() => {
    cleanup()
  })

  beforeEach(() => {
    writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText,
      },
    })
  })

  it('renders the core hero, token facts, and dividend matrix', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /鬼谷子·合纵连横/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/2088枚/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/BSC/).length).toBeGreaterThan(0)
    expect(screen.getByText(/双分红矩阵机制/)).toBeInTheDocument()
    expect(screen.getAllByText('2.5%').length).toBeGreaterThan(0)
    expect(screen.getAllByText('0.75%').length).toBeGreaterThan(0)
    expect(screen.getAllByText('0.25%').length).toBeGreaterThan(0)
  })

  it('renders the official community links and QQ group', () => {
    render(<App />)

    expect(screen.getByText(/823433752/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /TG/i })).toHaveAttribute(
      'href',
      'https://t.me/GUIGUZI_DAO',
    )
    expect(screen.getByRole('link', { name: /Debox/i })).toHaveAttribute(
      'href',
      'https://m.debox.pro/group?id=bzqhw6ab&code=rwa7xwk9',
    )
  })

  it('renders the expanded official mechanism and strategy copy', () => {
    render(<App />)

    expect(screen.getByText(/持币即入局，LP则称王/)).toBeInTheDocument()
    expect(screen.getByText(/不谋全局者，不足谋一域/)).toBeInTheDocument()
    expect(screen.getByText(/总量仅2088枚/)).toBeInTheDocument()
    expect(screen.getByText(/持币1枚 \+ 添加LP/)).toBeInTheDocument()
    expect(screen.getByText(/单持如守城/)).toBeInTheDocument()
    expect(screen.getByText(/持币 \+ LP 如出兵/)).toBeInTheDocument()
  })

  it('links the primary action to the PancakeSwap buy page', () => {
    render(<App />)

    expect(screen.getAllByRole('link', { name: /立即购买/i })[0]).toHaveAttribute(
      'href',
      buyUrl,
    )
  })

  it('copies the contract address from the contract bar', async () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /复制合约地址/i }))

    await waitFor(() => expect(writeText).toHaveBeenCalledWith(contract))
    expect(await screen.findByText(/已复制/)).toBeInTheDocument()
  })
})
