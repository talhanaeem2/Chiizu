import { memo } from "react";

import IInputProps from "@/components/common/input/interfaces/IInputProps";

import styles from "@/components/common/input/input.styles";

const Input = (props: IInputProps) => (
    <input
        {...props}
        className={styles.input}
    />
);

export default memo(Input);