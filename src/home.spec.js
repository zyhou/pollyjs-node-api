const mockAxios = require("axios");

const { getHome } = require("./home");

jest.mock("axios");

describe("home", () => {
  it("should call photos and posts API", async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: { property: "value" }
      })
    );

    const home = await getHome();

    expect(home).toEqual({
      posts: { property: "value" },
      photos: { property: "value" }
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    expect(mockAxios.get).toHaveBeenCalledWith("/posts?_start=0&_limit=5");
    expect(mockAxios.get).toHaveBeenCalledWith("/photos?_start=0&_limit=5");
  });
});
