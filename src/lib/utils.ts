import * as Types from "../types";

export const isObject = (testMaterial: unknown): boolean =>
  typeof testMaterial === "object" && !Array.isArray(testMaterial) && testMaterial != null;

export const hasProps = (mod: object, props: string[] | unknown[]): boolean =>
  isObject(mod) && props.every((prop: string | unknown) => Object.hasOwnProperty.call(mod, prop));

export const prototypeChecker = (
  ModuleExports: Types.DefaultTypes.ModuleExports,
  Protos: string[],
): boolean =>
  isObject(ModuleExports) &&
  Protos.every((p: string) =>
    Object.values(ModuleExports).some((m: Types.DefaultTypes.AnyFunction) => m?.prototype?.[p]),
  );
