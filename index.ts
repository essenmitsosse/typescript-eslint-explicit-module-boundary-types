/* eslint-disable @typescript-eslint/no-empty-interface */
export const foo: {
    interfaceOuter: {
        interfaceInner: (input: number) => number;
    };
} = {
    interfaceOuter: {
        interfaceInner: (input) => (input),
    },
};
