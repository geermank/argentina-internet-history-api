export function timeline(milestones) {
    return {
        type: "timeline",
        data: {
            milestones: milestones
        }
    }
}

export function timelineMilestone(year, text) {
    return {
        year: year,
        text: text
    }
}