import apiWrapper from "./api-wrapper";

const jsonResponse = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

describe("apiWrapper error responses", () => {
  const call = () => apiWrapper("https://dev.azure.com", "PATCH", "/pr", {});

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("carries the server's message on a failed response", async () => {
    (global.fetch as jest.Mock).mockResolvedValue(
      jsonResponse(405, {
        message:
          "The pull request cannot be completed until all required reviewers approve.",
        typeKey: "PullRequestNotCompletableException",
      }),
    );

    await expect(call()).rejects.toMatchObject({
      statusCode: 405,
      apiMessage:
        "The pull request cannot be completed until all required reviewers approve.",
      // The logged message keeps method/URL/status.
      message: expect.stringContaining("PATCH https://dev.azure.com/pr failed"),
    });
  });

  it("leaves apiMessage null when the body is not JSON", async () => {
    (global.fetch as jest.Mock).mockResolvedValue(
      new Response("<html>502 Bad Gateway</html>", {
        status: 502,
        headers: { "Content-Type": "text/html" },
      }),
    );

    await expect(call()).rejects.toMatchObject({
      statusCode: 502,
      apiMessage: null,
    });
  });

  it("leaves apiMessage null when the JSON body has no message string", async () => {
    (global.fetch as jest.Mock).mockResolvedValue(
      jsonResponse(400, { message: { value: "nested" } }),
    );

    await expect(call()).rejects.toMatchObject({
      statusCode: 400,
      apiMessage: null,
    });
  });
});
