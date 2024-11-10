---
sidebar_position: 4
title: Dex aggregator
---

# Dex aggregator

With the DEX aggregator our goal is to provide the best prices by using all the liquidity available to us. This will make the Citrus platform the go to platform for any new chains.


### Status

We are working on our first iteration of the DEX aggregator, which will be a simple decentralised aggregator that will support all mojor DEXs.

For the next iteration, our goal will be to support more than just DEXs, we want to support ERC4626 vaults, Lending protocols and more. We will need to make the choice between a more centralised version where we do all the matching (like ParaSwap) or a decentralised version with third-party matchers (like CowSwap)


### Features

#### Current

None

#### Roadmap

- User swaps tokens
- Third-party protocol registers their liquidity
- User swaps over a period of time
- Third-party smart contract swaps tokens
- Price oracle (TBD)


### Ecosystem Integration

#### Current

None 

#### Future

- Vault:
  - Used by Vault when harvesting to swap tokens
- Lending:
  - Used by Lending as a Price Oracle (TBD)
DEX:
  - Liquididy source
