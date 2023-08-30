## TypeScript 07
## Chapter 07: Index Signatures, keyof Assertions and the Record Utility Type
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 TypeScript 資源
https://github.com/gitdagray/typescript-course

### Dave Gray 的 TypeScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&si=8IJALfXOcur2OO_K

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## Quick Concept offline
###  1. Intro
        教學影片開頭和介紹

###  2. Welcome

###  3. Starter code and set up
        在 terminal 輸入 tsc -w
        在 google chrome 瀏覽器 Ctrl + shift + i 開啟 Console

###  4. What are index signatures?
        不知道確切的物件 keys名稱，但知道 key 的類型和 value的類型；
        初學者探索 index 需求的原因
        
###  5. Why you need an index signature
        (1)設定介面，名稱為 TransactionObj
        Pizza, Books, Job 的類別為 number
        宣告 今天交易todayTransaction 的類別為 TransactionObj，記錄費用和收入
        (2)錯誤 1: todaysTransactions 隱含 any 類別，不可使用 string 類別的 prop
        (3)錯誤 2: transactions 的類別為 TransactionObj，不可使用 number 類別的 key

###  6. Index signature syntax
        (1)在不知道 attribute / key / index名稱的前提，
        設定 index 的類別為 string，value 的類別為 number
        (2)index 的類別不可以為 boolean，會顯示錯誤
        
###  7. readonly modifier
        使用 readonly 設定僅允許讀取，不可以做其他使用

###  8. Non-existing properties
        在控制台顯示結果為 undefined

###  9. Required properties combined with an index signature
        (1)將加入原有的 TransactionObj
        (2)TransactionObj 必須有三個預設的屬性，否則會顯示錯誤
        (3)TransactionObj 的新增 index 屬性的 value，類別必須為 number，否則會顯示錯誤

### 10. Optional properties
        (1)設定介面，名稱為 Student
        name 的類別為 string
        GPA 的類別為 number
        classes 的類別為元素為 number 的陣列
        name 和 GPA 屬性一定要有，classes 屬性可有可無
        宣告 student，類別為 Student
        (2)思考屬性和陣列的元素，
        使用 Index signature 設定合適的類型，
        使控制台回傳的結果不會顯示錯誤

### 11. keyof Assertions
        (1)使用 forin迴圈匯出文字模板
        (2)沒有使用 Index signature 會顯示錯誤，
        可以使用 assertion 和 keyof關鍵字 避免錯誤
        (3)不知道物件的類別，
        使用 assertion，keyof關鍵字 和 typeof關鍵字

### 12. Record utility type vs index signatures
        (1)宣告 logStudentKey 載入 student 物件的 key，在控制台回傳 student 物件的 key 為 name, GPA 和 classes 文字模板
        (2)使用 utility 類別設定 Incomes 類別，
        key 可以使用文字類別取代 string
        (3)如果 value 為 number 或 string，對Incomes 類別做對應的修改
        (4)宣告 monthlyIncomes 為 Incomes類別，
        使用 forin迴圈宣告 value 為 revenue，
        並使用 assertion 和 keyof關鍵字回傳結果