var physiotherapists = [
    {
        pid: 1,
        name: "John Lee",
        gender: "M",
        title: "physiotherapist"
    },
    {
        pid: 2,
        firstName: "Carrie Lam",
        gender: "F",
        title: "physiotherapist"
    },
    {
        pid: 3,
        firstName: "CY Leung",
        gender: "M",
        title: "physiotherapist"
    },
    {
        pid: 4,
        firstName: "Donald Tsang",
        gender: "M",
        title: "physiotherapist"
    },
    {
        pid: 5,
        firstName: "CH Tung",
        gender: "M",
        title: "physiotherapist"
    },
    {
        pid: 6,
        firstName: "Paul Chan",
        gender: "M",
        title: "senior physiotherapist"
    }
];

export function getPhysiotherapists() {
    return physiotherapists;
}

export function getPhysiotherapist(id) {
    return physiotherapists.find(
        physiotherapist => physiotherapist.pid === id
    );
}

export function deletePhysiotherapist(pid) {
    physiotherapists = physiotherapists.filter(
        (physiotherapist) => physiotherapist.pid !== pid
    );
}


