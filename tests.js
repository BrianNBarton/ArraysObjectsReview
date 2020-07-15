(function () {

    "use strict";

    describe('reverseArrayString', () => {
        it('should be a defined function', () => {
            expect(typeof reverseArrayString).toBe('function');
        })
        it('reverseArrayString("4,5,6") should return "6,5,4"', () => {
            expect(reverseArrayString("4,5,6")).toBe("6,5,4");
        })
    })

    describe('swapFirstLast', () => {
        it('should be a defined function', () => {
            expect(typeof swapFirstLast).toBe('function');
        })
        it('swapFirstLast([1, 3, 5, 8]) should return [8, 3, 5, 1]', () => {
            expect(swapFirstLast([1, 3, 5, 8])).toEqual([8, 3, 5, 1]);
        })
    })

    describe('chopDNA', () => {
        it('should be a defined function', () => {
            expect(typeof chopDNA).toBe('function');
        })
        it('chopDNA(["CCC", "AGG", "TAA", "CAA"]) should return ["CCC", "AGG", "TAA"]', () => {
            expect(chopDNA(["CCC", "AGG", "TAA", "CAA"])).toEqual(["CCC", "AGG", "TAA"]);
        })
    })

    describe('sortByViews', () => {
        it('should be a defined function', () => {
            expect(typeof sortByViews).toBe('function');
        })
        it('sortByViews(videos) should return an array of objects sorted by views', () => {
            expect(sortByViews([
                {
                    name: "Keyboard Cat",
                    views: 59000000
                },
                {
                    name: "Charlie Bit My Finger",
                    views: 875000000
                },
                {
                    name: "Rick Astley - Never Gonna Give You Up",
                    views: 721000000
                }
            ])).toEqual([
                {
                    name: "Keyboard Cat",
                    views: 59000000
                },
                {
                    name: "Rick Astley - Never Gonna Give You Up",
                    views: 721000000
                },
                {
                    name: "Charlie Bit My Finger",
                    views: 875000000
                }
            ]);
        })
    })
})();
