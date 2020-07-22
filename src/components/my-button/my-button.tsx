import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

/**
 * @element my-button
 *
 * @fires onClick - click event
 */
@Component({
  tag: "my-button",
  styleUrl: "./my-button.scss",
  // shadow: true,
})
export class MyButton {
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
