import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Random;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.*;

public class ApplicationTest {
    public static String generateString(Random rng, String characters, int length)
    {
        char[] text = new char[length];
        for (int i = 0; i < length; i++)
        {
            text[i] = characters.charAt(rng.nextInt(characters.length()));
        }
        return new String(text);
    }

    @BeforeEach
    public void init() {
        open("http://localhost:3000/");
    }

    @Test
    public void helloInHome() {
        $("#helloText").shouldHave(text("Welcome to homepage,"));
    }

    @Test
    public void registerLoginAndTrends() {
        Random random = new Random();
        String login = generateString(random, "qwertyuiopasdfghjklzxcvbnm12345678",13) + "@yandex.ru";
        String password = generateString(random, "abcdef",13);

        $("#registerL").click();
        $("#login").setValue(login);
        $("#password").setValue(login);
        $("#submit-reg").click();

        $("#loginL").click();
        $("#login").setValue(login);
        $("#password").setValue(login);
        $("#submit-log").click();

        $("#trendsL").click();
        $("#trendsL").click();
        $(".list-style-title").shouldHave(text("Три полоски"));

        $("#logoutL").click();
    }
}
