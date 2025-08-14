export function timeline(milestones) {
    return {
        type: "timeline",
        data: {
            milestones: milestones
        }
    }
}

export function timelineMilestone(first, second) {
    return {
        first: first,
        second: second
    }
}