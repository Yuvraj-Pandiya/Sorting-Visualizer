package sorting;

import java.util.ArrayList;
import java.util.List;

public class BubbleSort {

    public static List<String> sortSteps(int a[])
    {
        int n = a.length;

        List<String> steps = new ArrayList<>();

        for(int i=0;i<n-1;i++)
        {
            for(int j=0;j<n-i-1;j++)
            {
                if(a[j] > a[j+1])
                {
                    int temp = a[j];
                    a[j] = a[j+1];
                    a[j+1] = temp;
                }
            }

            // Save current step
            String step = "";

            for(int k=0;k<n;k++)
            {
                step += a[k] + " ";
            }

            steps.add(step);
        }

        return steps;
    }
}