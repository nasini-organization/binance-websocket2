import {listPairs3, listPairs4} from '../constants'

export type FuturePair = {
  stream: string;
  eventTime: number;
  pair: string;
  markPrice: number;
  settlePrice: number;
  fundingRate: number;
  fundingTime: number;
};

export const emptyFuturePair: FuturePair = {
  stream: "To define",
  eventTime: 0,
  pair: "To define",
  markPrice: 0,
  settlePrice: 0,
  fundingRate: 0,
  fundingTime: 0,
};

export type FuturePairFull = {
  pair: string;
  data: FuturePair;
};

export const emptyFuturePairFull: FuturePairFull = {
  pair: "To define",
  data: {
    stream: "To define",
    eventTime: 0,
    pair: "To define",
    markPrice: 0,
    settlePrice: 0,
    fundingRate: 0,
    fundingTime: 0,
  }
};

export const futurePairsFull: FuturePairFull[] = listPairs3.map((p) => {
  return {
    pair: p,
    data: {
      stream: "To define",
      eventTime: 0,
      pair: "To define",
      markPrice: 0,
      settlePrice: 0,
      fundingRate: 0,
      fundingTime: 0,
    }
  };
});




export type FuturePair2 = {
    stream: string;
    eventTime: number;
    pair: string;
    type: string;
    markPrice: number;
    settlePrice: number;
    fundingRate: number;
    fundingTime: number;
  };
export type DeliveryPerpetualPair = {
  pair: string;
  type: string;
  date: string;
  markPriceDelivery: number;
  markPricePerpetual: number;
  fundingRate: number;
  fundingTime: number;
  daysLeft: number;
  dailyRevenue: number;
  yearlyRevenue: number;
  intradiary: number;
}
export type DeliveryPerpetualPairTableData = {
  pair: string;
  type: string;
  date: string;
  markPriceDelivery: number;
  markPricePerpetual: number;
  fundingTime: number;
  daysLeft: number;

  fundingRate: string;
  dailyRevenue: string;
  yearlyRevenue: string;
  intradiary: string;
}
export const futurePairs2: DeliveryPerpetualPair[] = listPairs4.map((p) => {
    return{
        pair: p.split('_')[0],
        type: p.split('_')[1], //get perp or deliv
        date: p.split('_')[2], //get the delivery
        markPriceDelivery: 0,
        markPricePerpetual: 0,
        fundingRate: 0,
        fundingTime: 0,
        daysLeft: 0,
        dailyRevenue: 0,
        yearlyRevenue: 0,
        intradiary: 0,
    };
});