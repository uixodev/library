export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

// this function makes sure a number stays within a range
// clamp(700, 0, 500); // 500
// clamp(-20, 0, 500); // 0
// clamp(250, 0, 500); // 250