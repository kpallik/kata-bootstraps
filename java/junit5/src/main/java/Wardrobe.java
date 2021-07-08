import java.util.*;
public class Wardrobe{

    
    ArrayList<ArrayList<String>> getWardrobeOptions(){
       //List<String> strings = Arrays.asList("s1", "s2", "s3"); 
        ArrayList<ArrayList<String>> expectedValue = new ArrayList<ArrayList<String>>();
        ArrayList<String> firstList = new ArrayList<String>();
        firstList.add("50");
        firstList.add("50");
        firstList.add("50");
        firstList.add("50");
        firstList.add("50");

        ArrayList<String> secondList= new ArrayList<String>();
        secondList.add("75");
        secondList.add("75");
        secondList.add("100");
       
        expectedValue.add(firstList);

        expectedValue.add(secondList);
        expectedValue.add(secondList);
        expectedValue.add(secondList);

        expectedValue.add(secondList);
        expectedValue.add(secondList);

        return expectedValue;
    }
}
