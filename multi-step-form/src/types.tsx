export interface FormData {
    name : string;
    email: string;
    phone: string;
    plan: string;
    billingCycle: 'monthly' | 'yearly';
    addons: string[];
}