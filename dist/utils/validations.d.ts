export interface Validatable {
    value: string | number;
    required?: boolean;
    minLenght?: number;
    maxLenght?: number;
    min?: number;
    max?: number;
}
export declare function validate(validatableInput: Validatable): boolean;
