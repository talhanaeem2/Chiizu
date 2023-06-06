import { memo } from "react";

import IThemeButtonProps from "@/components/common/themeButton/interfaces/IThemeButtonProps";

import styles from "@/components/common/themeButton/themeButton.styles";

const ThemeButton = (props: IThemeButtonProps) => (
    <button
        type="button"
        className={styles.button}
    >
        {props.text}
    </button>
);

export default memo(ThemeButton);