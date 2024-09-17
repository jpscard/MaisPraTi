package polimosfismo;

public class Trem implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("O trem está aumentando a velocidade muito rápido.");
    }

    @Override
    public void frear() {
        System.out.println("O trem está freiou.");
    }
}

    

