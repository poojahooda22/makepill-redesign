const transition = {duration: 1, ease: [0.76, 0, 0.24, 1]}

export const opacity = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: {
            duration: 0.35
        }
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.35}
    }
}

export const rotate = {
    initial: {
        rotate: 0
    },
    open: {
        rotate: 6,
        x: 3,
        transition: {
            duration: 0.35
        }
    },
    closed: {
        rotate: 0,
        transition: {duration: 0.35}
    }
}

export const rotate2 = {
    initial: {
        rotate: 0
    },
    open: {
        rotate: -5,
        x: -1, // move left half to the left
        transition: {
            duration: 0.35
        }
    },
    closed: {
        rotate: 0,
        transition: {duration: 0.35}
    }
}

export const height = {
    initial: {
        height: 0
    },
    enter: {
        height: 'auto',
        transition
    },
    exit: {
        height: 0,
        transition
    }
}