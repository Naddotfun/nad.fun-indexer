import assert from "assert";
import { 
  TestHelpers,
  IBondingCurveFactory_Create
} from "generated";
const { MockDb, IBondingCurveFactory } = TestHelpers;

describe("IBondingCurveFactory contract Create event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for IBondingCurveFactory contract Create event
  const event = IBondingCurveFactory.Create.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("IBondingCurveFactory_Create is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await IBondingCurveFactory.Create.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualIBondingCurveFactoryCreate = mockDbUpdated.entities.IBondingCurveFactory_Create.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
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
    assert.deepEqual(actualIBondingCurveFactoryCreate, expectedIBondingCurveFactoryCreate, "Actual IBondingCurveFactoryCreate should be the same as the expectedIBondingCurveFactoryCreate");
  });
});
