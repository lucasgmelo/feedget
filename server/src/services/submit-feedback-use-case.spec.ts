import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const submitFeedback = new SubmitFeedbackUseCase(
  { create: async () => {} },
  { sendMail: async () => {} }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example",
        screenshot: "data:image/png:base64asdasdasd"
      })
    ).resolves.not.toThrow();
  });

  it("should not be able to submit feedback without a type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example",
        screenshot: "data:image/png:base64asdasdasd"
      })
    ).rejects.toThrow();
  });
  
  it("should not be able to submit feedback without a comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png:base64asdasdasd"
      })
    ).rejects.toThrow();
  });
  
  it("should not be able to submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "comment",
        screenshot: "image.jpeg"
      })
    ).rejects.toThrow();
  });
});
