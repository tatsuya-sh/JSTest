/* eslint-disable no-unused-vars */
/// <reference lib="dom" />

// - 問題5:要素のテキストを変更する関数を作ろう
//    要素id(elementId)とテキスト(text)を引数として受け取ります。
//    受け取ったelementIdでdocumentからタグをさがして、あればそのタグのテキストを、引数で受け取ったtextに変えましょう。
//    もしそのタグが見つからなかった場合は引数で受け取ったidを持つdivタグをつくり引数で受け取ったtextに変更してbodyタグの子要素として追加しましょう。

/**
 * @param {string} elementId
 * @param {string} text
 */

export const changeElementText = (elementId, text) => {
  //ここに記述
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = text
    
    console.log('テキスト変更後の要素:',element)
  } else {
    const newElement = document.createElement('div');
    newElement.id = elementId;
    newElement.innerText = text;

    console.log('新しい要素:',newElement)

    document.body.appendChild(newElement);

    console.log('新しい要素をbodyタグに追加:',newElement)
  }
};

