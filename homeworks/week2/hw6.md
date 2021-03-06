## hw1：好多星星

在還沒開課前就有預習過第一期，也寫過這些作業了，所以這次用了不同的方法寫出來。
- 第一次用加字串的方式`star += "*"`，將星星放進陣列中。
- 第二次用`"*".repeat(i+1)`，直接將每行所需要的星星數量放進陣列中。

## hw2：大小寫互換

- 第一次寫這題時，map方法不熟悉，因此先將字串拆成陣列後，一一丟進for迴圈中大小寫轉換並放進新的陣列中，最後拼起來轉回字串。
- 第二次用`map`，一樣先將字串拆成陣列後，用map方法將大小寫轉換，得到轉換後的陣列後，再拼起來轉回字串。

第一次 | 第二次
----- | -----
產生一個新陣列，**`return 新陣列的值`** | map，改變原陣列中的值，**`return 改過的原陣列`**

## hw3：判斷質數

小於n的數，以下代稱i
- 第一次先判斷`n<2`，若小於2就不是質數，接著用for迴圈中確認**i除n 餘數為0**時，就不是質數。當for迴圈結束後，還沒被return的n，就是質數。
- 第二則直接for迴圈判斷，沒有進入for迴圈的n就是小於2，不是質數。接著在for迴圈中，如果**i除n 餘數不為0**，則回到迴圈開始處繼續下一輪；**i等於n**時，代表i皆無法整除，所以是質數；剩下的就是**i除n 餘數為0**，不是質數。

## hw4：判斷迴文

這次寫此題時，比預習時寫的精簡，重新看過預習時寫的答案，精簡後跟這次寫的一樣，所以只留這次的答案。
- 在for迴圈中，頭尾的字母一一比對，若不相等，就不是迴文；當for迴圈跑完後，還沒被return的值，就是迴文了。

## hw5：大數加法

此題一樣寫的比預習時精簡，所以只留這次的答案。
- 第一次寫這題時，雖然有想到反轉、補0等等，但溢位不知道該如何處理。雖然有上網查到解答，卻完全看不懂在寫什麼，只好邊思考別人的方法，邊寫，花了5個多小時才完成。這次重寫順利很多。
- 一開始寫文字轉陣列、反轉、補0時，都很順利，邊寫邊`console.log()`確認正不正確。後來在處理溢位時，想了有點久，嘗試過把溢位寫成`Number(arrA[i-1])+Number(arrB[i-1])`發現有bug(例如：889+111，就會有問題)，又重新修正後，想出方法。雖然一度很想打開之前寫的答案，但還是自己想出來並完成了。
