export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = collection_2.length - 1, k = 0;

    while (i < collection_1.length || j >= 0 || k < collection_3.length) {
        // Assigning a, b, c with max values so that if
		// any value is not present then also we can sort
		// the array.
		var a = Number.MAX_VALUE;
		var b = Number.MAX_VALUE;
		var c = Number.MAX_VALUE;
		// a, b, c variables are assigned only if the
		// value exist in the array.
		if (i < collection_1.length)
		{
			a = collection_1[i];
		}
		if (j >= 0)
		{
			b = collection_2[j];
		}
		if (k < collection_3.length)
		{
			c = collection_3[k];
		}
		// Checking if 'a' is the minimum
		if (a <= b && a <= c)
		{
			(result.push(a) > 0);
			i++;
		}
		else if (b <= a && b <= c)
		{
			(result.push(b) > 0);
			j--;
		}
		else
		{
			if (c <= a && c <= b)
			{
				(result.push(c) > 0);
				k++;
			}
		}
    }

    return result;
}


