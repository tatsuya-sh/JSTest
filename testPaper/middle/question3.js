/* eslint-disable no-unused-vars */
// - 問題3: 合計値、平均値を出そう
//    要素が数値の配列を引数として受け取り、
//    平均値(小数点第一位で四捨五入)、合計値を計算した結果のオブジェクトを返す関数を作ってください。

// 引数の例
// 1. [1,2,3,4,5]

// 返り値の例
// 1. {sum: 15,average:3}

/**
 * @param {number[]} array
 *  @return {{sum:number,average:number}}
 */
export const sumAndAverage = (array) => {
  //ここに記述
  const sum = array.reduce((acc, val) => acc + val, 0);
  const average = Math.round((sum / array.length) * 10) / 10;

  return { sum, average };
};

const result = sumAndAverage([1, 2, 3, 4, 5]);
console.log(result)