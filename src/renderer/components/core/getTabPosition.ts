
export enum TabPosition {
    left,
    center,
    right
}

export function getTabPosition(parent_width: number, x: number, y: number): TabPosition {
    let middle_start = (parent_width / 2) - 200;
    let middle_end = (parent_width / 2 + 200);

    if (x < middle_start) {
        return TabPosition.left;
    } else if (x > middle_end) {
        return TabPosition.right;
    } else {
        return TabPosition.center;
    }
}
