import { newSpecPage } from "@stencil/core/testing";
import { MyButtonShadow } from "./my-button-shadow";

describe("my-button", () => {
  let instance: MyButtonShadow;

  beforeEach(async () => {
    const wrapper = await newSpecPage({
      components: [MyButtonShadow],
      html: `<my-button-shadow></my-button-shadow>`,
    });
    instance = wrapper.rootInstance;
  });

  it("smoke test", () => {
    expect(MyButtonShadow).toBeDefined();
  });

  it("should emit click event", () => {
    instance.onClick = { emit: jest.fn() };
    instance.handlerClick(new Event("click"));

    expect(instance.onClick.emit).toBeCalledTimes(1);
  });
});
