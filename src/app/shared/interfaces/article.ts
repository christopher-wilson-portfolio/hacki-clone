export interface Item {
  by: string;
  dead: boolean;
  delete: boolean;
  descendants: number;
  id: number;
  kids: Array<number>;
  parent: string;
  poll: string;
  score: number;
  text: string;
  time: number;
  title: string;
  type: 'comment' | 'job' | 'poll' | 'pollopt' | 'story';
  url: string;
}

export interface AskHN extends Item {}

export interface Comment extends Item {}

export interface Job extends Item {}

export interface Story extends Item {}

