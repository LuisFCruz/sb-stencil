import { Component, ComponentInterface, h, Prop, Event, EventEmitter } from "@stencil/core";

/**
 * @element my-button-shadow
 *
 * @fires onClick - click event
 */
@Component({
  tag: "my-button-shadow",
  styleUrl: "./my-button-shadow.scss",
  shadow: true,
})
export class MyButtonShadow implements ComponentInterface {
  @Prop()
  text: string;

  @Prop()
  appearance = "primary";

  @Prop()
  disabled = false;

  @Event({
    eventName: "on-click",
  })
  onClick: EventEmitter<any>;

  handlerClick = (event: Event) => {
    this.onClick.emit(event);
  };

  render() {
    return (
      <button
        class={this.appearance}
        disabled={this.disabled}
        onClick={this.handlerClick}
      >
        {this.text}
      </button>
    );
  }
}
