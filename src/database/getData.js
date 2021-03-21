import { backedGenerator, backersGenerator, leftDaysGenerator, leftGenerator } from "../helpers/getRandomInfo";

const goalBacked = 100000;

export const dataPledge = [
  {
    id: 'Pledge with no reward',
    title: 'Pledge with no reward',
    pledge: undefined,
    description: 'Choose to support us without a reward if you simple believe in our project. As a backer, youwill be signed up to receive product updates via email.',
    left: undefined,
  },
  {
    id: 'Bamboo Stand',
    title: 'Bamboo Stand',
    pledge: 25,
    description: `You get an ergonomic stand made of natural bamboo. You've help us launch our promotional campaign, and you'll be added to a special Backer member list.`,
    left: leftGenerator(),
  },
  {
    id: 'Black Edition Stand',
    title: 'Black Edition Stand',
    pledge: 75,
    description: `You get a Black Special Edition computer stand and personal thank you. You'll be added yo our Backer member list. Shipping is included`,
    left: leftGenerator(),
  },
  {
    id: 'Mahogany Special Edition',
    title: 'Mahogany Special Edition',
    pledge: 200,
    description: `You get two Special Edition Mahogany stands. a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included`,
    left: leftGenerator(),
  },
]

export const dataBacked = {
  goal: goalBacked.toLocaleString(),
  backed: backedGenerator(goalBacked),
  backers: backersGenerator(),
  daysLeft: leftDaysGenerator(),
  // totalDays: 100,
}