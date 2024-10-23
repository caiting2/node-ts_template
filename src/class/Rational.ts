/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
        private numerator: number;
        private denominator: number;
    
        constructor(numerator: number, denominator: number) {
            if (denominator === 0) {
                throw new Error("Denominator cannot be zero");
            }
            this.numerator = numerator;
            this.denominator = denominator;
            this.normalize(); 
        }
    
        private gcd(a: number, b: number): number {
            if (!b) return a;
            return this.gcd(b, a % b);
        }
    
        public normalize(): Rational {
            const gcdValue = this.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
            this.numerator = this.numerator / gcdValue;
            this.denominator = this.denominator / gcdValue;
    
            if (this.denominator < 0) {
                this.numerator = -this.numerator;
                this.denominator = -this.denominator;
            }
    
            return this;
        }
    
        public isWhole(): boolean {
            return this.denominator === 1;
        }
    
        public isDecimal(): boolean {
            return this.denominator !== 1;
        }
    
        public equals(other: Rational): boolean {
            const r1 = this.normalize();
            const r2 = other.normalize();
            return r1.numerator === r2.numerator && r1.denominator === r2.denominator;
        }
    
        public toString(): string {
            if (this.denominator === 1) {
                return `${this.numerator}`;
            }
            return `${this.numerator}/${this.denominator}`;
        }
    
        public static parseRational(chars: string[]): Rational {
            const numStr = chars.join("");
            const parts = numStr.split("/");
            const numerator = parseInt(parts[0]);
            const denominator = parseInt(parts[1]);
            return new Rational(numerator, denominator);
        }
    
        public static parseRationalFromString(input: string): Rational {
            const parts = input.split("/");
            if (parts.length !== 2) {
                throw new Error("Invalid input format");
            }
            const num = parseInt(parts[0]);
            const denom = parseInt(parts[1]);
            return new Rational(num, denom).normalize();
        }
    }