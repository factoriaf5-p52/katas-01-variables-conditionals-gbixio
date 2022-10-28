import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class UnitTests {

    @Test
    void greeting() {
        assertEquals(Functions.greetingFor("Javi"), "Hola Javi");
        assertEquals(Functions.greetingFor("Pepa"), "Hola Pepa");
    }

    @Test
    void oddNumbers() {
        assertTrue(Functions.isOdd(17));
        assertFalse(Functions.isOdd(8));
    }

    @Test
    void evenNumbers() {
        assertFalse(Functions.isEven(17));
        assertTrue(Functions.isEven(8));
    }

    @Test
    void rounding() {
        assertEquals(Functions.roundNumber(17.56), 17);
        assertEquals(Functions.roundNumber(8.44), 8);
    }
}
