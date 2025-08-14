export const Space = {
    Sm: '4',
    Md: '8',
    Lg: '16',
    Xl: '32'
}

export function verticalSpace(value) {
    return {
        type: "space",
        data: {
            size: value
        }
    }
}
