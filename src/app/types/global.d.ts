declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "*.scss" {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames;
  export = classNames;
}

// ENVs / glob vars
declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;
