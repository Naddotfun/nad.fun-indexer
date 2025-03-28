import assert from "assert";
import {
  TestHelpers,
  IBondingCurveFactory_Create,
  IBondingCurveFactory_SetCore,
  IBondingCurveFactory_SetDexFactory,
  IBondingCurveFactory_SetInitialize,
} from "generated";
const { MockDb, IBondingCurveFactory, UniswapV2Factory } = TestHelpers;

describe("IBondingCurveFactory contract Create event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for IBondingCurveFactory contract Create event
  const event = IBondingCurveFactory.Create.createMockEvent({
    /* It mocks event fields with default values. You can overwrite them if you need */
  });

  it("IBondingCurveFactory_Create is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await IBondingCurveFactory.Create.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualIBondingCurveFactoryCreate =
      mockDbUpdated.entities.IBondingCurveFactory_Create.get(
        `${event.chainId}_${event.block.number}_${event.logIndex}`,
      );

    // Creating the expected entity
    const expectedIBondingCurveFactoryCreate: IBondingCurveFactory_Create = {
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
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualIBondingCurveFactoryCreate,
      expectedIBondingCurveFactoryCreate,
      "Actual IBondingCurveFactoryCreate should be the same as the expectedIBondingCurveFactoryCreate",
    );
  });
});

describe("IBondingCurveFactory contract SetCore event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for IBondingCurveFactory contract SetCore event
  const event = IBondingCurveFactory.SetCore.createMockEvent({
    /* It mocks event fields with default values. You can overwrite them if you need */
  });

  it("IBondingCurveFactory_SetCore is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await IBondingCurveFactory.SetCore.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualIBondingCurveFactorySetCore =
      mockDbUpdated.entities.IBondingCurveFactory_SetCore.get(
        `${event.chainId}_${event.block.number}_${event.logIndex}`,
      );

    // Creating the expected entity
    const expectedIBondingCurveFactorySetCore: IBondingCurveFactory_SetCore = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      core: event.params.core,
    };

    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualIBondingCurveFactorySetCore,
      expectedIBondingCurveFactorySetCore,
      "Actual IBondingCurveFactorySetCore should be the same as the expectedIBondingCurveFactorySetCore",
    );
  });
});

describe("IBondingCurveFactory contract SetDexFactory event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for IBondingCurveFactory contract SetDexFactory event
  const event = IBondingCurveFactory.SetDexFactory.createMockEvent({
    /* It mocks event fields with default values. You can overwrite them if you need */
  });

  it("IBondingCurveFactory_SetDexFactory is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await IBondingCurveFactory.SetDexFactory.processEvent(
      {
        event,
        mockDb,
      },
    );

    // Getting the actual entity from the mock database
    let actualIBondingCurveFactorySetDexFactory =
      mockDbUpdated.entities.IBondingCurveFactory_SetDexFactory.get(
        `${event.chainId}_${event.block.number}_${event.logIndex}`,
      );

    // Creating the expected entity
    const expectedIBondingCurveFactorySetDexFactory: IBondingCurveFactory_SetDexFactory =
      {
        id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
        dexFactory: event.params.dexFactory,
      };

    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualIBondingCurveFactorySetDexFactory,
      expectedIBondingCurveFactorySetDexFactory,
      "Actual IBondingCurveFactorySetDexFactory should be the same as the expectedIBondingCurveFactorySetDexFactory",
    );
  });
});

describe("IBondingCurveFactory contract SetInitialize event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for IBondingCurveFactory contract SetInitialize event
  const event = IBondingCurveFactory.SetInitialize.createMockEvent({
    /* It mocks event fields with default values. You can overwrite them if you need */
  });

  it("IBondingCurveFactory_SetInitialize is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await IBondingCurveFactory.SetInitialize.processEvent(
      {
        event,
        mockDb,
      },
    );

    // Getting the actual entity from the mock database
    let actualIBondingCurveFactorySetInitialize =
      mockDbUpdated.entities.IBondingCurveFactory_SetInitialize.get(
        `${event.chainId}_${event.block.number}_${event.logIndex}`,
      );

    // Creating the expected entity
    const expectedIBondingCurveFactorySetInitialize: IBondingCurveFactory_SetInitialize =
      {
        id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
        deployFee: event.params.deployFee,
        listingFee: event.params.listingFee,
        tokenTotalSupply: event.params.tokenTotalSupply,
        virtualNative: event.params.virtualNative,
        virtualToken: event.params.virtualToken,
        k: event.params.k,
        targetToken: event.params.targetToken,
        feeNumerator: event.params.feeNumerator,
        feeDominator: event.params.feeDominator,
        dexFactory: event.params.dexFactory,
      };

    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(
      actualIBondingCurveFactorySetInitialize,
      expectedIBondingCurveFactorySetInitialize,
      "Actual IBondingCurveFactorySetInitialize should be the same as the expectedIBondingCurveFactorySetInitialize",
    );
  });
});

describe("Dynamic Contracts registration tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  describe("BondingCurve registration through Create event", () => {
    // Creating mock for IBondingCurveFactory contract Create event
    const event = IBondingCurveFactory.Create.createMockEvent({
      owner: "0x123",
      curve: "0x456",
      token: "0x789",
      tokenURI: "test-uri",
      name: "Test Token",
      symbol: "TEST",
      virtualNative: BigInt(1000),
      virtualToken: BigInt(2000),
    });

    it("BondingCurve contract is registered correctly", async () => {
      // Processing the event
      const mockDbUpdated = await IBondingCurveFactory.Create.processEvent({
        event,
        mockDb,
      });

      // Check if the contract is registered
      const registeredContracts =
        mockDbUpdated.entities.IBondingCurveFactory_Create;

      assert(
        registeredContracts
          .getAll()
          .some((contract) => contract.token === event.params.token),
        "BondingCurve contract should be registered",
      );
    });
  });

  describe("UniswapV2Pair registration through PairCreated event", () => {
    // Creating mock for UniswapV2Factory contract PairCreated event
    const event = TestHelpers.UniswapV2Factory.PairCreated.createMockEvent({
      token0: "0x111",
      token1: "0x222",
      pair: "0x333",
      _3: BigInt(0),
    });

    it("UniswapV2Pair contract is registered correctly", async () => {
      // Processing the event
      const mockDbUpdated =
        await TestHelpers.UniswapV2Factory.PairCreated.processEvent({
          event,
          mockDb,
        });

      // Check if the contract is registered
      const registeredContracts =
        mockDbUpdated.entities.UniswapV2Factory_PairCreated;

      assert(
        registeredContracts
          .getAll()
          .some((contract) => contract.pair === event.params.pair),
        "UniswapV2Pair contract should be registered",
      );
    });
  });
});
