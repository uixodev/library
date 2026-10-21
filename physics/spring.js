// moves a value towards a target using spring physics
export function updateSpring(position, home, velocity, strength, damping = 0.93){
    // how far is the dot from home? the further away it is, the stronger the spring pulls
    let force = (home - position) * strength;

    // 0.98 it bounces

    // bouncy spring
    // heavily damped spring


    // velocity = velocity + force; // the spring's pull cha
    velocity = (velocity + force) * damping; // // use the new velocity to move the dot 
    position = position + velocity;

    return (position, velocity);
    // you can actually return MULTIPLE variables as well, or update
    // return means UPDATE
    // these are actually objects
}

// damping = 0.93