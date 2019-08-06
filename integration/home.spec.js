const path = require("path");

const { Polly } = require("@pollyjs/core");
const { setupPolly } = require("setup-polly-jest");
const NodeHttpAdapter = require("@pollyjs/adapter-node-http");
const FSPersister = require("@pollyjs/persister-fs");

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

const { createRequest } = require("./createRequest");

jest.unmock("axios");

describe("Integration: home", () => {
  setupPolly({
    mode: process.env.RECORD ? "record" : "replay",
    adapters: ["node-http"],
    persister: "fs",
    persisterOptions: {
      fs: {
        recordingsDir: path.resolve(__dirname, "./__recordings__")
      }
    }
  });

  it("should not change", async () => {
    const { status, body } = await createRequest().get("/");
    expect(status).toBe(200);
    expect(body).toMatchSnapshot();
  });
});
