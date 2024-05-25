// [
//     {
//       _id: new ObjectId('6650e762446038b3b54abc1d'),
//       review: 'Blake is a good man given by Doe',
//       rating: '4',
//       ratingGivenTo: new ObjectId('6650e5c9dd166e1702bbadcc'),
//       ratingGivenBy: new ObjectId('664e1973b33fe021b789fbc9'),
//       __v: 0
//     }
//   ]
export const getAverage = (arr)=>
    {
        let average = 0;
        let totalRatings = arr.length;
        let ratingCount = 0;

        arr.forEach(element => {
            ratingCount = ratingCount+Number(element.rating);
        });

        average = ratingCount/totalRatings;
        return average.toFixed(2);
    }