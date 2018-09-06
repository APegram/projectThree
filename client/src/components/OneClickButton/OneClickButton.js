import React from "react";
import { Button } from "re-pro";

class OneClickButton extends Button {
  constructor(props) {
    super(props);
    this.state = {
      cursorPos: {}
    };
    this.onClick = this.onClick.bind(this);
  }
  handleClick(e) {
    return null;
  }
  render() {
    let {
      active,
      block,
      circle,
      className,
      color,
      outline,
      size,
      rounded,
      gradient,
      floating,
      flat,
      role,
      type,
      social,
      action,
      tag: Tag,
      innerRef,
      ...attributes
    } = this.props;
    return (
      <Button
        active={active}
        block={block}
        circle={circle}
        className={className}
        color={color}
        outline={outline}
        size={size}
        rounded={rounded}
        gradient={gradient}
        floating={floating}
        flat={flat}
        role={role}
        type={type}
        social={social}
        action={action}
        ref={innerRef}
        {...attributes}
        onMouseDown={this.handleClick.bind(this)}
      />
    );
  }
}

export default OneClickButton;
