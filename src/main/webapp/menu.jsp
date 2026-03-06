<html>
<head>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

<div id="mydata">

    <form action="result.jsp" method="post">

        <select name="algorithm" class="select-box">
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
        </select>

        <br><br>

        <input type="text" name="numbers"
               class="input-box"
               placeholder="Enter numbers like 5,2,8,1">

        <br><br>

        <button type="submit" class="b1">Sort</button>

    </form>

</div>

</body>
</html>