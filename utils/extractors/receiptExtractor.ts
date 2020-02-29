import { IReceipt } from '../../interface/receipt';

export function ExtractApplId(receipt: IReceipt) {
  if (receipt.Transaction && receipt.Transaction.Application) {
    return receipt.Transaction.Application.applId;
  }

  return '';
}
