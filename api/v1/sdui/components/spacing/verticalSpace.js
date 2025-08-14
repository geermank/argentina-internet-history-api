export const Space = {
    Sm: '2',
    Md: '4',
    Lg: '8',
    Xl: '16'
}

export function verticalSpace(value) {
    return {
        type: "space",
        data: {
            size: value
        }
    }
}
