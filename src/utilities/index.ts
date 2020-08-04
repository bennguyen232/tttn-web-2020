export * from "./CheckingArray";
export * from "./Validation";
export * from "./SupportImagePicker";
export * from "./SupportValidate";

export const Sleep = async (second: number) => {
  await new Promise((resolve) => {
    setTimeout(resolve, second);
  });
};


export default {
  Sleep,
};
