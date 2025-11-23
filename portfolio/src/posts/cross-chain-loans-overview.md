---
title: "Cross-chain Loans: Utilising ICP's Chain Abstraction"
description: "A look at how we are using ICP's chain abstraction tech to enable cross-chain lending"
image: "https://www.luko.co.za/img/posts/cross-chain-loans-overview/preview.webp"
date: "2025-11-23"
---

## True blockchain interoperability

While fully abstracted from our users the backbone of our protocol is built on ICP (Internet Computer Protocol). It's only with the recent advancements in their Chain Abstraction and Chain-key technology that something like this is possible. They made the blockchain itself capable of directly reading from and writing to other chains.

ICP smart contracts (canisters) can now sign and submit transactions to other chains without any intermediary. For example a smart contract on ICP can hold actual Bitcoin private keys, monitor the Bitcoin blockchain in real-time, and execute Bitcoin transactions, all natively.

This is possible through something called threshold cryptography. Instead of one entity holding your Bitcoin's private key, ICP nodes collaborate to produce threshold-ECDSA signatures, meaning the private key is mathematically distributed across hundreds of independent nodes. No single node can control your funds, but collectively they can sign transactions when the smart contract logic requires it.

![Map](/img/posts/cross-chain-loans-overview/icp-connecting-chains.jpg)

[Bitcoin on ICP](https://internetcomputer.org/bitcoin)

## Chain-key assets

There is a fundamental problem with current popular bridging infrastructure. Take wBTC as an example, it requires users to deposit their Bitcoin with a centralised custodian (BitGo) who mints corresponding wBTC tokens on Ethereum. Users must trust this intermediary to hold their assets securely and honor redemption. This creates single points of failure and goes against the core principles of decentralisation.

![Map](/img/posts/cross-chain-loans-overview/wbtc.jpg)

[How wBTC works](https://finematics.com/bitcoin-on-ethereum-renbtc-wbtc-tbtc-sbtc/)

Now when minting Chain-key assets like ckBTC, your Bitcoin is stored on a specific Bitcoin address controlled by ICP's minter canister. The minter monitors for transactions in real-time and detects when Bitcoin arrives at this address. After waiting for sufficient confirmations, it mints the equivalent amount of ckBTC on ICP. The process is completely transparent, any user can convert the native token to the chain-key token and vice versa, with all underlying Bitcoin addresses publicly auditable.

For redemption, ckBTC is burnt on ICP, and the minter executes a Bitcoin withdrawal transaction, sending the corresponding amount of native Bitcoin to the specified Bitcoin address. Throughout this entire process, the Bitcoin backing ckBTC is held 100% on-chain by ICP smart contracts using the same threshold ECDSA signatures that enable cross-chain transactions, so no intermediaries or centralised bridges are involved.

This creates true "digital twins" of native assets rather than wrapped tokens dependent on trusted parties.

## How we utilise this tech

Chain-key assets fundamentally reshaped how we designed our protocol. Traditional lending platforms like Aave require all assets to exist on the same chain, so you can't collateralise Bitcoin on Ethereum mainnet to borrow USDT. This forces users into first wrapping their tokens or completely separate lending markets per chain. Currently there is over $5 Billion wBTC being lent on Aave, showcasing the demand for Bitcoin in DeFi.

![Map](/img/posts/cross-chain-loans-overview/wbtc-volume.png)

[wBTC on Aave](https://app.aave.com/reserve-overview/?underlyingAsset=0x2260fac5e5542a773aa44fbcfedf7c193bc2c599)

But more critically, lending protocols depend on rapid liquidation mechanisms to maintain solvency. When a borrower's collateral value drops below the required threshold, automated liquidation engines must immediately sell that collateral to repay lenders. In traditional DeFi this happens through on-chain liquidation bots that compete to execute these trades, often within the same block to prevent bad debt accumulation.

We initially considered using ICP's chain abstraction capabilities to hold native L1 assets directly and execute liquidations on their respective mainnets. While technically possible, this approach creates a fundamental timing problem. Bitcoin transactions can take 10-60 minutes for sufficient confirmations, Ethereum can be unpredictable during network congestion, and other chains have their own characteristics. When liquidations need to execute immediately to maintain protocol health, these delays become unacceptable risks.

Chain-key assets solve this architectural challenge. Since ckBTC, ckETH, ckUSDT, and other supported assets all exist as native tokens on ICP, we can design unified lending pools where all interactions like borrowing, lending, and liquidations happen on ICP's sub-second finality network. The protocol can maintain the health of all positions in real-time, regardless of which underlying blockchain the assets represent. Our current liquidation bot completes a full cycle from identifying bad debt to swapping back to the original asset in 15s.

![Map](/img/posts/cross-chain-loans-overview/liquidation.jpg)

From a user experience it allows them to interact entirely with their native chains, depositing actual Bitcoin from their Bitcoin wallet, borrowing real USDT to their Ethereum address. But under the hood, the protocol benefits from ICP's speed and unified execution environment. A Bitcoin collateralised position can be liquidated instantly using ckBTC, with the proceeds immediately available to repay ckUSDT lenders, all while the user experience remains chain-native.

## No more over complicated UIs

Another big step forward over existing lending platforms is our UI. Current solutions are needlessly complicated and alienate new DeFi users. There's no reason why your mom shouldn't be able to lend and borrow Bitcoin.

We took inspiration from a familiar DEX swap like interface, where everything requires as little interaction as possible.

1. Creating an account is simple, you just log in with your favorite wallet on any chain (launching with Ethereum and Bitcoin)

<video width="100%" autoplay loop muted playsinline controls>
  <source src="/img/posts/cross-chain-loans-overview/create-account.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<br />

2. You can then link and unlink other chain addresses

<video width="100%" autoplay loop muted playsinline controls>
  <source src="/img/posts/cross-chain-loans-overview/link-account.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<br />

3. To lend, select the asset, enter the amount and confirm the transaction. From here it's continuously earning compound yield

<video width="100%" autoplay loop muted playsinline controls>
  <source src="/img/posts/cross-chain-loans-overview/supply-btc.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<br />

4. If you want to borrow native USDT using your supplied BTC as collateral, you can select any amount that keeps your portfolio health in a positive range. This loan has no fixed terms

<video width="100%" autoplay loop muted playsinline controls>
  <source src="/img/posts/cross-chain-loans-overview/borrow-usdt.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<br />

5. From there you can manage your positions through the portfolio tab, like repaying loans, withdrawing collateral, or adjusting your supplied and borrowed amounts

The most critical metric when borrowing is your portfolio health. While most platforms display this as decimal values like 1.24323, we use a simple 0-100% scale. A health score of 100% means you have no debt, while 0% or below triggers partial liquidation to prevent bad debt from accumulating in the protocol. This intuitive approach makes it immediately clear how close you are to liquidation risk.

(Pro users will be able to toggle to the traditional health factor format)

<video width="100%" autoplay loop muted playsinline controls>
  <source src="/img/posts/cross-chain-loans-overview/repay-usdt.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<br />

While the core protocol operates entirely on-chain without any centralised servers, we run additional infrastructure on top of our UI to enhance the user experience. For example it makes email and Telegram notifications possible for position updates, we can also provide more detailed portfolio history tracking, and advanced analytics for our lending pools.

<video width="100%" autoplay loop muted playsinline controls>
  <source src="/img/posts/cross-chain-loans-overview/stats.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<br />

## What's next?

Development is still underway but we aim to launch the first beta version in Q4 this year. Before we launch our protocol will be audited by one of the top firms, more on this will be announced.

If you want to join the waitlist and stand a chance to get early access, make sure to sign up here: [liquidium.fi](https://liquidium.fi/)

Shout out to the team over at Difinity and other contributors for pushing tech on ICP which is enabling the next generate of DeFi applications.
