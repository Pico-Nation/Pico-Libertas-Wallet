import { Decimal } from 'decimal.js';

export default function calculateAmountOfRam(baseBalance, quoteBalance, PICOAmount) {
  const R = baseBalance;
  const C = quoteBalance.plus(PICOAmount);
  const F = 1.0;

  const base = PICOAmount.dividedBy(C).plus(Decimal(1.0));
  const multiplier = Decimal(1.0).minus(Decimal.pow(base, F));

  return Decimal(0).minus(R.times(multiplier));
}
