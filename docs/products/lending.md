---
sidebar_position: 1
---

# Lending

The lending platform is Citrus main product. All other products are intended to integrate or help the lending platform.

### Pools

Pools are isolated markets, each pool have it's own risks parameters. For example their could will be a Chainlink only pool or a SushiSwap LP pool. As long as the price of an asset is public or can be calculated, a new pool can be created and assets added.

Pool types:
- Primary: Chainlink-only, only assets with a chainlink feed can be added. If a derivative (ei: rETH,stETH,OUSD...) doesn't have a Chainlink feed, it should not be added to this pool.
- Secondary: Assets without a Chainlink feed can be added to this pool, they will then be using an on-chain TWAP oracle. For derivative, if an oracle is not available, an hard-coded price can be set, in this case the asset can only be used as collateral.
- DEXes: Additionally to the same assets as in the Primary pool, you will be able to deposit as collateral liquidity tokens from various DEXes