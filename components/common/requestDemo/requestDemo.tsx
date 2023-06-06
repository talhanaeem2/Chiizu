import { memo } from "react";

import Button from "@/components/common/button/button";
import Input from "@/components/common/input/input";
import IRequestDemoProps from "@/components/common/requestDemo/interfaces/IRequestDemoProps";
import ThemeButton from "@/components/common/themeButton/themeButton";

import styles from "@/components/common/requestDemo/requestDemo.styles";

const RequestDemo = (props: IRequestDemoProps) => (
    <div className={styles.componentsContainer}>
        <div className={styles.smMarginRight5}>
            <Input {...props.inputProps} />
        </div>
        <div className={styles.buttonContainer}>
            <ThemeButton {...props.themeButtonProps} />
            <Button {...props.buttonProps} />
        </div>
    </div>
);

export default memo(RequestDemo);