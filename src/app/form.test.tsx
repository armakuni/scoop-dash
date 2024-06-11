describe("Intrested users form", () => {
  it("should display interested peep counts", async () => {
    // Arrange - get the CuT into expected state (set up some test double)
    // prepare test double to return the current count
    // some how inject the test double into the CuT

    // Step 1: const intrestedVisitors = new IntrestedVisitorsRepository
    // Step 2: const visitors = intrestedVisitors.getIntrestedPartiesCount()
    //

    //act (Run the CuT)
    render(<Home />);

    // assert (check our expectation are met)
    expect(
      screen.getByRole("heading", {
        name: (text) => text.includes("ScoopDash"),
      }),
    ).toBeVisible();
  });
});
