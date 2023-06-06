import { memo } from "react";
import Image from "next/image";

import IButtonProps from "@/components/common/button/interfaces/IButtonProps";

import styles from "@/components/common/button/button.styles";

const colorVariants: Record<string, string> = {
    white: "text-white",
    darkJungleGreen: "text-darkJungleGreen",
};

const Button = (props: IButtonProps) => (
        <button
            type="button"
            className={`${styles.button} ${colorVariants[props.textColor]}`}
        >
            {props.text}
            {
                props.icon &&
                <span className={styles.paddingLeft3}>
                    <Image src={props.icon} alt="icon" width="18" height="17" />
                </span>
            }
        </button>
    );

export default memo(Button);