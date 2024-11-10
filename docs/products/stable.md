---
sidebar_position: 3
title: Stable
---

# Stable

The Citrus stablecoin is core to the ecosystem. It will be used to collect fees and distribute earnings. It's an over collaterised dollar-pegged stablecoin backed third-party stablecoins deposited into ERC4626 vaults.

Whinin the ecosystem, its main goal is to be used to buyback tokens earned as fees from all the products. The reason we had to create our own token is so that we could make Citrus a multi-chain protocol as it will be burned as we earn fees and minted as we distribute earnings.

Outside the ecosystem it is a yield bearing stablecoin used to exchange goods and services.

Users will be able to mint the stablecoin on chains with highly trusted ERC4626 or swapped using the Citrus DEX when those vaults are not available. Once minted it is transferable to any chains we support.


### Status

The Stable is still work in progress. In it's first iteration we are going to use third-party ERC4626 vaults. Bridging will be done using LayerZero OFT.


### Features

#### Current

None

#### Roadmap

- User mints Citrus Stable by depositing third-party stablecoins into ERC4626 vaults
- User bridges Stable to/from supported chains
- Citrus Governance sets up vault for native minting
- Citrus Manager changes native minting limits based on risks
- Citrus Manager sets Stable yield based on yield from Vault
- Citrus Governance sets up incentivised DEX pools
- Citrus Manager cancels incentivised DEX pools
- Citrus Governance allow Lending market to mint Stable
- User can borrow Stable after depositing collateral

### Ecosystem Integration

#### Current

None

#### Future

- Vault:
  - Backs Stable with third-party stablecoins
  - Generate yields for Stable holders
- Dex Aggregator:
  - Allow swap between Citrus stablecoin and third-party stablecoins
- DEX:
  - Liquidity on chains with no native minting
- Lending:
  - Stable can be borrowed by users
