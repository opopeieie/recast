import { ParserOptions, ParserPlugin } from "@babel/parser";
export type Overrides = Partial<{
    sourceType: ParserOptions["sourceType"];
    strictMode: ParserOptions["strictMode"];
    plugins: ParserPlugin[];
}>;
export default function getBabelOptions(options?: Overrides): ParserOptions & {
    plugins: ParserPlugin[];
};
