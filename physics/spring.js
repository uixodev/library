// moves a value towards a target using spring physics
export function updateSpring(position, home, velocity, strength, damping = 0.93){
    let force = (home - position) * strength;

    velocity = (velocity + force) * damping;
    position = position + velocity;

    return (position, velocity);
}

// damping = 0.93