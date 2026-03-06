<%@ page import="sorting.BubbleSort" %>
<%@ page import="java.util.List" %>

<html>
<head>
    <link rel="stylesheet" href="css/style.css">
    <title>Sorting Result</title>
</head>

<body>

<div id="mydata">

    <h2 style="color:white;">Bubble Sort Result</h2>

    <%
        String numbers = request.getParameter("numbers");

        if(numbers != null && !numbers.equals(""))
        {
            String arr[] = numbers.split(",");

            int n = arr.length;
            int a[] = new int[n];

            for(int i=0;i<n;i++)
            {
                a[i] = Integer.parseInt(arr[i].trim());
            }

            // Call BubbleSort class
            List<String> steps = BubbleSort.sortSteps(a);
    %>

    <div class="step-box">

        <h3>Sorting Steps</h3>

        <%
            for(int i=0;i<steps.size();i++)
            {
        %>

        Step <%= (i+1) %> : <%= steps.get(i) %> <br>

        <%
            }
        %>

        <br>

        <h3>Final Sorted Array</h3>

        <%
            String finalArray = steps.get(steps.size()-1);
            out.print(finalArray);
        %>

    </div>

    <br>

    <div id="complexityBox">

        <h3>Time Complexity</h3>

        Best Case : O(n) <br>
        Average Case : O(n²) <br>
        Worst Case : O(n²)

    </div>

    <%
    }
    else
    {
    %>

    <div class="step-box">
        Please enter numbers to sort.
    </div>

    <%
        }
    %>

</div>

</body>
</html>