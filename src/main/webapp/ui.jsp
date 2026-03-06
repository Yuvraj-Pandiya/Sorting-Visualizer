<%--
  Created by IntelliJ IDEA.
  User: Yuvraj Pandiya
  Date: 06-03-2026
  Time: 16:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>User InterFace</title>
</head>
<body>
<form action="ui.jsp" method="get">
<label for="algo">Sort By</label>
<select id="algo" name="algo">
    <option value="bubble">Bubble Sort</option>
    <option value="selection">Selection Sort</option>
    <option value="insertion">Insertion Sort</option>
    <option value="merge">Merge Sort</option>
    <option value="quick">Quick Sort</option>
    <option value="heap">Heap Sort</option>
    <option value="count">Count Sort</option>
    <option value="radix">Radix Sort</option>
    <option value="comb">Comb Sort</option>
    <option value="shell">Shell Sort</option>
</select>
<input type="text" name="number" placeholder="Enter Number"/>
<input type="submit" value="Sort"/>
</form>

<%
    String algo = request.getParameter("algo");
    String number = request.getParameter("number");

    if(algo != null && number != null) {
        out.println("<h3>Selected Algorithm: " + algo + "</h3>");
        out.println("<h3>Number Entered: " + number + "</h3>");

        switch(algo) {
            case "bubble":
                out.println("Running Bubble Sort...");
%>
<%@ include file="BubbleSort.jsp" %>
<%
                break;
            case "selection":
                out.println("Running Selection Sort...");
                break;
            case "insertion":
                out.println("Running Insertion Sort...");
                break;

            default:
                out.println("Unknown algorithm selected.");
        }
    }

%>


</body>
</html>
