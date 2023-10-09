---
sidebar_position: 3
slug: /tokenomics
---

# Tokenomics

## Token details

- Name: Citrus
- Symbol: CTRS
- Decimals: 18
- Fully diluted supply: 10,000,000 CTRS
- Chains: Gnosis chain, Base, Optimism, Arbitrum, BSC, Polygon and more soon

## Initial distribution


Who       | Percentage | Vesting  |
----------|------------|----------|
Devs      | 20%        | linearly over 4 years with full voting power
Seed      | 10%        | first $1000 per investor not vested, rest linearly over 4 years with full voting power
Advisors  | 1%         | linearly over 4 years with full voting power
Airdrop   | 10% <table><tr><td>COMP</td><td>4%</td></tr><tr><td>RGT</td><td>2%</td></tr><tr><td>UMA</td><td>2%</td></tr><tr><td>Midas protocol</td><td>1%</td></tr><tr><td>DefiLlama</td><td>1%</td></tr></table>      | no vesting
Users     | 45%        | <table><tr><td>year 1</td><td>14.5%</td></tr><tr><td>year 2</td><td>7.3%</td></tr><tr><td>year 3 -> 8</td><td>3.6%</td></tr></table>
Referrals | 5%         | <table><tr><td>year 1</td><td>1.6%</td></tr><tr><td>year 2</td><td>0.8%</td></tr><tr><td>year 3 -> 8</td><td>0.4%</td></tr></table>
Treasury  | 9%        | TBD by token holders


## Treasury

> This section can be updated following a vote.

We collect fees from our various products. Those fees can be categorised into three type of assets and how they will be used

#### Stablecoins

usage:
- 50% to Immunefi vault for security, up to 10% of TLV
- 25% for operational expenses, up to $240.000/y, then 10% after
- Up to $6.000/y for infrastructure
- Remaing left in treasury up to $1M, then to buyback $CTRS

#### Blue chip tokens
Blue chip tokens:
- ETH

usage:
- 50% to buyback $CTRS
- 50% deposited into yield generating protocol

#### Other tokens

usage:
- 100% to buyback $CTRS


## Sink and Faucet

Because our plan is to support as many chains as possible, managing the buyback and redistribution of CTRS ourself would be inneficient. We decided to go with a Sink and Faucet solution. This will allow use to collect fees and allow user to stake their CTRS on every chains

### Sink

Every CTRS we buyback following the plan above are going to get burned. They are going to be removed from the circulation on each chain but we are going to keep track of every burned CTRS.

### Faucet

Every CTRS we buyback and burn, will be re-emited to CTRS stakers. Every quarter, we calculate the total number of burned CTRS and calculate a staking rate.

APR = (total CTRS burned - total CTRS re-emited) x 400 / (circulating supply at end of quarter)