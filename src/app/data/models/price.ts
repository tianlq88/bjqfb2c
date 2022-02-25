export interface Price {
    id: string;
    skuCode: string;
    amountCents: number;
    amountFloat: number;
    formattedAmount: string;
    compareAtAmountCents: number;
    compareAtAmountFloat: number;
    formattedCompareAtAmount: string;
}