import React from 'react';
import EquipmentCard from '.';
import { Meta, StoryObj } from '@storybook/react';
import { Equipment } from '@/types';

const mock: Equipment = {
    attributes: [
        {
            name: '명중',
            value: 20,
        },
        {
            value: 20,
            name: '치명타',
        },
        {
            value: 20,
            name: '강타 적중',
        },
        {
            name: '동물류 추가 피해량',
            value: 4,
        },
        {
            name: '마나 재생',
            value: 15,
        },
        {
            value: 1.5,
            name: '스킬 재사용 속도',
        },
    ],
    name: '쥬노보트의 파괴검',
    type: '양손검',
    img: 'https://firebasestorage.googleapis.com/v0/b/react-chat-751fb.appspot.com/o/twohandsword%2FSword2H%2000039.webp?alt=media&token=4efae2af-c245-44de-8a34-6b15f6010d6e',
    damage: {
        max: 239,
        min: 51,
    },
    description:
        '실라베스 교단의 마지막 대장로, 쥬노보트의 방심의 환각을 불러 일으키는 힘이 깃든 대검',
    stat: [
        {
            value: 2.5,
            name: '공격 거리',
        },
        {
            name: '공격 속도',
            value: 0.8,
        },
        {
            name: '통찰',
            value: 8,
        },
        {
            name: '기절 적중',
            value: 136,
        },
    ],
    quality: '영웅',
    skill: [
        {
            img: 'https://tlcodex.com/icons/skill/active/s_si_weapon_07.webp',
            value: [
                {
                    increase: 0.5,
                    value: 0.5,
                },
            ],
            title: '쥬노보트의 공허',
            description:
                '양손검 스킬로 생명력 50% 이하의 적에게 기절, 충격 적중 시 해당 효과의 지속 시간 {value}초 증가',
        },
    ],
};

const meta = {
    title: 'Components/EquipmentCard',
    component: EquipmentCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        data: mock,
    },
} satisfies Meta<typeof EquipmentCard>;

export default meta;
type Stroy = StoryObj<typeof meta>;

export const Default: Stroy = {};
