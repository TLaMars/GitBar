import { azureConfig } from "./api-config";

describe("azureConfig", () => {
  it("pins api-version on every request", () => {
    // Unversioned Azure requests get a pre-5.0 payload with no `isDraft` (KI-8).
    expect(azureConfig({ organization: "org" }, "token").params).toEqual({
      organization: "org",
      "api-version": "7.1",
    });
  });

  it("lets preview-only endpoints override the version", () => {
    expect(
      azureConfig({ "api-version": "7.1-preview.1" }, "token").params,
    ).toEqual({ "api-version": "7.1-preview.1" });
  });
});
