package polimosfismo;

public class Bicicleta implements IMeioTransporte {
    @Override
    public void acelerar() {
        System.out.println("A bicicleta está ganhando velocidade com pedaladas.");
    }

    @Override
    public void frear() {
        System.out.println("A bicicleta está freando usando os manetes de freio.");
    }
}
