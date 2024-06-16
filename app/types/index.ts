export interface Equipment {
    attributes: Attribute[];
    name: string;
    type: string;
    img: string;
    damage: Damage;
    description: string;
    stat: Stat[];
    quality: string;
    skill: Skill[];
}

export interface Attribute {
    name: string;
    value: number;
}

export interface Damage {
    max: number;
    min: number;
}

export interface Stat {
    value: number;
    name: string;
}

export interface Skill {
    img: string;
    value: Value[];
    title: string;
    description: string;
}

export interface Value {
    increase: number;
    value: number;
}
