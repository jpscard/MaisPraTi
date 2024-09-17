package polimosfismo;

public class Carro implements IMeioTransporte{

    @Override
    public void acelerar() {
        System.out.println("Carro acelerando rápido");
    }
    
    @Override
    public void frear() {
        System.out.println("Carro freando com o ABS");
    }
}
