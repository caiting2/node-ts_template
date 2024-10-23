export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero.");
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }

    normalize(): Rational {
        const gcd = this.greatestCommonDivisor(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }

    isWhole(): boolean {
        return this.numerator % this.denominator === 0;
    }

    isDecimal(): boolean {
        return !this.isWhole();
    }

    equals(other: Rational): boolean {
        const r1 = this.normalize();
        const r2 = other.normalize();
        return r1.numerator === r2.numerator && r1.denominator === r2.denominator;
    }

    static _parseRational(numeratorArray: string[], denominatorArray: string[]): Rational {
        const numerator = parseInt(numeratorArray.join(''));
        const denominator = parseInt(denominatorArray.join(''));
        return new Rational(numerator, denominator);
    }

    static parseRational(rationalString: string): Rational {
        const parts = rationalString.split('/');
        const numerator = parseInt(parts[0]);
        const denominator = parseInt(parts[1]);
        return new Rational(numerator, denominator);
    }

    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    private greatestCommonDivisor(a: number, b: number): number {
        if (!b) return a;
        return this.greatestCommonDivisor(b, a % b);
    }
}

