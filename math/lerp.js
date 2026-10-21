// smoothly moves a value towards a target
export function lerp(current, target, amount){
    return current + (target - current) * amount;
}

