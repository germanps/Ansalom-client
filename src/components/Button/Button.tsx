import * as React from "react";
import { IButtonProps } from "./IButtonProps";
import "./Button.scss";


export default class Button extends React.Component<IButtonProps, {}> {
    public render(): React.ReactElement<IButtonProps> {
        return (
            <button
                onClick={this.props._event ? this.props._event : ""}
                type="button"
                className={this.props.background}
            >
                {this.props.title}
            </button>
        );
    }
}