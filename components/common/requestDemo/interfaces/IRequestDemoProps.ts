import IButtonProps from "@/components/common/button/interfaces/IButtonProps";
import IInputProps from "@/components/common/input/interfaces/IInputProps";
import IThemeButtonProps from "@/components/common/themeButton/interfaces/IThemeButtonProps";

export default interface IRequestDemoProps {
    inputProps: IInputProps;
    themeButtonProps: IThemeButtonProps;
    buttonProps: IButtonProps;
}