var physiotherapists = [
    {
        pid: 1,
        name: "John Lee",
        gender: "M",
        title: "physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 2,
        name: "Carrie Lam",
        gender: "F",
        title: "physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 3,
        name: "CY Leung",
        gender: "M",
        title: "physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 4,
        name: "Donald Tsang",
        gender: "M",
        title: "physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 5,
        name: "CH Tung",
        gender: "M",
        title: "physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 6,
        name: "Paul Chan",
        gender: "M",
        title: "senior physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 7,
        name: "John Tsang",
        gender: "M",
        title: "senior physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 8,
        name: "Henry Tang",
        gender: "M",
        title: "senior physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 9,
        name: "Antony Leung",
        gender: "M",
        title: "senior physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 10,
        name: "Paul Lam",
        gender: "M",
        title: "physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 11,
        name: "Teresa Cheng",
        gender: "F",
        title: "physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 12,
        name: "Rimsky Yuen",
        gender: "M",
        title: "physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    },
    {
        pid: 13,
        name: "SC Wong",
        gender: "M",
        title: "physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
    }, 
    {
        pid: 14,
        name: "Elsie Leung",
        gender: "F",
        title: "physiotherapist",
        photo: process.env.PUBLIC_URL + "image_width_478.png"
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


