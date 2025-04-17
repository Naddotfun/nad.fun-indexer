/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  IBondingCurveFactory,
  IBondingCurveFactory_Create,
  UniswapV2Factory,
  UniswapV2Factory_PairCreated,
  BondingCurve,
  BondingCurve_Buy,
  BondingCurve_Sell,
  BondingCurve_Listing,
  BondingCurve_Lock,
  BondingCurve_Sync,
  UniswapV2Pair,
  UniswapV2Pair_Sync,
  UniswapV2Pair_Swap,
} from "generated";

IBondingCurveFactory.Create.contractRegister(
  async ({ event, context }) => {
    console.log("Bonding Curve Added", event.params.curve);
    context.addBondingCurve(event.params.curve);
  },
  { preRegisterDynamicContracts: true },
);

UniswapV2Factory.PairCreated.contractRegister(
  async ({ event, context }) => {
    console.log("Uniswap Pair Added", event.params.pair);
    context.addUniswapV2Pair(event.params.pair);
  },
  { preRegisterDynamicContracts: true },
);

BondingCurve.Buy.handler(async ({ event, context }) => {
  const entity: BondingCurve_Buy = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    token: event.params.token,
    amountIn: event.params.amountIn,
    amountOut: event.params.amountOut,
  };

  context.BondingCurve_Buy.set(entity);
});

BondingCurve.Sell.handler(async ({ event, context }) => {
  const entity: BondingCurve_Sell = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    token: event.params.token,
    amountIn: event.params.amountIn,
    amountOut: event.params.amountOut,
  };

  context.BondingCurve_Sell.set(entity);
});

BondingCurve.Listing.handler(async ({ event, context }) => {
  const entity: BondingCurve_Listing = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    curve: event.params.curve,
    token: event.params.token,
    pair: event.params.pair,
    listingWNativeAmount: event.params.listingWNativeAmount,
    listingTokenAmount: event.params.listingTokenAmount,
    burnLiquidity: event.params.burnLiquidity,
  };

  context.BondingCurve_Listing.set(entity);
});

BondingCurve.Lock.handler(async ({ event, context }) => {
  const entity: BondingCurve_Lock = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
  };

  context.BondingCurve_Lock.set(entity);
});

BondingCurve.Sync.handler(async ({ event, context }) => {
  const entity: BondingCurve_Sync = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token: event.params.token,
    reserveWNative: event.params.reserveWNative,
    reserveToken: event.params.reserveToken,
    virtualWNative: event.params.virtualWNative,
  };

  context.BondingCurve_Sync.set(entity);
});

IBondingCurveFactory.Create.handler(async ({ event, context }) => {
  const entity: IBondingCurveFactory_Create = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    curve: event.params.curve,
    token: event.params.token,
    tokenURI: event.params.tokenURI,
    name: event.params.name,
    symbol: event.params.symbol,
    virtualNative: event.params.virtualNative,
    virtualToken: event.params.virtualToken,
  };

  context.IBondingCurveFactory_Create.set(entity);
});

UniswapV2Factory.PairCreated.handler(async ({ event, context }) => {
  const entity: UniswapV2Factory_PairCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    token0: event.params.token0,
    token1: event.params.token1,
    pair: event.params.pair,
    _3: event.params._3,
  };

  context.UniswapV2Factory_PairCreated.set(entity);
});

UniswapV2Pair.Sync.handler(async ({ event, context }) => {
  const entity: UniswapV2Pair_Sync = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pair: event.srcAddress,
    reserve0: event.params.reserve0,
    reserve1: event.params.reserve1,
  };

  context.UniswapV2Pair_Sync.set(entity);
});

UniswapV2Pair.Swap.handler(async ({ event, context }) => {

  const txHash = event.transaction.hash;

  const entity: UniswapV2Pair_Swap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    pair: event.srcAddress,
    sender: event.params.sender,
    amount0In: event.params.amount0In,
    amount1In: event.params.amount1In,
    amount0Out: event.params.amount0Out,
    amount1Out: event.params.amount1Out,
    to: event.params.to,
    txHash: txHash,
  };

  context.UniswapV2Pair_Swap.set(entity);
});

