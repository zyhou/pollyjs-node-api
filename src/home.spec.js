const path = require("path");

const { Polly } = require("@pollyjs/core");
const { setupPolly } = require("setup-polly-jest");
const NodeHttpAdapter = require("@pollyjs/adapter-node-http");
const FSPersister = require("@pollyjs/persister-fs");

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

const { home } = require("./home");

describe("Polly home", () => {
  setupPolly({
    adapters: ["node-http"],
    persister: "fs",
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, "../__recordings__")
      }
    }
  });

  describe("home", () => {
    it("should return home", async () => {
      const result = await home();

      expect(result.id).toBe("HOME_fr_web");
    });
  });
});
