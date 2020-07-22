import { newSpecPage } from "@stencil/core/testing";
import { MyButton } from "./my-button";

describe("my-button", () => {
  let instance: MyButton;

  beforeEach(async () => {
    const wrapper = await newSpecPage({
      components: [MyButton],
      html: `<my-button></my-button>`,
    });
    instance = wrapper.rootInstance;
  });

  it("smoke test", () => {
    expect(MyButton).toBeDefined();
  });

  it("should emit click event", () => {
    instance.onClick = { emit: jest.fn() };
    instance.handlerClick(new Event("click"));

    expect(instance.onClick.emit).toBeCalledTimes(1);
  });
});
