
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.*;

public class WardrobeTest{


    @Test
    void verifyFiveFiftiesTest(){

        Wardrobe newWardrobe = new Wardrobe();
        ArrayList<ArrayList<String>> wardrobeOptions = newWardrobe.getWardrobeOptions(); 

        ArrayList<ArrayList<String>> expectedValue = new ArrayList<ArrayList<String>>();
        ArrayList<String> firstList = new ArrayList<String>();
        firstList.add("50");
        firstList.add("50");
        firstList.add("50");
        firstList.add("50");
        firstList.add("50");

        ArrayList<String> secondList = new ArrayList<String>();
        secondList.add("10");
        secondList.add("0");

        expectedValue.add(firstList);
        expectedValue.add(secondList);

        assertTrue(wardrobeOptions.contains(firstList));
    }
    
    @Test
    void verifyTest(){

        Wardrobe newWardrobe = new Wardrobe();
        ArrayList<ArrayList<String>> wardrobeOptions = newWardrobe.getWardrobeOptions(); 

        ArrayList<ArrayList<String>> expectedValue = new ArrayList<ArrayList<String>>();
        ArrayList<String> firstList = new ArrayList<String>();
        firstList.add("75");
        firstList.add("75");
        firstList.add("100");

        expectedValue.add(firstList);

        assertTrue(wardrobeOptions.contains(firstList));
    }

    
    @Test
    void verifyLengthMoreThanFiveTest(){

        Wardrobe newWardrobe = new Wardrobe();
        ArrayList<ArrayList<String>> wardrobeOptions = newWardrobe.getWardrobeOptions(); 

        assertTrue(wardrobeOptions.size() > 5);
    }
}
