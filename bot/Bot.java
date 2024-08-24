import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.reflect.Field;
import java.util.HashMap;

public class Bot{
    public static void main(String[] args){
        try{
            Robot bot = new Robot();

            BufferedReader in = new BufferedReader(new InputStreamReader(System.in));

            HashMap<String, Integer> map = new HashMap<>();

            for(Field f: KeyEvent.class.getDeclaredFields()){
                if(java.lang.reflect.Modifier.isStatic(f.getModifiers())){
                    try{
                        String name = f.getName();
                        Integer code = Integer.parseInt(f.get(null).toString());
                        map.put(name, code);
                    }
                    catch(Exception e){}
                }
            }

            while(true){
                String line = in.readLine();

                System.out.println(line);

                try{
                    if(line.startsWith("P")){
                        String[] splittedLine = line.split(" ");
                        
                        bot.keyPress(map.get(splittedLine[1]));
                    }
                    else if(line.startsWith("R")){
                        String[] splittedLine = line.split(" ");

                        bot.keyRelease(map.get(splittedLine[1]));
                    }
                }
                catch(Exception e){
                    System.err.println(e);
                }
            }
        }
        catch(Exception e){System.out.println(e);}
    }
}