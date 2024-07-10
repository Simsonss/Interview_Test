import { merge } from './mergeFunction';

describe('merge function', () => {
    it('should merge three sorted arrays into one sorted array in ascending order', () => {
        const collection1 = [1, 3, 9];
        const collection2 = [6, 4, 2];
        const collection3 = [5, 7, 8];

        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should handle empty arrays', () => {
        const collection1: number[] = [];
        const collection2: number[] = [];
        const collection3: number[] = [];

        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([]);
    });

    it('should handle some empty arrays', () => {
        const collection1 = [1, 3, 9];
        const collection2: number[] = [];
        const collection3 = [2, 6, 7];

        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 2, 3, 6, 7, 9]);
    });

    it('should handle arrays of different lengths', () => {
        const collection1 = [1, 3, 5, 9];
        const collection2 = [6, 4];
        const collection3 = [2, 7, 8];

        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should handle equal elements in different arrays ', () => {
        const collection1 = [1, 3, 5,11];
        const collection2 = [6, 3];
        const collection3 = [2,3, 7, 8, 9,10];

        const result = merge(collection1, collection2, collection3);
        expect(result).toEqual([1, 2, 3, 3, 3, 5, 6, 7, 8, 9,10,11]);
    });


});
